import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import PATH_ROUTES from "./helpers/PathRoutes.helper";
import styles from "./App.module.css";

import HomeView from "./views/Home.view";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const { data } = await axios.get(URL, {
        params: {
          email,
          password,
        },
      });

      const { access } = data;
      setAccess(data);
      access && navigate('/home');
    } catch (error) {
      console.error(error);
    }
  }  

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== (id)));
  };

  async function onSearch(id) {
    try {
      const { data } = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`);
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.App}>
      {pathname !== PATH_ROUTES.LOGIN && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path={PATH_ROUTES.LOGIN} element={<Form login={login} />} />
        <Route
          path={PATH_ROUTES.HOME}
          element={<HomeView characters={characters} onClose={onClose} />}
        />
        <Route path={PATH_ROUTES.ABOUT} element={<About />} />
        <Route path={PATH_ROUTES.DETAIL} element={<Detail baseUrl="http://localhost:3001/rickandmorty/character/" />} />
        <Route path={PATH_ROUTES.FAVORITES} element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;