import React from 'react'

export default class Clock extends React.Component {
  // nếu dùng state thì khai báo constructor
  constructor(props) {
    super(props)
    this.state = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      }
    }
    this.date = '22/8/2022'
  }

  getTime = () => {
    // previousState.time != newState.time
    //previousState.time.created != newState.time.created

    const newState = {
      ...this.state,
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: { created: new Date().getSeconds() }
    }
    this.setState(newState)
  }

  //cách này không thành công khi cập nhật State
  // this.state = { time: new Date().toLocaleTimeString() }

  render() {
    return (
      <div>
        <h1>Hello, world</h1>
        <h2>It is {this.state.time.created}</h2>
        <h2>It is {this.state.seconds.created}</h2>
        <h3>It is {this.date}</h3>
        <button onClick={this.getTime}>Get Time</button>
      </div>
    )
  }
}
