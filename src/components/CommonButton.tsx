import React from 'react'
import { Button } from '@chakra-ui/react'
export const CommonButton = (props) => {
  return (
    <Button backgroundColor={"#1a3d32"} textColor={"white"} onClick={props.onClick}>
        {props.text}
    </Button>
  )
}
