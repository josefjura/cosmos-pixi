import { Position } from '@/types/Position';
import { Container, FederatedPointerEvent } from 'pixi.js';
import { getViewport } from './viewport';
import { useCallback, useRef, useState } from 'react';



export const useDrag = ({ x, y }: Position) => {
	const ref = useRef<Container>(null);
	const [isDragging, setIsDragging] = useState<boolean>(false);
	const [position, setPosition] = useState<Position>({ x, y });

	const onDown = useCallback(() => {
		const viewport = getViewport(ref.current);
		viewport?.drag({ pressDrag: false })
		return setIsDragging(true);
	}, []);

	const onUp = useCallback(() => {
		const viewport = getViewport(ref.current);
		viewport?.drag()
		return setIsDragging(false);
	}, []);

	const onMove = useCallback((e: FederatedPointerEvent) => {
		//console.log(isDragging, sprite.current, e.global);
		if (isDragging && ref.current && ref.current.parent) {
			setPosition(ref.current.parent.toLocal(e.global));
		}
	}, [isDragging, setPosition]);

	return {
		ref,
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
