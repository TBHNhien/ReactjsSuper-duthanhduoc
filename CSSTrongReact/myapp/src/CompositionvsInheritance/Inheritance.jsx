import React, { Component } from 'react'

class Button extends Component {
  handleClick = (event) => {
    console.log(event.target)
  }
  render() {
    return (
      <button className='btn' onClick={this.handleClick}>
        Button
      </button>
    )
  }
}

class YelowButton extends Button {
  render() {
    return (
      <button className='btn btn-yellow' onClick={this.handleClick}>
        Yellow Button
      </button>
    )
  }
}

export class Inheritance extends Component {
  render() {
    return (
      <div>
        Inheritance
        <Button />
        <YelowButton />
      </div>
    )
  }
}

export default Inheritance
