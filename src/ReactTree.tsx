import React, { Component } from 'react'
import { TreeBuilder, TreeNodeElement } from './'

import { Config, Node, TreeNode } from "./types"
import "./ReactTree.css"

export default class ReactTree extends Component<Config> {
  tree: Array<TreeNode>;
  config: Config;
  constructor(props: Config) {
    super(props);
    this.config = {
      ...this.props,
      collapsible: this.props.collapsible ? this.props.collapsible : true,
      tree_leaf_class: this.props.tree_leaf_class ? this.props.tree_leaf_class : "tree_leaf",
      tree_container_class: this.props.tree_container_class ? this.props.tree_container_class : "tree_container",
      tree_children_class: this.props.tree_children_class ? this.props.tree_children_class : "tree_children",
      tree_element_class: this.props.tree_element_class ? this.props.tree_element_class : "tree_element",
      tree_parent_class: this.props.tree_parent_class ? this.props.tree_parent_class : "tree_parent",
    }
    this.tree = TreeBuilder.createTree(this.props.data);
  }

  componentDidMount(): void {
    this.startMap = this.startMap.bind(this);
    this.startMap(this.tree);
  }

  startMap (tree: Array<TreeNode>) {
    let self = this;
    const container = document.getElementById("tree_container");
    for (const object of tree) {
      // Create contanier for the node
      const element = document.createElement("div");
      element.classList.add(this.config.tree_element_class);
      element.setAttribute("id", object.id);
      element.classList.add(this.config.tree_parent_class);
      // Create container to hold node data
      const leaf = document.createElement("tree-node") as TreeNodeElement;
      leaf.innerHTML = object.data?.content ? object.data?.content : "";
      element.appendChild(leaf);
      if (object.children.length > 0) {
        leaf.classList.add(this.config.tree_leaf_class);
        leaf.classList.add("tree_leaf_click");
        // Map children for this node
        self.mapTree(element, object.children, 2, leaf);
      }
      // Append to main container
      container.appendChild(element);
    }
  }

  mapTree (container: HTMLElement, tree: Array<TreeNode>, gap: number, parentLeaf: TreeNodeElement) {
    let self = this;
    // Create container for the children
    const children = document.createElement("div");
    children.classList.add(this.config.tree_children_class);
    const child_id = container.id + "-row";
    children.setAttribute("id", child_id);
    // Add children container id to the parent
    parentLeaf.setAttribute("rowId", child_id);
    for (const object of tree) {
      // Create contanier for the node
      const element = document.createElement("div");
      element.classList.add(this.config.tree_element_class);
      element.setAttribute("id", container.id + "-" + object.id);
      // Create container to hold node data
      const leaf = document.createElement("tree-node") as TreeNodeElement;
      element.appendChild(leaf);
      leaf.innerHTML = object.data?.content ? object.data?.content : "";
      leaf.classList.add(this.config.tree_leaf_class);
      if (object.children.length > 0) {
        element.classList.add(this.config.tree_parent_class);
        leaf.classList.add("tree_leaf_click");
        // Map children for this node
        self.mapTree(element, object.children, gap, leaf);
      }
      // Append to children container
      children.appendChild(element);
    }
    // Append to main container
    container.appendChild(children);
  }

  render() {
    return (
      <div id="tree_container" className='tree_container'></div>
    )
  }
}