/* eslint-disable react/prop-types */
import { createContext, useReducer, useContext } from "react"

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      return action.payload
    case 'CLEAR':
      return ''  
    default:
      return state
  }
}

const NotificationContext = createContext()

export const NotificationContextProvider = props => {
  const [ notification, notificationDispatch] = useReducer(reducer, '')

  return (
    <NotificationContext.Provider value={[ notification, notificationDispatch ]}>
      {props.children}
    </NotificationContext.Provider>  
  )
}

export const useContextValue = () => {
  const notification = useContext(NotificationContext)
  return notification[0]
}

export const useContextDispatch = () => {
  const notification = useContext(NotificationContext)
  return notification[1]
}

export default NotificationContext

