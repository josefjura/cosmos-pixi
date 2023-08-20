import React from "react";
import { Stage as PixiStage } from "@pixi/react";
import Viewport from './Viewport'
import Backdrop from './Backdrop'
import { Size as SizeComponent } from "./Size";
import { getSize } from "@/utils/size";
import { Size } from "@/types/Size";
import NodeGroup from "./NodeGroup";

const Stage = () => {
	const WIDTH = 500;
	const HEIGHT = 500;
	const WORLD_WIDTH = 3000;
	const WORLD_HEIGHT = 3000;

	const worldSize: Size = { width: WORLD_WIDTH, height: WORLD_HEIGHT }
	const screenSize: Size = { width: WIDTH, height: HEIGHT }
	const initialSize = getSize()
	return (
		<PixiStage
			width={initialSize.width}
			height={initialSize.height}
			options={{ backgroundColor: 0x000000, resizeTo: window }}
		>
			<SizeComponent>
				{({ width, height }: { width: number, height: number }) => (
					<Viewport screenSize={screenSize} worldSize={worldSize}>
						<Backdrop worldSize={worldSize} />
						{/* <Node x={worldSize.width / 2} y={worldSize.height / 2} />
						<Container>
							<Node x={(worldSize.width / 2) + 100} y={(worldSize.height / 2) + 100} parent />
						</Container> */}
						<NodeGroup x={worldSize.width / 2} y={worldSize.height / 2} data={{ groupId: 1, parent: { id: 1, imgUrl: "twitch.png" }, nodes: [{ id: 2, imgUrl: "cs.png" }, { id: 3, imgUrl: "pokemon.png" }] }} />
					</Viewport>
				)}
			</SizeComponent>
		</PixiStage>
	);
};

export default Stage;
