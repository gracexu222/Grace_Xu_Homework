// import React from "react";

// // At this point, error boundary is only possible with Class Component

// export default class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

// //   static getDerivedStateFromError(error) {
// //     // Update state so the next render will show the fallback UI.
// //     return { hasError: true };
// //   }

//   componentDidCatch(error, errorInfo) {}

//   render() {
//     if (this.state.hasError) {
//       // You can render any custom fallback UI
//       return <h1>Something went wrong.</h1>;
//     }

//     return this.props.children;
//   }
// }
