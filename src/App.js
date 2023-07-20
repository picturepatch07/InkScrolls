import React from "react";
import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./components/HomePage/Homepage";
import LandPage from "./components/LandPage/index";
import PrivateRoute from "./helper/privateRoutes";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { login } from "./features/userSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log({ authUser });
        dispatch(
          login({
            providerData: authUser.providerData[0],
          })
        );
      }
    });
  }, [dispatch]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/getting-started" element={<Homepage />} />
        </Routes>
        <Routes>
          <Route path="/" element={<LandPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
