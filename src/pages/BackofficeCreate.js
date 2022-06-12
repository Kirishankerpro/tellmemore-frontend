import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import "../assets/style/BackofficeCreate.css";

const BackOfficeCreate = ({ token, darkToken }) => {
  const [formname, setFormname] = useState();

  const navigate = useNavigate();
  const redirection = () => {
    setTimeout(() => {
      navigate("/");
    }, 4000);
  };

  if (formname) {
    console.log(formname);
  }
  return token ? (
    <div
      className={darkToken ? "backofficecreate-dark" : "backofficecreate-white"}
    >
      <div className="backofficecreate-all">
        <div className="backofficecreate-header">
          <Link to="/backoffice" id="backoffice-header-form-button">
            <p>
              <i className="fa-solid fa-angle-left"></i> Formulaires
            </p>
          </Link>
          <input
            onChange={(event) => {
              setFormname(event.target.value);
            }}
            type="text"
            placeholder="Veuillez renseigner un nom de formulaire"
          />
          <div className="backoffice-header-buttons">
            <button id="backofficecreate-header-delete-button">
              Supprimer
            </button>
            <button id="backofficecreate-header-save-button">
              Sauvegarder
            </button>
          </div>
        </div>
        <div className="backoffice-body">
          <div className="backoffice-body-header">
            <p> Questions</p>
            <p> Personnaliser le formulaire </p>
          </div>
          <div className="backoffice-body-buttons">
            <button>
              <i className="fa-solid fa-rectangle-list"></i>Ajouter une question
              Texte
            </button>
            <button>
              <i className="fa-solid fa-star"></i>Ajouter une question Note
            </button>
            <button>
              <i className="fa-solid fa-envelope"></i>Ajouter une question Email
            </button>
            <button>
              <i className="fa-solid fa-question"></i>Ajouter une question
              Oui/Non
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={
        darkToken
          ? "backofficecreate-dark-error"
          : "backofficecreate-white-error"
      }
    >
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

export default BackOfficeCreate;
