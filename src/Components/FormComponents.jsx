import React from 'react'
import TextField from '@mui/material/TextField'

export const CustomTextField = (props) => {
  return (
    <TextField
      id={props.id}
      label={props.label}
      value={props.value}
      onChange={props.onChange}
      
    />
  )
}
