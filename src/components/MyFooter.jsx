import { Component } from "react";

class MyFooter extends Component {
  render() {
    return (
      <div className="text-center bg-dark text-white">
        <h2>Contattaci</h2>
        <div id="contatti">
          <a href="tel: +3911223456">(+39) 11223456</a>
          <br />
          <a href="mailto: info@epicode.school">info@epicode.school</a>
          <br />
          <address>Via Appia 1 - 00100 Roma (RM)</address>
        </div>
        <hr />
        <p className="mb-0">&copy; 2024</p>
      </div>
    );
  }
}

export default MyFooter;
