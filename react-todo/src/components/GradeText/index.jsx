import React from 'react'
import { textList, ReviewTextBox, HiddenText } from './style'

export const GradeText = ({hovered}) => {
  return (
    <ReviewTextBox>
    {[1, 2, 3, 4, 5].map(num => (
      <HiddenText key={num} show={hovered === num}>
        {textList[num - 1]}
      </HiddenText>
    ))}
    </ReviewTextBox>
  )
}
