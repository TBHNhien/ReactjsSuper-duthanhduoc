import React from 'react'

const lists = ['BMW', 'Toyota', 'Honda']

const fetchApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(lists)
    }, 1000)
  })
}

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
      },
      name: this.props.name,
      lists: []
    }
    this.date = '22/8/2022'
    this.getTime = this.getTime.bind(this)
  }

  componentDidMount() {
    const seconds = document.getElementById('seconds')
    console.log(seconds)

    fetchApi().then((res) =>
      this.setState((prevState) => ({
        ...prevState,
        lists: res
      }))
    )
  }

  getTime() {
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
    console.log(this.state)
    return (
      <div>
        <h1>Hello, world {this.props.name}</h1>
        <h2>It is {this.state.time.created}</h2>
        <h2 id='seconds'>It is {this.state.seconds.created}</h2>
        <h3>It is {this.date}</h3>
        <button onClick={this.getTime}>Get Time</button>
      </div>
    )
  }
}
