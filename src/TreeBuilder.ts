type Config = {
    data?: Array<any>
}

type Node = {
    id: any
    name?: string
    data: object
    parents?: any
}

type TreeNode = Node & {
    children?: Array<Node>
}
  
export class TreeBuilder {
    public config?: Config;
    public data?: Array<TreeNode> = [];

    constructor(props?: Config){
        const self = this;
        self.config = {...props};
        if (typeof this.config.data !== "undefined") {
            self.data = TreeBuilder.createTree(this.config.data);
            return ((self) => ({
                config: self.config,
                data: self.data,
                createTree: TreeBuilder.createTree.bind(self)
            }))(self)
        }
        return ((self) => ({
            config: self.config,
            data: null,
            createTree: TreeBuilder.createTree.bind(self)
        }))(self)
    }

    static createTree(inputs: Array<Node>): Array<TreeNode> {
        const output: Array<TreeNode> = [];
        for (let i = 0; i < inputs.length; i++) {
            if (typeof inputs[i].parents === "undefined") {
                const newNode: TreeNode = {
                    id: inputs[i].id,
                    children: TreeBuilder.createChildren(inputs, inputs[i].id),
                    data: inputs[i].data
                }
                output.push(newNode);
            }
        }
        return output;
    }
    
    static createChildren(inputs: Array<Node>, parentId: number): Array<TreeNode> {
        const output: Array<TreeNode> = [];
        for (let i = 0; i < inputs.length; i++) {
            if (Array.isArray(inputs[i].parents)) {
                for (const parent of inputs[i].parents) {
                    if (parent === parentId) {
                        const myId = parentId + '.' + i;
                        const newNode: TreeNode = {
                            id: inputs[i].id,
                            children: this.createChildren(inputs, inputs[i].id),
                            data: inputs[i].data
                        }
                        output.push(newNode);
                    }
                }
            }
        }
        return output;
    }
}