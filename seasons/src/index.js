import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    // this is THE ONLY TIME we do direct assignment
    // to this.state
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // we called setstate
        this.setState({ lat: position.coords.longitude });
      },
      err => console.log(err)
    );
  }

  // React say we have to define render!!
  render() {
    return <div>Latitude:{this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
