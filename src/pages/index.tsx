import React from "react";
import dynamic from "next/dynamic";
const Stage = dynamic((() => import("../components/Stage")), { ssr: false });

const App = () => {
	return (
		<Stage />
	);
};

export default App;
