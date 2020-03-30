import React from "react";
import ReactDOM from "react-dom";
import "./sass/style.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { SpecificContent } from "./components/specificContent";

class Specific extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <SpecificContent />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Specific />, document.getElementById("root"));
