import React from 'react'
import errorHandler from '@/utils/errorHandler'
import successHandler from '@/utils/successHandler'
import { useAppContext } from '@/context/AppContext'

const useNotification = () => {

  const { notification } = useAppContext();

  const handleSuccess = ({ data, options }) => {
    successHandler(data, options, notification)
  }

  const handleError = (error) => {
    errorHandler(notification, error)
  }

  return { handleSuccess, handleError}
}

export default useNotification