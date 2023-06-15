import "./Team.css";
import student from "../data";

function Team() {
  return (
    <div className="teamContent">
      {student.map((s) => {
        return (
          <div className="card" key={s.Name}>
            <img src={s.picture} alt="Avatar" className="w-100" />
            <div className="info-container">
              <div className="info-head">
                <h3>{s.Name}</h3>
              </div>
              <div className="info-body">
                <p>{s.github}</p>
                <p>{s.mail}</p>
                <p>{s.phone}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Team;
