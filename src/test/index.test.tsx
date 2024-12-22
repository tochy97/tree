import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import {ReactTree} from "../index"
import exp from 'constants';

globalThis.console = new console.Console({
    inspectOptions: {
      depth:null,
    },
    stdout:process.stdout,
    stderr:process.stderr,
  });
  
it('ReactTree: empty constuctor', () => {
    const tree = new ReactTree();
    expect(tree.data).toBe(null);
    expect(tree.config).not.toBe(null);
});

it('ReactTree: constuctor', () => {
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
            parents: [2,1]
        },
        {
            id: 4,
            parents: [2]
        },
        {
            id: 5,
            parents: [2,3,4]
        }
        
    ]
    const tree = new ReactTree({data:input});
    console.log(tree)
    expect(tree.config).not.toBe(null);
    expect(tree.data).not.toBe(null);
});

it('ReactTreeUI: render test', () => {

});