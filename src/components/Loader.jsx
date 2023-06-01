import React from 'react'
import {Spin} from "antd"

const Loader = ({...props}) => {
  return (
      <Spin {...props} className='[&>span>i]:!bg-navbar' />
  )
}

export default Loader