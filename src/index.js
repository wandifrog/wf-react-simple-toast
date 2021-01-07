import React from 'react'

let defaultTimeToClose = 2000

function Toast({ timeToClose = defaultTimeToClose }) {
  defaultTimeToClose = timeToClose
  return React.createElement('div', { id: 'toast-container' })
}

function toastMessage(message, timeToClose = defaultTimeToClose) {
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

const toastContainerStyle = {
  position: 'fixed',
  right: 0,
  top: 0
}

Toast.toastMessage = toastMessage

export default Toast
