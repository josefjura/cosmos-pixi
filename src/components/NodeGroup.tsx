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

const NodeGroup = (props: Props) => {
	const bind = useDrag({ x: props.x, y: props.y });
	console.log(bind);
	const { data, ...size } = props;

	return (
		<Container {...bind} {...size} name={`group_${data.groupId}`}>
			<Node data={data.parent} parent x={0} y={0} />
			{data.nodes.map((node, i) => {
				const position = positionByIndex(45, i, 100);
				return <Node data={node} x={position.x} y={position.y} key={node.id} />;
			})}
		</Container>
	)
};

export default NodeGroup;
