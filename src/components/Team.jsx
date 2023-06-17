import "./Team.css";
import student from "../data";
import iconGithub from "../assets/iconGithub.png";
import iconLinkedin from "../assets/iconLinkedin.png";
import iconMail from "../assets/iconMail.png";

function Team() {
  return (
    <div className="teamContent">
      {student.map((s) => (
        <div className="card" key={s.Name}>
          <img src={s.picture} alt="Avatar" className="w-100" />
          <div className="info-container">
            <div className="info-head">
              <h3>{s.Name}</h3>
            </div>
            <div className="info-body">
              <p>{s.phone}</p>
              <a href="https://github.com/Wilhem-H" target="_blank">
                <img
                  className="social_icon"
                  src={iconGithub}
                  alt={`Github profile of ${s.Name}`}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/wilhem-hafsa/"
                target="_blank"
              >
                <img
                  className="social_icon"
                  src={iconLinkedin}
                  alt={`Linkedin profile of ${s.Name}`}
                />
              </a>
              <a href="mailto:wilhem.hafsa@outlook.fr" target="_blank">
                <img
                  className="social_icon"
                  src={iconMail}
                  alt={`Mail of ${s.Name}`}
                />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Team;
