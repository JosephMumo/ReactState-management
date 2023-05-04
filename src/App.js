import React from 'react'
import './App.css'

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      message: ''
    }
  }

  upCount() {
    this.setState({
      count : this.state.count + 1
    })
  }
  downCount() {
    this.setState({
      count :  this.state.count - 1
    })
  }
  changeMessage() {
    this.setState({
      message: `${this.state.count}  saved succesfully!!`
    })
  }
  
  render() {
    return(
      <div className='App'>
        <h2>Counter</h2>
        <h1>{this.state.count}</h1>
        <hr />
        <div className='section'>
          <button onClick={() => this.upCount()}>+</button>
          <button onClick={() => this.downCount()}>-</button>
        </div>
        <button className='btn' onClick={() => this.changeMessage()}>Save Count</button>
        <p>{this.state.message}</p>
      </div>
    )
  }
}
export default App