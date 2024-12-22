import React, { Component, ReactElement } from 'react'

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

export default class ReactTreeUI extends Component<Config, State> {
  config: Config;
  data: any;

  constructor(props: Config) {
    super(props);
    this.config = props;
    this.state = { 
      ...this.state,
      loaded: true
    }
  }

  createNode() {

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