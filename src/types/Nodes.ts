export type Node = {
	index: number;
	imgUrl: string;
}

export type NodeGroup = {
	groupId: number;
	parent: Node;
	nodes: Node[]
}