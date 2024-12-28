export type Config = {
    data: Array<any>
    type?: string
    name?: string
    collapsible?: boolean
    gap?: string
    nodeContainerClass?: string
    onclick?: any
}

export type Node = {
    id: any
    name?: string
    data: any
    parents?: Array<any>
}

export type TreeNode = Node & {
    children?: Array<Node>
}
