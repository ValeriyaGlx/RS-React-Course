import { Component, ErrorInfo, ReactNode } from 'react';

import image from '../../assets/images/break.png';

import styles from './ErrorBoundary.module.css';

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

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Component did catch:', error, info.componentStack);
  }

  render(): ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <div className={styles.breakContainer}>
          <h2>Something went wrong. Refresh the page, please.</h2>
          <img className={styles.image} src={image} alt="break" />
        </div>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
