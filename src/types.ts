export type Config = {
    data: Array<any>
    type?: string
    name?: string
    collapsible?: boolean
    tree_container_class?: string
    tree_children_class?: string
    tree_element_class?: string
    tree_leaf_class?: string
    tree_parent_class?: string
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
