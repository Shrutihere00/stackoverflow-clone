import "./App.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth.jsx";
import Navbar from "./components/Navbar";
import Questions from "./pages/Questions";
import AskQuestion from "./pages/AskQuestion";
import DisplayQuestions from "./pages/DisplayQuestions";
import { fetchAllQuestions } from "./actions/question";
import { getAllUsers } from "./actions/users";
import Tags from "./pages/Tags";
import Users from "./pages/Users";
import UserProfile from "./pages/UserProfile";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Auth" element={<Auth />} />
        <Route exact path="/Questions" element={<Questions />} />
        <Route exact path="/askQuestions" element={<AskQuestion />} />
        <Route exact path="/Questions/:id" element={<DisplayQuestions />} />
        <Route exact path="/Tags" element={<Tags />} />
        <Route exact path="/Users" element={<Users />} />
        <Route exact path="/Users/:id" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
