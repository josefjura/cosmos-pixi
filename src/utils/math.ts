import { Position } from "@/types/Position";

export const positionByIndex = (step: number, index: number, distance: number): Position => {
	const x = distance * Math.sin(step * index);
	const y = distance * Math.cos(step * index);

	return { x, y };
}