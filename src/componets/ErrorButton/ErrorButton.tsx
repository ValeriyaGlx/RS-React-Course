import { Component } from 'react';

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

    return <button onClick={this.throwError}>Throw Error</button>;
  }
}

export default ErrorButton;
