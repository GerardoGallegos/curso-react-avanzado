import React, { Component } from 'react'
import './global.css'

// React.Children.map
// React.Children.forEach
// React.Children.toArray
// React.Children.count
// React.Children.only

class Parent extends Component {
  render () {
    const { children } = this.props

    return (
      <div className='box'>
        <div className='box blue'>
          { React.Children.only(children) }      
        </div>
      </div>
    )
  }
}

class App extends Component {
  render () {
    return (
      <div>
        <Parent>
          <li>Otro</li>   
        </Parent>
      </div>
    )
  }
}

export default App