import React from 'react';
import ReactDOM from 'react-dom/client';

import ReactTree, { TreeBuilder } from "../index";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

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
root.render(
    <ReactTree data={input} />
);