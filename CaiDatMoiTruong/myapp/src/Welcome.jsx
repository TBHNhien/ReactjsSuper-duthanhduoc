import React from 'react'

//functional component
function Welcome(props) {
  console.log(props)
  return (
    <h1 {...props}>
      Hello, {props.name} - {props.age}
    </h1>
  )
}

// class Welcome extends React.Component {
//   render() {
//     console.log(this.props)
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }

export default Welcome
