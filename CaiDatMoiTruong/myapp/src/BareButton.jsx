import React from 'react'

class BareButton extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick(event, value) {
    console.log(event)
    console.log(value)
  }

  render() {
    return (
      <div>
        {/* lưu ý truyền function vào chứ không phải truyền thực thi function vào */}
        <button onClick={(event) => this.handleClick(event, 'Add')}>Add</button>
        <button onClick={this.handleClick.bind(this, 'Edit')}>Edit</button>
        <button onClick={this.handleClick.bind(this, 'Delete')}>Delete</button>
      </div>
    )
  }
}

export default BareButton
