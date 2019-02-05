import React, { Component } from 'react'
import './global.css'

class Parent extends Component {
  render () {
    const { children } = this.props

    console.log(children)

    return (
      <div className='box'>
        <div className='box blue'>
          {/* { children }       */}
        </div>
  
        <div className='box red'>
          {/* { children } */}
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
          Hijo de texto
          <div>Elementos</div>
          { () => {} }
          { 444 }
          {`La suma es: ${ 5 + 5}`}
        </Parent>
      </div>
    )
  }
}

export default App