import React, { Component, ReactElement } from 'react'

type Props = {
  data: Array<any>
  header?: string
  type?: string
  collapsible?: boolean
}

type State = Props & {
  loaded: boolean
}

type Node = {
  children: Array<Node>
  id: any
}

type Data = {
  id: string
  name: string
  onclick?: Function
  data?: any
  children?: Array<any>
  nodeContainerClass: string
}

export default class ReactTreeUI extends Component<Props, State> {
  config: Props;

  constructor(props: Props) {
    super(props);
    this.state = {
      loaded: false,
      data: props.data,
      type: typeof props.data === "string" ? props.data : "tree",
      collapsible: typeof props.collapsible === "boolean" ? props.collapsible : true
    }
    this.createTree();
    this.state = { 
      ...this.state,
      loaded: true
    }
  }

  createTree(): Array<Node> {
    const output:Array<Node> = [];
    for (const object of this.config.data) {
      const newNode:Node = {
        id: object.id,
        children: this.createChildren(this.config.data)
      }
      output.push(newNode);
    }
    return output;
  }

  createChildren(children: Array<any>): Array<Node> {
    const output: Array<Node> = [];
    for (const object of children) {
      const newNode: Node = {
        id: object.id,
        children: this.createChildren(this.config.data)
      }
      output.push(newNode);
    }
    return output;
  }

  render() {
    return (
      <div>
        <svg
          role='button'
          className={this.state.loaded ? "update_button" : "spin"}
          fill="currentColor"
          height="1em"
          stroke="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.7507,16.0022 C3.3517,20.0982 7.3367,23.0002 11.9997,23.0002 C18.0747,23.0002 22.9997,18.0752 22.9997,12.0002 M22.2497,7.9982 C20.6487,3.9012 16.6627,1.0002 11.9997,1.0002 C5.9247,1.0002 0.9997,5.9252 0.9997,12.0002 M8.9997,16.0002 L0.9997,16.0002 L0.9997,24.0002 M22.9997,0.0002 L22.9997,8.0002 L14.9997,8.0002"
            fill="none"
            strokeWidth="2"
          />
        </svg>
      </div>
    )
  }
}