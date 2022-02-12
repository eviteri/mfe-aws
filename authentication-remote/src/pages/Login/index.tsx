import React, { FC, SyntheticEvent, useEffect, useState } from 'react'
import { Card } from 'syf-component-library/ui/atoms/Card'
import { Link, SyfLoader, Textfield } from 'syf-component-library/ui/atoms'
import { Inline, Inset } from 'syf-component-library/ui/spacing'
import {
  PageWrapper,
  PageContentWrapper,
  StyledButton,
  ErrorWrapper
} from 'pages/Login/subComponents'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Body } from 'syf-component-library/ui/typography'

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
      onSuccess: () => onSignIn()
    }
  )
}

const Login: FC<LoginProps> = ({ onSignIn }) => {
  const { error, isFetching, refetch } = usePosts({ onSignIn })
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')

  // Clean up
  useEffect(() => {
    return () => {
      setUserId('')
      setPassword('')
    }
  }, [])

  if (error) {
    return (
      <PageWrapper>
        <PageContentWrapper>
          <Card title="Error">
            <Inset all="medium">
              <ErrorWrapper>
                <Body>Something went wrong when trying to login 😮 </Body>
                <Inset all="medium">
                  <StyledButton
                    buttonType="primary"
                    onClick={() => refetch()}
                    type="button"
                    disabled={isFetching}
                  >
                    {isFetching && (
                      <>
                        <SyfLoader />
                        <Inline size="base" />
                      </>
                    )}
                    Try again
                  </StyledButton>
                </Inset>
              </ErrorWrapper>
            </Inset>
          </Card>
        </PageContentWrapper>
      </PageWrapper>
    )
  }

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
              onClick={() => refetch()}
              type="button"
              disabled={isFetching}
            >
              {isFetching && (
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
