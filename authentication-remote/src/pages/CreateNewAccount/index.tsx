import React, {
  FC,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState
} from 'react'
import { useHistory } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'

const CreateNewAccount: FC = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const history = useHistory()

  const registerHandler = useCallback(async () => {
    setIsLoading(true)

    // Mocking API
    await setTimeout(() => {
      history.push('/')
      setIsLoading(false)
    }, 2000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Clean up
  useEffect(() => {
    return () => {
      setFirstName('')
      setLastName('')
      setUserId('')
      setPassword('')
      setIsLoading(false)
    }
  }, [])

  return (
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
              Create New Account
            </Typography>
            <TextField
              id="user-first-name"
              label="First Name"
              variant="outlined"
              fullWidth
              value={firstName}
              onChange={(e: SyntheticEvent) =>
                setFirstName((e.target as HTMLInputElement).value)
              }
            />
            <TextField
              id="user-last-name"
              label="Last Name"
              variant="outlined"
              fullWidth
              value={lastName}
              onChange={(e: SyntheticEvent) =>
                setLastName((e.target as HTMLInputElement).value)
              }
            />
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
              onClick={registerHandler}
              disabled={isLoading}
              size="large"
            >
              Register
              {isLoading && (
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
              onClick={() => history.push('/')}
              size="large"
            >
              Cancel
            </Button>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  )
}
export default CreateNewAccount
