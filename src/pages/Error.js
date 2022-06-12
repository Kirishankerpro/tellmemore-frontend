import "../assets/style/Error.css";

import { useNavigate } from "react-router-dom";

const Error = ({ darkToken }) => {
  const navigate = useNavigate();

  const redirection = () => {
    setTimeout(() => {
      navigate("/");
    }, 4000);
  };
  return (
    <div className={darkToken ? "error-dark" : "error-white"}>
      <div className="heart-loader">
        <div></div>
      </div>
      <h2> Message d'erreur : vous n'avez pas accès à cette page ! </h2>
      <p> Vous allez être redirigé vers la page d'accueil 😘❤️</p>
      {redirection()}
    </div>
  );
};

export default Error;
