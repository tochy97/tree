import React, { Component } from 'react'
import { TreeBuilder } from './'

import { Config, TreeNode } from "./types"
import "./ReactTree.css"

export default class ReactTree extends Component<Config> {
  tree: Array<TreeNode>;
  constructor(props: Config) {
    super(props);
    this.tree = TreeBuilder.createTree(this.props.data);
  }

  componentDidMount(): void {
    this.startMap = this.startMap.bind(this);
    this.startMap(this.tree);
  }

  startMap (tree: Array<TreeNode>) {
    const container = document.getElementById("container");
    for (const object of tree) {
      const row = document.createElement("div");
      row.classList.add("row");
      const element = document.createElement("div");
      element.classList.add("element");
      element.style.border = "2px dotted red";
      element.style.textAlign = "center";
      element.setAttribute("id", object.id);
      const leaf = document.createElement("div");
      leaf.classList.add("leaf");
      leaf.innerHTML = object.data?.content ? object.data?.content : "";
      leaf.onclick = this.props.onclick;
      element.appendChild(leaf)
      if (object.children.length > 0) {
        this.mapTree(element, object.children, 2);
      }
      row.appendChild(element);
      container.appendChild(row);
    }
  }

  mapTree (container: HTMLDivElement, tree: Array<TreeNode>, gap: number) {
    const row = document.createElement("div");
    for (const object of tree) {
      row.classList.add("row");
      const element = document.createElement("div");
      element.classList.add("element");
      element.style.border = "2px dotted red";
      element.style.textAlign = "center";
      element.setAttribute("id", object.id);
      const leaf = document.createElement("div");
      leaf.classList.add("leaf");
      leaf.innerHTML = object.data?.content ? object.data?.content : "";
      leaf.onclick = this.props.onclick;
      element.appendChild(leaf)
      if (object.children.length > 0) {
        this.mapTree(element, object.children, gap);
      }
      row.appendChild(element);
      container.appendChild(row)
    }
  }

  render() {
    return (
      <div id="container"></div>
    )
  }
}