import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 11ad1a90fb03fccddcd2d560f903445e1b2577177c44be9d3fdf769c50e0a27c"
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar whenSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
