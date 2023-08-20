import { Viewport } from "pixi-viewport";
import { Container, Sprite } from "pixi.js";
import { VIEWPORT_NAME } from "./constants";

export const getViewport = (sprite: Sprite | Container | null): Viewport | null => {
	if (!sprite || !sprite.parent) return null;

	if (sprite.name === VIEWPORT_NAME) return sprite as Viewport;

	return getViewport(sprite.parent);
}