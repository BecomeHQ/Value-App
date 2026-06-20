import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import AllUsersPage from "./pages/AllUsersPage";
import Home from "./pages/Home";
import SendPage from "./pages/SendPage";
import "./styles/global.style.css";
import MyProfile from "./pages/MyProfile";
import AllUsersLeaderBoard from "./pages/AllUsersLeaderBoard";
import AllUserTransaction from "./pages/AllUserTransaction";
import UserProfile from "./pages/UserProfile";
import AdminDashBoard from "./pages/AdminDashBoard";
import SendNode from "./pages/SendNode";
import CheckNotes from "./pages/CheckNotes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminDashBoard />} />
      <Route path="/my-profile/:userId" element={<Home />} />
      <Route path="/my-page/:userId" element={<MyProfile />} />
      <Route path="/user/:userId" element={<UserProfile />} />
      <Route path="/profile" element={<AllUsersPage />} />
      <Route path="/send/:id" element={<SendPage />} />
      <Route path="/leaderboard" element={<AllUsersLeaderBoard />} />
      <Route path="/transactions" element={<AllUserTransaction />} />
      <Route path="/send-note" element={<SendNode />} />
      <Route path="/check-notes" element={<CheckNotes />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
