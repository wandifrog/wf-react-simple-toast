### wf-react-simple-toast

![](https://wandifrog.github.io/wf-react-simple-toast/img/example.gif)

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

### [PlayGround](https://codesandbox.io/s/hungry-dhawan-fuy64)

### Example

```js
import React from 'react'
import { ToastContainer, Toast } from 'wf-react-simple-toast'

const App = () => {
  React.useEffect(() => {
    for (let i = 1, magic = Promise.resolve(); i < 8; i++) {
      magic = magic.then(
        () =>
          new Promise(resolve =>
            setTimeout(() => {
              Toast("toast " + i)
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
```

### `timeToClose`

Used to set the `Toast` fade time.

| Type       | Default  | Required |
| ---------- | -------- | -------- |
| number     | 2000     | No       |
