import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  // initialize state to track if an error has occurred
  state = { hasError: false };

  // update state when an error is caught
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  // log error details for debugging purposes
  componentDidCatch(error, info) {
    // typically it would log this to something like TrackJS or NewRelic
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    // if an error has been caught, display an error message
    if (this.state.hasError) {
      return (
        <h2>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to back to the home page.
        </h2>
      );
    }

    // if no error, render children components normally
    return this.props.children;
  }
}

export default ErrorBoundary;
