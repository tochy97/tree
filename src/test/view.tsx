import React from 'react';
import ReactDOM from 'react-dom/client';

import ReactTree, { TreeBuilder } from "../index";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const input = [
  {
      id: "Frontend",
      data: {
        content: "Frontend"
      }
  },
  {
      id: "Javascript",
      parents: ["Frontend"],
      data: {
        content: "Javascript"
      }
  },
  {
      id: "CSS",
      parents: ["Frontend"],
      data: {
        content: "CSS"
      }
  },
  {
      id: "HTML",
      parents: ["Frontend"],
      data: {
        content: "HTML"
      }
  },
  {
      id: "Typescript",
      parents: ["Javascript"],
      data: {
        content: "Typescript"
      }
  },
  {
      id: "React",
      parents: ["Javascript"],
      data: {
        content: "React"
      }
  },
  {
      id: "Redux",
      parents: ["React"],
      data: {
        content: "Redux"
      }
  },
  {
      id: "Ant Design",
      parents: ["React"],
      data: {
        content: "Ant Design"
      }
  },
  {
      id: "Apollo GraphQL",
      parents: ["React"],
      data: {
        content: "Apollo GraphQL"
      }
  },
  {
      id: "Apollo GraphQL",
      data: {
        content: "Apollo GraphQL"
      }
  },
]

root.render(
    <ReactTree data={input} />
);