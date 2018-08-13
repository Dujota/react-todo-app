import React, { Component } from 'react';
import { Table, Checkbox, Button } from 'semantic-ui-react';
import './App.css';
import TodoItem from './todo';

const todos = [
  'Learn React',
  'Learn Redux',
  'Learn React-Native',
  'Create a new Web App',
  'test new item'
];

class App extends Component {
  renderTodos = todos => {
    return todos.map((todo, index) => <TodoItem key={index} todo={todo} />);
  };

  render() {
    return (
      <div className="app">
        <div className="todo-container">
          <div className="ui labeled right icon input">
            <div className="ui label">Add a Todo</div>
            <input type="text" placeholder="Add a TODO" id="new-todo" />
            <i className="add circle link icon" />
          </div>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>
                  <Checkbox />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>{this.renderTodos(todos)}</Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

export default App;
