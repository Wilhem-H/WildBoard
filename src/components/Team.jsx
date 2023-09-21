import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Team.css";
import student from "../data";
import iconGithub from "../assets/iconGithub.png";
import iconLinkedin from "../assets/iconLinkedin.png";
import iconMail from "../assets/iconMail.png";

function Team() {
  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);
  return (
    <div className="team_content">
      {student.map((s) => (
        <div className="card" key={s.Name} data-aos="zoom-in-up">
          <div className="card_head">
            <img src={s.picture} alt="Avatar" className="w-100" />
            <h3>{s.Name}</h3>
          </div>
          <div className="card_info">
            <p>
              <strong>Tél : </strong> {s.phone}
            </p>
            <a href={s.github} target="_blank">
              <img
                className="social_icon"
                src={iconGithub}
                alt={`Github profile of ${s.Name}`}
              />
            </a>
            <a href={s.linkedin} target="_blank">
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
      ))}
    </div>
  );
}

export default Team;
