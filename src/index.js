import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer, Toast } from './wf-react-simple-toast'

class App extends React.Component {

  handleClick() {
    Toast('Hello I am a toast!', 1500)
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer timeToClose="3000" />
        <h1 onClick={() => this.handleClick()}>Click Me to summon the toast</h1>
      </React.Fragment>
    )
  }

  componentDidMount() {
    for (let i = 1, magic = Promise.resolve(); i < 8; i++) {
      magic = magic.then(
        () =>
          new Promise(resolve =>
            setTimeout(() => {
              Toast("toast " + i);
              resolve();
            }, Math.random() * 1000)
          )
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById('index'))