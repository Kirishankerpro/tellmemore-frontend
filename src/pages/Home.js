// import css
import "../assets/style/Home.css";
import "../assets/style/Loader.css";

// import state
import { useState } from "react";

const Home = ({ darkToken }) => {
  //states

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1200);

  return loading ? (
    <div className={darkToken ? "loader-dark" : "loader-white"}>
      <div className="loader-item">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p> Veuillez attendre page en cours de chargement... </p>
    </div>
  ) : (
    <div className={darkToken ? "home-dark" : "home-white"}>
      <div className="home-empty-items">
        <div className="home-empty-items-box">
          <h2> Aucun formulaire disponible ! 😢</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
