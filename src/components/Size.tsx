import { getSize } from "@/utils/size";
import { useEffect, useState } from "react";



export const Size = ({ children }: { children: any }) => {
	const [size, setSize] = useState(getSize);

	useEffect(() => {
		const update = () => {
			requestAnimationFrame(() => setSize(getSize()));
		};

		window.addEventListener('resize', update);

		return () => {
			window.removeEventListener('resize', update);
		}
	}, []);

	return children(size);
};