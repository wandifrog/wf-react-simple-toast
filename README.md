### wf-react-simple-toast

![example](https://github.com/wandifrog/wf-react-simple-toast/assets/19669385/4b06d8ed-36aa-4cc8-ba05-abda8904e2da)

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
import Toast from 'wf-react-simple-toast'

const App = () => {
  React.useEffect(() => {
    for (let i = 1, magic = Promise.resolve(); i < 8; i++) {
      magic = magic.then(
        () =>
          new Promise(resolve =>
            setTimeout(() => {
              Toast.toastMessage("toast " + i)
              resolve()
            }, Math.random() * 1000)
          )
      )
    }
  }, [])

  const handleClick = () => {
    Toast.toastMessage('Hello I am a toast!', 1500)
  }

  return (
    <React.Fragment>
      <Toast timeToClose="3000" />
      <h1 onClick={() => handleClick()}>Click Me to summon the toast</h1>
    </React.Fragment>
  )
}
```

#### `timeToClose`

Used to set the `Toast` default fading time.

| Type       | Default  | Required |
| ---------- | -------- | -------- |
| number     | 2000     | No       |
