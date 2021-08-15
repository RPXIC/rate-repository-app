import React from 'react'
import SignInForm from './SignInForm'
import { act, fireEvent, render } from '@testing-library/react-native'
import { expect } from '@jest/globals'

describe('SignInForm', () => {
  it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
    const onSubmit = jest.fn()
    const { getByTestId } = render(<SignInForm onSubmit={onSubmit} />)

    await act(async () => {
      await fireEvent.changeText(getByTestId('SignInFormUsername'), 'kalle')
      await fireEvent.changeText(getByTestId('SignInFormPassword'), 'password')
      await fireEvent.press(getByTestId('SignInFormSubmit'))
    })

    expect(onSubmit).toHaveBeenCalledTimes(1)

    const { mock: { calls } } = onSubmit
    const [firstCall] = calls
    const [firstArg] = firstCall

    expect(firstArg).toEqual({
      username: 'kalle',
      password: 'password'
    })
  })
})