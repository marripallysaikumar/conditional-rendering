import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="container">
        <Welcome greeting="Hello" />
        {isLoggedIn && <button type="submit">Logout</button>}
        {!isLoggedIn && <button type="submit">Login</button>}
      </div>
    )
  }
}

export default App
