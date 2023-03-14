import React from 'react'
 import TodoList from './TodoList'
 import Todo from './Todo';
 import Form from './Form'




export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: true
        },
        {
          name: 'Meal prep',
          id: 1528817084358,
          completed: true
        }

      ]
    }

  }
  handleClear = () => {
    console.log("clear clicked")
  }
  render() {
    const { todos } = this.state
    console.log(todos)
    return (
      <div>
        <h1>TODOS</h1>
        <TodoList todos={todos} />
        <Form/>
        <button onClick ={this.handleClear}>Clear</button>
      </div>
    )
  }
}
