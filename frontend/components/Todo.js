import React from 'react'

export default class Todo extends React.Component {
  handleClick = ()=>{
    console.log('Li clicked', this.props.todo)
    this.props.handleToggle(this.props.todo.id);
  }
  render() {
    return (
      <div>
       <li onClick={this.handleClick}>-{this.props.todo.task}- 
       { this.props.todo.completed? <span>Completed!</span> : <span></span>}</li>
      </div>
    )
  }
}
 