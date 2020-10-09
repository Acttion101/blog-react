import React from 'react'
import { useParams } from 'react-router-dom'
import withHelmet from '../utils/withHelmet'

function Story() {
  const { StoryId } = useParams()
  return <div>Story page {StoryId}</div>
}
export default withHelmet('Blog App | Story')(Story)
