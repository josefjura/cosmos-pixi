import { Position } from '@/types/Position';
import { Container, FederatedPointerEvent } from 'pixi.js';
import { getViewport } from './viewport';
import { useCallback, useRef, useState } from 'react';



export const useDrag = ({ x, y }: Position) => {
	const sprite = useRef<Container>(null);
	const [isDragging, setIsDragging] = useState<boolean>(false);
	const [position, setPosition] = useState<Position>({ x, y });

	const onDown = useCallback(() => {
		const viewport = getViewport(sprite.current);
		viewport?.drag({ pressDrag: false })
		return setIsDragging(true);
	}, []);

	const onUp = useCallback(() => {
		const viewport = getViewport(sprite.current);
		viewport?.drag()
		return setIsDragging(false);
	}, []);

	// TODO: Remove any
	const onMove = useCallback((e: FederatedPointerEvent) => {
		//console.log(isDragging, sprite.current, e.global);
		if (isDragging && sprite.current) {
			setPosition(e.global);
		}
	}, [isDragging, setPosition]);

	return {
		ref: sprite,
		interactive: true,
		pointerdown: onDown,
		pointerup: onUp,
		pointerupoutside: onUp,
		pointermove: onMove,
		alpha: isDragging ? 0.8 : 1,
		anchor: 0.5,
		position
	};
};
