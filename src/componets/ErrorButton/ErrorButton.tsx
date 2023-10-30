import { Component } from 'react';

import styles from './ErrorButton.module.css';

type ErrorButtonState = {
  isError: boolean;
};

class ErrorButton extends Component<object, ErrorButtonState> {
  constructor(props: object) {
    super(props);
    this.state = {
      isError: false,
    };
  }

  throwError = () => {
    this.setState({ isError: true });
  };

  render() {
    const { isError } = this.state;

    if (isError) {
      throw new Error('I crashed!');
    }

    return (
      <button className={styles.errorButton} onClick={this.throwError}>
        Break It All Down
      </button>
    );
  }
}

export default ErrorButton;
