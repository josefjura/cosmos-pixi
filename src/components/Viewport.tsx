import React, { forwardRef } from "react";
import * as PIXI from "pixi.js";
import { PixiComponent, useApp } from "@pixi/react";
import { Viewport as PixiViewport } from "pixi-viewport";
import { EventSystem } from "@pixi/events";
import { Container as PixiContainer } from "@pixi/display";
import { Size } from "@/types/Size";
import { VIEWPORT_NAME } from "@/utils/constants";

export interface ViewportProps {
	screenSize: Size
	worldSize: Size
	children?: React.ReactNode;
}

export interface PixiComponentViewportProps extends ViewportProps {
	app: PIXI.Application;
}

const PixiComponentViewport = PixiComponent("Viewport", {
	create: (props: PixiComponentViewportProps) => {
		// comes from github issue: https://github.com/davidfig/pixi-viewport/issues/438
		// Install EventSystem, if not already
		// (PixiJS 6 doesn't add it by default)

		const events = new EventSystem(props.app.renderer);
		events.domElement = props.app.renderer.view as any;

		const viewport = new PixiViewport({
			screenWidth: props.app.screen.width,
			screenHeight: props.app.screen.height,
			worldWidth: props.worldSize.width,
			worldHeight: props.worldSize.height,
			ticker: props.app.ticker,
			events: events,
		});
		viewport.drag().pinch().wheel().clampZoom({
			minWidth: 500,
			minHeight: 500,
			maxWidth: props.worldSize.width,
			maxHeight: props.worldSize.height,
		}).clamp({
			top: 0, left: 0, bottom: props.worldSize.height, right: props.worldSize.width
		});

		viewport.moveCenter(props.worldSize.height / 2, props.worldSize.width / 2)
		viewport.name = VIEWPORT_NAME;
		return viewport;
	},

	willUnmount: (instance: PixiViewport, parent: PixiContainer) => {
		// workaround because the ticker is already destroyed by this point by the stage
		instance.options.noTicker = true;
		instance.destroy({ children: true, texture: true, baseTexture: true })

	}
});

const Viewport = forwardRef(
	(props: ViewportProps, ref: React.Ref<PixiViewport>) => {
		const app = useApp();
		return <PixiComponentViewport ref={ref} app={app} {...props} />;
	}
);

export default Viewport;