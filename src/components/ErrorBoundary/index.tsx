'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallbackRender?: (error: Error) => ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
}

interface State {
  hasError: boolean
  error: Error | null
}

class ErrorBoundaryComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error)
    console.error('Error Info:', errorInfo)
    
    this.logErrorToService(error, errorInfo)
    
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }
  }

  private logErrorToService(error: Error, errorInfo: ErrorInfo) {
    console.log('Logging error to service:', error, errorInfo)
  }

  public resetErrorBoundary = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallbackRender) {
        return this.props.fallbackRender(this.state.error!)
      }
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
            <p className="text-gray-600 mb-4">
              We apologize for the inconvenience. Please try refreshing the page.
            </p>
            <button
              onClick={this.resetErrorBoundary}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export { ErrorBoundaryComponent as ErrorBoundary }