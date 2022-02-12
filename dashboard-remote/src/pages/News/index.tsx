import React, { FC } from 'react'
import { useQueryClient } from 'react-query'
import styled from 'styled-components'
import { H1, Body } from 'syf-component-library/ui/typography'

const PostItem = styled.div`
  margin-bottom: 30px;
`
interface PostDetails {
  userId: number
  id: number
  title: string
  body: string
}

const News: FC = () => {
  const queryClient = useQueryClient()

  const posts: PostDetails[] = queryClient?.getQueryData(['posts']) || []

  if (!posts.length) {
    return (
      <div role="list">
        <PostItem role="listitem">
          <H1>There are not posts</H1>
          <Body>Need to fetch latest posts</Body>
        </PostItem>
      </div>
    )
  }

  return (
    <div role="list">
      {posts.slice(0, 10).map(post => (
        <PostItem key={post.id} role="listitem">
          <H1>{post.title}</H1>
          <Body>{post.body}</Body>
        </PostItem>
      ))}
    </div>
  )
}

export default News
