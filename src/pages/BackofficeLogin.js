import "../assets/style/Backoffice.css";

import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Backoffice = ({ darkToken, setToken }) => {
  const navigate = useNavigate();

  // states
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [requesting, setRequesting] = useState(false);

  const sendRequest = async () => {
    setError();
    if (password) {
      setRequesting(true);
      try {
        const response = await axios.post("http://localhost:4000/admin", {
          password: password,
        });

        if (response.data.token) {
          Cookies.set("adminToken", response.data.token, {
            expires: 10,
          });
          setToken(response.data.token);
          navigate("/backoffice");
        }
        setRequesting(false);
      } catch (error) {
        toast.error("error", {
          autoClose: 2000,
          position: "bottom-right",
        });
        if (error) {
          setError(error.response.data.errorMessage);
        }
        setRequesting(false);
      }
    } else {
      toast.error("error", {
        autoClose: 2000,
        position: "bottom-right",
      });
      setError(
        "Mots de passe est vide ! Veuillez saisir votre mots de passe !"
      );
    }
  };

  return (
    <div className={darkToken ? "backoffice-dark" : "backoffice-white"}>
      <div className="backoffice-items">
        <h2> Acceder à mon espace Admin </h2>
        <div className="backoffice-input">
          <input
            type="password"
            placeholder="Saisir votre mots de passe"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          {requesting === false ? (
            <button
              onClick={() => {
                sendRequest();
              }}
            >
              Se connecter
            </button>
          ) : (
            <button> Se connecter </button>
          )}
        </div>
      </div>
      {error ? (
        <div className="error-message">
          <p> {error} </p>
        </div>
      ) : (
        <div className="done-message">
          <p></p>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Backoffice;
