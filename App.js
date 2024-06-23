import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head" tabIndex="1">
    Namaste React from JSX 🚀
  </h1>
);

const HeadingComponent = () => (
  <div className="container">
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">Namaste React Functional Component!</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
