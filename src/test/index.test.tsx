import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import ReactTree, { TreeBuilder } from "../../lib/index.js"

globalThis.console = new console.Console({
    inspectOptions: {
        depth: null,
    },
    stdout: process.stdout,
    stderr: process.stderr,
});

const input = [
    {
        id: 1,
        data: "Test 1"
    },
    {
        id: 2,
        data: "Test 2",
        parents: [1]
    },
    {
        id: 3,
        data: "Test 3",
        parents: [2, 1]
    },
    {
        id: 4,
        data: "Test 4",
        parents: [2]
    },
    {
        id: 5,
        data: "Test 5",
        parents: [2, 3, 4]
    }
]

it('TreeBuilder: empty constuctor', () => {
    const tree = new TreeBuilder();
    expect(tree.data).toBe(null);
    expect(tree.config).not.toBe(null);
    const data = tree.createTree(input);
    expect(Array.isArray(data)).toBe(true);
    console.log(data);
});

it('TreeBuilder: constuctor', () => {
    const tree = new TreeBuilder({ data: input });
    console.log(tree.data);
    expect(tree.config).not.toBe(null);
    expect(tree.data).not.toBe(null);
});

it('TreeBuilder: static invoke', () => {
    const data = TreeBuilder.createTree(input);
    console.log(data);
    expect(Array.isArray(data)).toBe(true);
});

it("ReactTree: render test", () => {
    render(<ReactTree data={input} />);
});

it("ReactTree: click test", () => {
    render(<ReactTree data={input} />);
    expect(screen.getByText("Test 1").hasAttribute("hiddenChildren")).toBe(false);
    fireEvent.click(screen.getByText("Test 1"));
    expect(screen.getByText("Test 1").hasAttribute("hiddenChildren")).toBe(true);
});