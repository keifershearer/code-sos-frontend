import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Signup from "./pages/auth/signup/Signup";
import Login from "./pages/auth/login/Login";
import Tutors from "./pages/Tutors/Tutors";
import Profile from "./pages/Profile/Profile";
import Posts from "./pages/posts/Posts/Posts";
import Error from "./pages/error/Error";
import PostDetails from "./pages/posts/PostDetails/PostDetails";
import OtherProfile from "./pages/Profile/OtherProfile"
import axios from "axios";

import EditPost from "./pages/posts/EditPost/EditPost";

import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="/tutors" element={<Tutors />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:profileId" element={<OtherProfile/>}/>

          <Route path="/posts">
            <Route index element={<Posts />} />
            <Route path=":postId" element={<PostDetails />} />
            <Route path=":postId/edit" element={<EditPost />} />
          </Route>
        </Route>

        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
