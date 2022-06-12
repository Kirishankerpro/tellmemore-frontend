import "../assets/style/Admin.css";

import { useNavigate } from "react-router-dom";

const Admin = ({ token, darkToken }) => {
  const navigate = useNavigate();

  const redirection = () => {
    setTimeout(() => {
      navigate("/");
    }, 4000);
  };
  const create = () => {
    navigate("/backoffice/create");
  };

  return token ? (
    <div className={darkToken ? "admin-dark" : "admin-white"}>
      <div className="admin">
        <h2> Formulaires </h2>
        <div
          className="admin-form-button"
          onClick={() => {
            create();
          }}
        >
          <i class="fa-solid fa-plus"></i>
          <p> Nouveau formulaire </p>
        </div>
      </div>
    </div>
  ) : (
    <div className={darkToken ? "admin-error-dark" : "admin-error-white"}>
      <img
        className="admin-error-gif"
        src="https://i.giphy.com/media/bGgsc5mWoryfgKBx1u/giphy.webp"
        alt="dev"
      />
      <h2> Vous n'avez pas accès à cette page 🥺 !</h2>
      <h3> Vous allez être redirigé vers la page d'accueil ❤️ 😘</h3>
      {redirection()}
    </div>
  );
};

export default Admin;
