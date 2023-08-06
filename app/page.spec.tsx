import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import Home from './page'

describe('Home Page', () => {
  it('should render correctly', () => {
    render(<Home />)
    const heading = screen.getByText('Nirmal Fernando')
    expect(heading).toBeInTheDocument()
  })
})
