import React, { useState } from "react";

const App = () => {
  const [resource, setResource] = useState("post");
  return (
    <div className="ui container">
      <div>
        <button onClick={() => setResource("post")} className="ui green button">
          Post
        </button>
        <button onClick={() => setResource("todos")} className="ui pink button">
          Todos
        </button>
      </div>
      {resource}
    </div>
  );
};

export default App;
