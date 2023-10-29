import { Component, ReactNode } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
}

type ErrorBoundaryProps = {
  children?: ReactNode;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render(): ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <div>Something went wrong.</div>;
    }
    return children;
  }
}

export default ErrorBoundary;
