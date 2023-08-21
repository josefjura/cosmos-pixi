import { NodeGroup } from "@/types/Nodes";
import { useDrag } from "@/utils/useDrag";
import { Container } from "@pixi/react";
import Node from "./Node";
import { positionByIndex } from "@/utils/math";

type Props = {
	x: number,
	y: number,
	data: NodeGroup
}

const NodeGroup = ({ data, x, y }: Props) => {
	const bind = useDrag({ x, y });

	return (
		<Container {...bind} name={`group_${data.groupId}`}>
			<Node data={data.parent} parent x={0} y={0} />
			{data.nodes.map((node) => {
				const position = positionByIndex(node.index);
				return <Node data={node} x={position.x} y={position.y} key={node.index} />;
			})}
		</Container>
	)
};

export default NodeGroup;
