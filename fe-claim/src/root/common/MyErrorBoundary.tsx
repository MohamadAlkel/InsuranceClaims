import * as React from 'react';

export default class MyErrorBoundary extends React.Component {
  state: { hasError: boolean };
  props: any;
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // we can log error cloudwatch but for now we'll just log it here
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // render frindly Ui
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
