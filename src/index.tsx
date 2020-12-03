import React from 'react'
import './styles.css'

let defaultTimeToClose = 2000

function ToastContainer(props) {
  defaultTimeToClose = props.timeToClose
  return (
    <div className="ToastContainer" id="toast-container" />
  )
}

function Toast(message: string, timeToClose: number = defaultTimeToClose) {
  const container = document.getElementById('toast-container')
  let randomId = 'toast=' + Math.ceil((Math.random() * 100000))
  if (!container.children.length) {
    container.innerHTML += `<div id="${randomId}" class="toast"><span class="toast_message">${message}</span></div>`
  } else {
    const copy = container.innerHTML
    container.innerHTML = `<div id="${randomId}" class="toast"><span class="toast_message">${message}</span></div>${copy}`
  }
  setTimeout(() => {
    document.getElementById(randomId).remove()
  }, timeToClose)
}


export { ToastContainer, Toast }
