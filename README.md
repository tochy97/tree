# React Tree

Tree UI and object builder.

## Getting Started

`npm i @egeonu/react-tree`

## Usage

A few examples of useful commands and/or tasks.

## TreeBuilder
```js
import { TreeBuilder } from "@egeonu/react-tree";

    const input = [
        {
            id: 1,
        },
        {
            id: 2,
            parents: [1]
        },
        {
            id: 3,
            parents: [2, 1]
        },
        {
            id: 4,
            parents: [2]
        },
        {
            id: 5,
            parents: [2, 3, 4]
        }
    ]
    // with props
    const tree = new TreeBuilder({ data: input });
    console.log(tree.data);
    // without props
    const tree2 = new TreeBuilder();
    tree2.createTree(input);
    // static invoke
    const data = TreeBuilder.createTree(input);
```
#### Same expected output 
```js
[
    {
      id: 1,
      children: [
        {
          id: 2,
          children: [
            {
              id: 3,
              children: [ { id: 5, children: [], data: undefined } ],
              data: undefined
            },
            {
              id: 4,
              children: [ { id: 5, children: [], data: undefined } ],
              data: undefined
            },
            { id: 5, children: [], data: undefined }
          ],
          data: undefined
        },
        {
          id: 3,
          children: [ { id: 5, children: [], data: undefined } ],
          data: undefined
        }
      ],
      data: undefined
    }
]
```