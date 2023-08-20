import { Size } from "@/types/Size";
import { TilingSprite } from "@pixi/react";

type Props = {
	worldSize: Size
}

const Backdrop = ({ worldSize }: Props) => {
	return <TilingSprite image="bg.png" x={0} y={0} tilePosition={0} width={worldSize.width} height={worldSize.height} alpha={.7} />
};

export default Backdrop;
