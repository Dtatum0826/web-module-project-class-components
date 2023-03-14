import React from 'react'
import TodoList from './TodoList'
import Todo from './Todo'
export default class App extends React.Component {
  constructor(){
    super();
     
    
  }
  render() {
    return (
      <div>
        <h1>TODOS</h1>
       <ul>
        <li>-Todo1</li>
        <li>-Todo2</li>
        <li>-Todo3</li>
       </ul>

       <form>
        <input/>
       <button>Add</button>
       </form>
       <button>Clear</button>
      </div>
    )
  }
}
