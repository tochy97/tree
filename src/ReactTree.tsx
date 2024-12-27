import React, { Component, ReactElement } from 'react'
import { TreeBuilder } from './'

import { Config, TreeNode, Node } from "./types"
import "./ReactTree.css"
import { container } from 'webpack';

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
      element.style.border = "2px dotted red";
      element.style.textAlign = "center";
      element.setAttribute("id", object.id);
      element.innerHTML = object.id;
      if (object.children.length > 0) {
        this.mapTree(element, object.children, 1);
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
      element.style.border = "2px dotted red";
      element.style.marginInline = gap + "em";
      element.style.textAlign = "center";
      element.setAttribute("id", object.id);
      element.innerHTML = object.id;
      if (object.children.length > 0) {
        this.mapTree(element, object.children, gap + 2);
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