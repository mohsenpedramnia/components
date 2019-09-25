import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import StreamCreate from "./screams/StreamCreate";
import StreamDelete from "./screams/StreamDelete";
import StreamEdit from "./screams/StreamEdit";
import StreamList from "./screams/StreamList";
import StreamShow from "./screams/StreamShow";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
