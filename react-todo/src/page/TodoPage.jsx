import React from 'react'
import { CommentBox } from '../components/CommentBox';
import { CommentWrite } from '../components/CommentWrite';
import { Grade } from '../components/Grade'

export const TodoPage = () => {
  return (
    <>
      <Grade />
      <CommentWrite />
      <CommentBox />
    </>
  )
}
