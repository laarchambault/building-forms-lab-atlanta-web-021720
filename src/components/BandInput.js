// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state={ name: '' }

  handleOnChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleOnSubmit = e => {
    e.preventDefault()
    this.props.addBand(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input 
          type='text' 
          value={this.state.text} 
          name="name"
          onChange={this.handleOnChange} />
          <input type="submit" value="Enter Band" />
        </form>
      </div>
    )
  }
}

export default BandInput
