import React from 'react'
import TodoList from './TodoList'
import Todo from './Todo'
export default class App extends React.Component {
  constructor(){
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
          completed: false
        },
        {
          name: 'Meal prep',
          id: 1528817084358,
          completed: true
        }
        
      ]
     }
    
  }
  render() {
    const {todos} = this.state
    console.log(todos)
    return (
      <div>
        <h1>TODOS</h1>
       <ul>
        { todos.map((todo)=>{
           return <li>-{todo.name}- { todo.completed? <span>Completed!</span> : <span></span>}</li>
          })

        }
       
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
