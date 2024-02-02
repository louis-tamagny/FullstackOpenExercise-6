import { useContext } from 'react'
import NotificationContext, { useContextValue, useContextDispatch } from '../NotificationContext'

const Notification = () => {
  const notification = useContextValue()
  const dispatch = useContextDispatch()

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
    display: (notification === '') ? 'none' : ''
  }

  if (notification !== '') {
    setTimeout(() => { dispatch({ type: 'CLEAR' })}, 5000)
  }
  
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification
