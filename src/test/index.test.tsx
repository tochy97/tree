import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import { TreeBuilder } from "../../lib/Tree.mjs"

globalThis.console = new console.Console({
    inspectOptions: {
        depth: null,
    },
    stdout: process.stdout,
    stderr: process.stderr,
});

it('TreeBuilder: empty constuctor', () => {
    const tree = new TreeBuilder();
    expect(tree.data).toBe(null);
    expect(tree.config).not.toBe(null);
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
    const data = tree.createTree(input);
    expect(Array.isArray(data)).toBe(true);
    console.log(data);
});

it('TreeBuilder: constuctor', () => {
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
    const tree = new TreeBuilder({ data: input });
    console.log(tree.data);
    expect(tree.config).not.toBe(null);
    expect(tree.data).not.toBe(null);
});

it('ReactTreeUI: static invoke', () => {
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
    const data = TreeBuilder.createTree(input);
    console.log(data);
    expect(Array.isArray(data)).toBe(true);
});