import { Position } from "@/types/Position";
import { ANGLE_STEP, CHILD_SIZE, NODE_SPACING, PARENT_SIZE } from "./constants";

export const positionByIndex = (index: number): Position => {
	const x = (PARENT_SIZE / 2 + NODE_SPACING + CHILD_SIZE / 2) * -Math.sin(degToRads(-(index * ANGLE_STEP)));
	const y = (PARENT_SIZE / 2 + NODE_SPACING + CHILD_SIZE / 2) * -Math.cos(degToRads(-(index * ANGLE_STEP)));

	return { x, y };
}

/**
 * Converts degrees to radians.
 * @param degrees Angle value in degrees.
 * @returns Angle value in radians.
 */
export const degToRads = (degrees: number) => degrees * (Math.PI / 180);