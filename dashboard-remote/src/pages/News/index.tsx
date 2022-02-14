import React, { FC } from 'react'
import { useQueryClient } from 'react-query'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
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
      <Card sx={{ minWidth: 275, marginBottom: '2%' }}>
        <CardContent>
          <Typography variant="h4" gutterBottom component="div" role="heading">
            There are not posts
          </Typography>
          <Typography variant="body1" gutterBottom>
            Need to fetch latest posts
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    )
  }

  return (
    <div role="list">
      {posts.slice(0, 10).map(post => (
        <Card
          sx={{ minWidth: 275, marginBottom: '2%' }}
          key={post.id}
          role="listitem"
        >
          <CardContent>
            <Typography
              variant="h4"
              gutterBottom
              component="div"
              role="heading"
            >
              {post.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {post.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  )
}

export default News
