import { Avatar, AvatarProps } from 'antd'
import React from 'react'

type Props = AvatarProps & {
    name?: string}

const CustomAvatar = ({name, style, ...rest}: Props) => {
  return (
    <Avatar alt="Rahul Patil" size="small" style={{ backgroundColor: '#87d068', display: 'flex', justifyContent: 'center', alignItems: 'center', border: "none", ...style}}>
        {name?.charAt(0).toUpperCase()}
    </Avatar>
  )
}

export default CustomAvatar