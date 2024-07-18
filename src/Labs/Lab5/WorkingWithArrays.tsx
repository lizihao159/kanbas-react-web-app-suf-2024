import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";

export default function WorkingWithArrays() {
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  const updateTodoDescription = async (id: string, description: string) => {
    try {
      const response = await fetch(`${REMOTE_SERVER}/lab5/todos/${id}/description/${description}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const updatedTodos = await response.json();
      // Handle the updated todos if needed
    } catch (error) {
      console.error('Failed to update description:', error);
    }
  };

  const updateTodoCompleted = async (id: string, completed: boolean) => {
    try {
      const response = await fetch(`${REMOTE_SERVER}/lab5/todos/${id}/completed/${completed}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const updatedTodos = await response.json();
      // Handle the updated todos if needed
    } catch (error) {
      console.error('Failed to update completed:', error);
    }
  };

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary" href={`${REMOTE_SERVER}/lab5/todos`}>
        Get Todos
      </a>
      <hr />
      <h3>Filtering Array Items</h3>
      <a id="wd-retrieve-completed-todos" className="btn btn-primary" href={`${REMOTE_SERVER}/lab5/todos?completed=true`}>
        Get Completed Todos
      </a>
      <hr />
      <h3>Creating new Items in an Array</h3>
      <a id="wd-create-todo" className="btn btn-primary" href={`${REMOTE_SERVER}/lab5/todos/create`}>
        Create Todo
      </a>
      <hr />
      <h3>Deleting from an Array</h3>
      <a id="wd-delete-todo" className="btn btn-primary float-end" href={`${REMOTE_SERVER}/lab5/todos/${todo.id}/delete`}>
        Delete Todo with ID = {todo.id}
      </a>
      <input value={todo.id} className="form-control w-50" onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
      <hr />
      <h3>Updating an Item in an Array</h3>
      <a href={`${REMOTE_SERVER}/lab5/todos/${todo.id}/title/${todo.title}`} className="btn btn-primary float-end">
        Update Todo
      </a>
      <input value={todo.id} className="form-control w-25 float-start me-2" onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
      <input value={todo.title} className="form-control w-50 float-start" onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
      <br />
      <br />
      <hr />
      <h4>Retrieving an Item from an Array by ID</h4>
      <a id="wd-retrieve-todo-by-id" className="btn btn-primary float-end" href={`${REMOTE_SERVER}/lab5/todos/${todo.id}`}>
        Get Todo by ID
      </a>
      <input id="wd-todo-id" value={todo.id} className="form-control w-50" onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
      <hr />
      <h4>Editing Todo Properties</h4>
      <label htmlFor="wd-todo-description">Description:</label>
      <input
        id="wd-todo-description"
        value={todo.description}
        className="form-control w-75"
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <button className="btn btn-primary" onClick={() => updateTodoDescription(todo.id, todo.description)}>
        Update Description
      </button>
      <br />
      <label htmlFor="wd-todo-completed">Completed:</label>
      <input
        type="checkbox"
        id="wd-todo-completed"
        checked={todo.completed}
        onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
      />
      <button className="btn btn-primary" onClick={() => updateTodoCompleted(todo.id, todo.completed)}>
        Update Completed
      </button>
      <hr />
    </div>
  );
}
