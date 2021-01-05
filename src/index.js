const toastContainerStyle = {
  position: 'fixed',
  right: 0,
  top: 0
}

const Toast = () => <div style={toastContainerStyle} id="toast-container" />

function toastMessage(message, timeToClose = 2000) {
  const container = document.getElementById('toast-container')
  const randomId = 'toast=' + Math.ceil((Math.random() * 100000))
  const toastMessageElement = `
    <div id="${randomId}" 
      style="display: flex; justify-content: flex-end; margin: 10px 10px 0 0; max-wdith: 300px">
      <span style="padding: 15px; border-radius: 10px; background: #eee">${message}</span>
    </div>
  `
  if (!container) return

  const oldToastMessageElement = container.innerHTML
  container.innerHTML = toastMessageElement + oldToastMessageElement
  setTimeout(() => {
    document.getElementById(randomId) && document.getElementById(randomId).remove()
  }, timeToClose)
}

Toast.toastMessage = toastMessage

export default Toast
