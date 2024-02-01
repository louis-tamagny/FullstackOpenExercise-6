import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector((state) => state.notification)
  
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