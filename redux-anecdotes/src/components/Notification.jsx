import { useDispatch, useSelector } from 'react-redux'
import { removeNotif } from '../reducers/notificationReducer'

const Notification = () => {
  const notification = useSelector((state) => state.notification)
  const dispatch = useDispatch()
  if (notification !== '') {
    setTimeout(() => dispatch(removeNotif()), 5000)    
  }
  const visible = (notification === '') ? 'none' : ''
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    display: visible
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification