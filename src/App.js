import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import HomePage from './pages/home'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
            <HomePage></HomePage>
            <header className="App-header">
                hello
            </header>
        </Fragment>
      </Provider>
    );
  }
}

export default App
