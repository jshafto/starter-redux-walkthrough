import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import List from './components/todolist';
import AddBar from "./components/addBar";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";

function App() {
  const user = useSelector(state => state.session.user)
  const [loaded, setLoaded] = useState(false);
  const [toDo, setToDo] = useState("");
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <div className="Main">
      <header>
        <h1>Quick and Sloppily Made To-Do-List-App</h1>
      </header>
      <AddBar 
        toDo={toDo} 
        setToDo={setToDo} 
        items={items} 
        setItems={setItems} />
      <List />
    </div>
  );
}

export default App;
