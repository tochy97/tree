import React, { Component } from 'react'
import { TreeBuilder } from './'

import { Config, Node, TreeNode } from "./types"
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
    let self = this;
    const container = document.getElementById("container");
    for (const object of tree) {
      const children = document.createElement("div");
      children.classList.add("children");
      const element = document.createElement("div");
      element.classList.add("element");
      element.style.border = "2px dotted red";
      element.style.textAlign = "center";
      element.setAttribute("id", object.id);
      const leaf = document.createElement("div");
      leaf.innerHTML = object.data?.content ? object.data?.content : "";
      leaf.onclick = function (this: HTMLElement, ev: MouseEvent) {
        const rowElement = this.parentElement.lastElementChild as HTMLElement;
        if ( rowElement.className === "children") {
          if (rowElement.style.display === "flex" || rowElement.style.display === "") {
            rowElement.style.display = "none";
          }
          else {
            rowElement.style.display = "flex";
          }
        }
        if (typeof self.props.onclick === "function") {
          return self.props.onclick();
        }
      };
      element.appendChild(leaf);
      if (object.children.length > 0) {
        leaf.classList.add("leaf");
        self.mapTree(element, object.children, 2);
      }
      children.style.display = "flex";
      children.appendChild(element);
      container.appendChild(children);
    }
  }

  mapTree (container: HTMLDivElement, tree: Array<TreeNode>, gap: number) {
    let self = this;
    const children = document.createElement("div");
    for (const object of tree) {
      children.classList.add("children");
      const element = document.createElement("div");
      element.classList.add("element");
      element.style.border = "2px dotted red";
      element.style.textAlign = "center";
      element.setAttribute("id", object.id);
      const leaf = document.createElement("div");
      leaf.innerHTML = object.data?.content ? object.data?.content : "";
      leaf.onclick = function (this: HTMLElement, ev: MouseEvent) {
        const rowElement = this.parentElement.lastElementChild as HTMLElement;
        if ( rowElement.className === "children") {
          if (rowElement.style.display === "flex" || rowElement.style.display === "") {
            rowElement.style.display = "none";
          }
          else {
            rowElement.style.display = "flex";
          }
        }

        if (typeof self.props.onclick === "function") {
          return self.props.onclick();
        }
      };
      element.appendChild(leaf);
      if (object.children.length > 0) {
        leaf.classList.add("leaf");
        self.mapTree(element, object.children, gap);
      }
      children.appendChild(element);
    }
    container.appendChild(children);
  }

  render() {
    return (
      <div id="container" className='container'></div>
    )
  }
}