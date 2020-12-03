import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer, Toast } from '../dist'

const App = () => {
  React.useEffect(() => {
    for (let i = 1, magic = Promise.resolve(); i < 8; i++) {
      magic = magic.then(
        () =>
          new Promise(resolve =>
            setTimeout(() => {
              Toast('toast ' + i)
              resolve()
            }, Math.random() * 1000)
          )
      )
    }
  }, [])
 
  const handleClick = () => {
    Toast('Hello I am a toast!', 1500)
  }
 
  return (
    <React.Fragment>
      <ToastContainer timeToClose="3000" />
      <h1 onClick={() => handleClick()}>Click Me to summon the toast</h1>
    </React.Fragment>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
