import React from "react";
import { Stage as PixiStage } from "@pixi/react";
import Viewport from './Viewport'
import Backdrop from './Backdrop'
import { Size } from "@/types/Size";
import NodeGroup from "./NodeGroup";
import { useResize } from "@/utils/useResize";
import nodes from '../nodes.json'

const Stage = () => {

	const WORLD_WIDTH = 3000;
	const WORLD_HEIGHT = 3000;

	const [width, height] = useResize();

	const worldSize: Size = { width: WORLD_WIDTH, height: WORLD_HEIGHT }
	const screenSize: Size = { width, height }

	return (
		<PixiStage
			width={width}
			height={height}
			options={{ antialias: true, backgroundColor: 0x121212, resizeTo: window }}

		>
			<Viewport screenSize={screenSize} worldSize={worldSize}>
				<Backdrop worldSize={worldSize} />

				{/* <NodeGroup x={worldSize.width / 2} y={worldSize.height / 2} data={{ groupId: 1, parent: { id: 1, imgUrl: "twitch.png" }, nodes: [{ id: 2, imgUrl: "cs.png" }, { id: 3, imgUrl: "pokemon.png" }] }} /> */}

				{
					nodes.map(nodeGroup => <NodeGroup x={nodeGroup.x + WORLD_WIDTH / 2} y={nodeGroup.y + WORLD_HEIGHT / 2} key={nodeGroup.id} data={{ groupId: nodeGroup.id, parent: { index: nodeGroup.id, imgUrl: nodeGroup.imgSrc }, nodes: nodeGroup.childNodes.map(child => ({ index: child.index, imgUrl: child.imageSrc })) }} />)
				}

			</Viewport>
		</PixiStage>
	);
};

export default Stage;
