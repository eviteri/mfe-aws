import React, { FC, SyntheticEvent, useEffect, useState } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import { useHistory } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'

interface LoginProps {
  onSignIn?: () => void
}

function usePosts({ onSignIn }: LoginProps) {
  return useQuery(
    'posts',
    async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      )
      return data
    },
    {
      enabled: false,
      onSuccess: () => {
        if (onSignIn) {
          onSignIn()
        }
      }
    }
  )
}

const Login: FC<LoginProps> = ({ onSignIn }) => {
  const { error, isFetching, refetch } = usePosts({ onSignIn })
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  // Clean up
  useEffect(() => {
    return () => {
      setUserId('')
      setPassword('')
    }
  }, [])

  return (
    <>
      {error && (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="error">This is an error alert — check it out!</Alert>
        </Stack>
      )}

      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={8} md={6} lg={6}>
          <Paper elevation={3} sx={{ p: 2, marginTop: '8%' }}>
            <Stack spacing={2}>
              <Typography
                variant="h4"
                gutterBottom
                component="div"
                role="heading"
              >
                Login
              </Typography>
              <TextField
                id="user-name"
                label="User Name"
                variant="outlined"
                fullWidth
                value={userId}
                onChange={(e: SyntheticEvent) =>
                  setUserId((e.target as HTMLInputElement).value)
                }
              />
              <TextField
                id="user-password"
                type="password"
                label="Password"
                variant="outlined"
                fullWidth
                value={password}
                onChange={(e: SyntheticEvent) =>
                  setPassword((e.target as HTMLInputElement).value)
                }
              />
              <Button
                variant="contained"
                onClick={() => refetch()}
                disabled={isFetching}
                size="large"
              >
                Login
                {isFetching && (
                  <CircularProgress
                    size={24}
                    sx={{
                      marginLeft: '2%'
                    }}
                  />
                )}
              </Button>
              <Button
                variant="outlined"
                onClick={() => history.push('/register')}
                size="large"
              >
                Create New Account
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}

export default Login
