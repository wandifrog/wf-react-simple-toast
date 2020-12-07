let defaultTimeToClose = 2000

const toastContainer = {
  position: 'fixed',
  right: 0,
  top: 0
}

const toast = {
  display: 'flex',
  justifyContent: 'flex-end',
  margin: '10px 10px 0 0',
  maxWidth: '300px'
}

const toastMessage = {
  padding: '15px',
  borderRadius: '10px',
  backgroundColor: '#eee'
}

function ToastContainer(props) {
  defaultTimeToClose = props.timeToClose
  return (
    <div style={toastContainer} id="toast-container" />
  )
}

function Toast(message, timeToClose = defaultTimeToClose) {
  const container = document.getElementById('toast-container')
  let randomId = 'toast=' + Math.ceil((Math.random() * 100000))
  if (!container.children.length) {
    container.innerHTML += `<div id="${randomId}" style={${toast}}><span style={${toastMessage}}>${message}</span></div>`
  } else {
    const copy = container.innerHTML
    container.innerHTML = `<div id="${randomId}" style={${toast}}><span style={${toastMessage}}>${message}</span></div>${copy}`
  }
  setTimeout(() => {
    document.getElementById(randomId).remove()
  }, timeToClose)
}


export { ToastContainer, Toast }
