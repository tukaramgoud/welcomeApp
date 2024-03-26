import {Component} from 'react'
// Write your code here
import './index.css'

class Welcome extends Component {
  state = {clicked: true}

  buttonTrue = () => {
    this.setState({clicked: false})
  }

  buttonFalse = () => {
    this.setState({clicked: true})
  }

  render() {
    const {clicked} = this.state
    return (
      <div className="background-container">
        <h1 className="main-heading">Welcome</h1>
        <h1 className="sub-heading">Thank you! Happy learning</h1>
        {clicked && (
          <button
            type="button"
            className="button-styling"
            onClick={this.buttonTrue}
          >
            Subscribe
          </button>
        )}
        {!clicked && (
          <button
            type="button"
            className="button-styling"
            onClick={this.buttonFalse}
          >
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
