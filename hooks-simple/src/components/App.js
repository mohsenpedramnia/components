import React from "react";

class App extends React.Component {
  state = { resource: "posts" };
  render() {
    return (
      <div className="ui container">
        <div>
          <button
            onClick={() => this.setState({ resource: "posts" })}
            className="ui green button"
          >
            Post
          </button>
          <button
            onClick={() => this.setState({ resource: "todos" })}
            className="ui pink button"
          >
            Todos
          </button>
        </div>
        {this.state.resource}
      </div>
    );
  }
}

export default App;
