import React, { Component, ReactElement } from 'react'
import { TreeBuilder } from './TreeBuilder'

type Config = {
  type: string
  name: string
  limit: number
  data: Array<any>
  collapsible?: boolean
}

type Node = {
  name?: string
  data: object
  parents?: Array<any>
}

type TreeNode = Node & {
  id: any
  children?: Array<Node>
  onclick?: Function
  nodeContainerClass?: string
}

type State = {
  loaded: boolean
}

export default class ReactTree extends Component<Config, State> {
  config: Config;
  data: any;
  treeBuilder: TreeBuilder;

  constructor(props: Config) {
    super(props);
    this.config = props;
    this.treeBuilder = new TreeBuilder();
    this.state = { 
      ...this.state,
      loaded: true
    }
  }

  createNode() {

  }

  render() {
    return (
      <></>
    )
  }
}