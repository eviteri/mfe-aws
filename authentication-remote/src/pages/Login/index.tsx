import React, {
  FC,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState
} from 'react'
import { Card } from 'syf-component-library/ui/atoms/Card'
import { Link, SyfLoader, Textfield } from 'syf-component-library/ui/atoms'
import { Inline, Inset } from 'syf-component-library/ui/spacing'
import {
  PageWrapper,
  PageContentWrapper,
  StyledButton
} from 'pages/Login/subComponents'

interface LoginProps {
  onSignIn?: () => void
}

const Login: FC<LoginProps> = ({ onSignIn }) => {
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const logginHandler = useCallback(async () => {
    setIsLoading(true)

    // Mocking API
    await setTimeout(() => {
      if (onSignIn) {
        onSignIn()
      }
      setIsLoading(false)
    }, 2000)
  }, [])

  // Clean up
  useEffect(() => {
    return () => {
      setUserId('')
      setPassword('')
      setIsLoading(false)
    }
  }, [])

  return (
    <PageWrapper>
      <PageContentWrapper>
        <Card title="Login">
          <Inset all="medium">
            <Textfield
              id="user-name"
              autoCapitalize="none"
              name="user-name"
              placeholder="User Name"
              type="text"
              value={userId}
              width="100%"
              onChange={(e: SyntheticEvent) =>
                setUserId((e.target as HTMLInputElement).value)
              }
            />
          </Inset>
          <Inset all="medium">
            <Textfield
              id="user-password"
              autoCapitalize="none"
              name="user-password"
              placeholder="Password"
              type="password"
              value={password}
              width="100%"
              onChange={(e: SyntheticEvent) =>
                setPassword((e.target as HTMLInputElement).value)
              }
            />
          </Inset>
          <Inset all="medium">
            <StyledButton
              buttonType="primary"
              onClick={logginHandler}
              type="button"
              disabled={isLoading}
            >
              {isLoading && (
                <>
                  <SyfLoader />
                  <Inline size="base" />
                </>
              )}
              Login
            </StyledButton>
          </Inset>
          <Inset all="medium">
            <Link to="/register">Create New Account</Link>
          </Inset>
        </Card>
      </PageContentWrapper>
    </PageWrapper>
  )
}
export default Login
