import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: "mod1",
    name: "Introduction to NodeJS",
    description: "A module on the basics of NodeJS",
    course: "NodeJS Course",
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  const updateModuleName = async (newName: string) => {
    const response = await fetch(`${MODULE_API_URL}/updateName`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newName }),
    });
    const updatedModule = await response.json();
    setModule(updatedModule);
  };

  const updateAssignmentScore = async (newScore: number) => {
    const response = await fetch(`${ASSIGNMENT_API_URL}/updateScore`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newScore }),
    });
    const updatedAssignment = await response.json();
    setAssignment(updatedAssignment);
  };

  const updateAssignmentCompleted = async (newCompleted: boolean) => {
    const response = await fetch(`${ASSIGNMENT_API_URL}/updateCompleted`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newCompleted }),
    });
    const updatedAssignment = await response.json();
    setAssignment(updatedAssignment);
  };

  const updateModuleDescription = async (newDescription: string) => {
    const response = await fetch(`${MODULE_API_URL}/updateDescription`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newDescription }),
    });
    const updatedModule = await response.json();
    setModule(updatedModule);
  };

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>
      <input
        className="form-control w-75"
        id="wd-assignment-title"
        value={assignment.title}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />
      <hr />
      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment`}
      >
        Get Assignment
      </a>
      <hr />
      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment/title`}
      >
        Get Title
      </a>
      <hr />
      <h4>Module Operations</h4>
      <a id="wd-get-module" className="btn btn-primary" href={`${MODULE_API_URL}`}>
        Get Module
      </a>
      <br />
      <a id="wd-get-module-name" className="btn btn-primary" href={`${MODULE_API_URL}/name`}>
        Get Module Name
      </a>
      <br />
      <input
        className="form-control w-75"
        id="wd-module-name"
        value={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <button className="btn btn-primary" onClick={() => updateModuleName(module.name)}>
        Update Module Name
      </button>
      <hr />
      <input
        className="form-control w-75"
        id="wd-module-description"
        value={module.description}
        onChange={(e) => setModule({ ...module, description: e.target.value })}
      />
      <button className="btn btn-primary" onClick={() => updateModuleDescription(module.description)}>
        Update Module Description
      </button>
      <hr />
      <h4>Assignment Operations</h4>
      <input
        className="form-control w-75"
        type="number"
        id="wd-assignment-score"
        value={assignment.score}
        onChange={(e) => setAssignment({ ...assignment, score: Number(e.target.value) })}
      />
      <button className="btn btn-primary" onClick={() => updateAssignmentScore(assignment.score)}>
        Update Score
      </button>
      <hr />
      <input
        type="checkbox"
        id="wd-assignment-completed"
        checked={assignment.completed}
        onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
      />
      <button className="btn btn-primary" onClick={() => updateAssignmentCompleted(assignment.completed)}>
        Update Completed
      </button>
    </div>
  );
}
