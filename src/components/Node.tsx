import { Node } from "@/types/Nodes";
import { Size } from "@/types/Size";
import { useDrag } from "@/utils/useDrag";
import { Sprite } from "@pixi/react";

type Props = {
	x: number,
	y: number,
	data: Node
	parent?: boolean
}

const Node = (props: Props) => {
	const { data, parent, ...size } = props;
	return <Sprite interactive image={data.imgUrl} {...size} anchor={0.5} scale={parent ? 1 : .6} name={`node${data.id}`} />
};

export default Node;
