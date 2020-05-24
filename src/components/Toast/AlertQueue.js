import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react'
import './Toast.scss'
import './AlertQueue.scss'
import Toast from './Toast'

const AlertQueue = forwardRef(
  ({ position = 'bottom', isShinining = true }, ref) => {
    const [alertQueue, setAlertQueue] = useState([])
    const alertQueueRef = useRef(alertQueue)
    alertQueueRef.current = alertQueue

    const toastList = alertQueue.map((toast) => (
      <Toast
        type={toast.type}
        key={toast.key}
        finishing={toast.finishing}
        position={position}
        isShinining={isShinining}
      >
        {toast.text}
      </Toast>
    ))

    useImperativeHandle(ref, () => ({
      addWarningAlert() {
        createAlert('warning', 'Warning !!')
      },
      addErrorAlert() {
        createAlert('error', 'Error')
      },
      addSuccesAlert() {
        createAlert('success', 'Congratulations :)')
      },
      addInfoAlert() {
        createAlert('info', 'Did you know ?...')
      }
    }))

    function createAlert(type, text) {
      const randomKey = Math.random().toString()

      alertQueue.unshift({
        type: type,
        key: randomKey,
        finishing: false,
        text: text
      })
      setAlertQueue([...alertQueue])

      setTimeout(() => {
        launchHideAnimation(randomKey, alertQueueRef.current)
      }, 3000)
      setTimeout(() => {
        deleteAlert(randomKey, alertQueueRef.current)
      }, 4000)
    }

    function launchHideAnimation(currentKey, alertQueueRef) {
      const newAlertQueue = alertQueueRef.map((toast) => {
        if (toast.key === currentKey) {
          toast.finishing = true
          return toast
        }
        return toast
      })
      setAlertQueue([...newAlertQueue])
    }

    function deleteAlert(currentKey, alertQueueRef) {
      const newArray = alertQueueRef.filter((toast) => toast.key !== currentKey)
      setAlertQueue([...newArray])
    }

    return (
      <div>
        <div className={`alert-queue-container ${position}`}>{toastList}</div>
      </div>
    )
  }
)

export default AlertQueue
