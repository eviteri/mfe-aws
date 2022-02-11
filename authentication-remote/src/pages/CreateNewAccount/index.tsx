import React, {
  FC,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState
} from 'react'
import { useHistory } from 'react-router-dom'
import { Card } from 'syf-component-library/ui/atoms/Card'
import { SyfLoader, Textfield } from 'syf-component-library/ui/atoms'
import { Inline, Inset } from 'syf-component-library/ui/spacing'
import {
  PageWrapper,
  PageContentWrapper,
  StyledButton
} from '../Login/subComponents'

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
    <PageWrapper>
      <PageContentWrapper>
        <Card title="Create New Account">
          <Inset all="medium">
            <Textfield
              id="user-first-name"
              autoCapitalize="none"
              name="user-first-name"
              placeholder="First Name"
              type="text"
              value={firstName}
              width="100%"
              onChange={(e: SyntheticEvent) =>
                setFirstName((e.target as HTMLInputElement).value)
              }
            />
          </Inset>
          <Inset all="medium">
            <Textfield
              id="user-last-name"
              autoCapitalize="none"
              name="user-last-name"
              placeholder="Last Name"
              type="text"
              value={lastName}
              width="100%"
              onChange={(e: SyntheticEvent) =>
                setLastName((e.target as HTMLInputElement).value)
              }
            />
          </Inset>
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
              onClick={registerHandler}
              type="button"
              disabled={isLoading}
            >
              {isLoading && (
                <>
                  <SyfLoader />
                  <Inline size="base" />
                </>
              )}
              Register
            </StyledButton>
          </Inset>
          <Inset all="medium">
            <StyledButton
              buttonType="secondary"
              onClick={() => history.push('/')}
              type="button"
            >
              Cancel
            </StyledButton>
          </Inset>
        </Card>
      </PageContentWrapper>
    </PageWrapper>
  )
}
export default CreateNewAccount
