import { Component, ReactNode } from 'react';

import FallDownUI from '../FallDownUI/FallDownUI';

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
      return <FallDownUI />;
    }
    return children;
  }
}

export default ErrorBoundary;
