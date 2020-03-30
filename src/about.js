import React from "react";
import ReactDOM from "react-dom";
import "./sass/style.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { AboutContent } from "./components/aboutContent";

class About extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <AboutContent />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<About />, document.getElementById("root"));
