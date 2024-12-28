export type Config = {
    data: Array<any>
    type?: string
    name?: string
    collapsible?: boolean
    gap?: string
}

export type Node = {
    id: any
    name?: string
    data: object
    parents?: Array<any>
}

export type TreeNode = Node & {
    id: any
    children?: Array<Node>
    onclick?: Function
    nodeContainerClass?: string
}
