import React from 'react'
import { useNavigate } from 'react-router-dom'

const CancelBtn = () => {
    const homeBtn = useNavigate();
    const cancelHandler = () => {
        homeBtn('/');
    }
  return (
    <button onClick={cancelHandler}>Cancel</button>
  )
}

export default CancelBtn