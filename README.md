### wf-react-simple-toast

## Documentation

### Installation

**npm**

```bash
npm install wf-react-simple-toast --save
```

**yarn**

```bash
yarn add wf-react-simple-toast
```

### [PlayGround](https://codesandbox.io/s/812j97ljx0)

### Example

```js
import React from "react";
import { ToastContainer, Toast } from 'wf-react-simple-toast'

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
```