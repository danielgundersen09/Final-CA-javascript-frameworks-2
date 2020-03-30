import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer>
          Copyright <i className="fa fa-copyright" aria-hidden="true"></i>{" "}
          Noroff
        </footer>
      </div>
    );
  }
}

export default Footer;
