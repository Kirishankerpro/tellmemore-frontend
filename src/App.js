import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";

// import pages
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./pages/Error";
import BackofficeLogin from "./pages/BackofficeLogin";
import Backoffice from "./pages/Backoffice.js";
import BackofficeCreate from "./pages/BackofficeCreate.js";

function App() {
  const [dark, setDark] = useState(false);
  const [darkToken, setDarkToken] = useState(Cookies.get("darkToken") || null);
  // in the feature should compare if the token in the cookie and the token in the database are same to connect the user
  const [token, setToken] = useState(Cookies.get("adminToken") || null);

  return (
    <div className="app">
      <Router>
        <Header
          dark={dark}
          setDark={setDark}
          token={token}
          darkToken={darkToken}
          setDarkToken={setDarkToken}
        />
        <Routes>
          <Route path="/" element={<Home darkToken={darkToken} />} />
          <Route
            path="backoffice/login"
            element={
              <BackofficeLogin darkToken={darkToken} setToken={setToken} />
            }
          />
          <Route
            path="backoffice"
            element={<Backoffice token={token} darkToken={darkToken} />}
          />
          <Route
            path="backoffice/create"
            element={<BackofficeCreate token={token} darkToken={darkToken} />}
          />
          <Route path="*" element={<Error darkToken={darkToken} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
