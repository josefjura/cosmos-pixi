import { Node } from "@/types/Nodes";
import { Size } from "@/types/Size";
import { CHILD_SIZE, PARENT_SIZE } from "@/utils/constants";
import { useDrag } from "@/utils/useDrag";
import { Sprite } from "@pixi/react";

type Props = {
	x: number,
	y: number,
	data: Node
	parent?: boolean
}

const Node = (props: Props) => {

	const { data, parent, ...position } = props;
	const size = parent ? PARENT_SIZE : CHILD_SIZE;
	return <Sprite interactive image={data.imgUrl} {...position} anchor={0.5} width={size} height={size} name={`node${data.index}`} />
};

export default Node;
