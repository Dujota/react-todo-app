import React, { Component } from "react";
import { Table, Checkbox, Button } from "semantic-ui-react";
import "./App.css";

const todos = [
  "Learn React",
  "Learn Redux",
  "Learn React-Native",
  "Create a new Web App"
];

const renderTodos = todos => {
  return todos.map((todo, index) => (
    <div className="todo-item new" key={index}>
      {todo}
    </div>
  ));
};

class App extends Component {
  render() {
    const shouldRender = true;
    return (
      <div className="app">
        <div className="todo-container">
          <label htmlFor="new-todo">Add a Todo</label>
          <br />
          <input type="text" id="new-todo" />
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>
                  <Checkbox />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {shouldRender ? renderTodos(todos) : "Sorry no Todos"}
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

export default App;
