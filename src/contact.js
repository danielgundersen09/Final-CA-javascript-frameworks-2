import React from "react";
import ReactDOM from "react-dom";
import "./sass/style.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { ContactForm } from "./components/contactForm";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <ContactForm />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Contact />, document.getElementById("root"));
