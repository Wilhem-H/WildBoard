import "./Footer.css";
import iconGithub from "../assets/iconGithub.png";
import iconLinkedin from "../assets/iconLinkedin.png";
import iconMail from "../assets/iconMail.png";

function Footer() {
  return (
    <footer>
      <div className="columns">
        <div className="column">
          <h4>HAFSA Wilhem</h4>
        </div>

        <div className="column">
          <h4>
            <strong>Tél :</strong> +33 (0)6 81 01 99 72
          </h4>
          <br />
          <h4>
            <strong>Mail :</strong> wilhem.hafsa@outlook.fr
          </h4>
        </div>

        <div className="column">
          <h4>Réseaux sociaux : </h4>
          <div className="social-icons">
            <a href="https://github.com/Wilhem-H" target="_blank">
              <img
                className="social-icon"
                src={iconGithub}
                alt="my github profile"
              />
            </a>
            <a href="https://www.linkedin.com/in/wilhem-hafsa/" target="_blank">
              <img
                className="social-icon"
                src={iconLinkedin}
                alt="my Linkedin profile"
              />
            </a>
            <a href="mailto:wilhem.hafsa@outlook.fr" target="_blank">
              <img className="social-icon" src={iconMail} alt="my e-mail" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
