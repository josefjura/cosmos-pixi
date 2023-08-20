export type Node = {
	id: number;
	imgUrl: string;
}

export type NodeGroup = {
	groupId: number;
	parent: Node;
	nodes: Node[]
}