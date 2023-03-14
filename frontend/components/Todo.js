import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div>
        <button>Add Todo</button>
        <input type="text" placeholder = "New Todo Goes Here"/>
        <button>Clear Todo</button>
      </div>
    )
  }
}
