import React from "react";
import Contacts from "./sidebar/Contacts.jsx";
import CreatePost from "./sidebar/CreatePost.jsx";
import Messag from "./sidebar/Messag.jsx";
import Request from "./sidebar/Request.jsx";
import Settings from "./sidebar/Settings.jsx";
import { Route, Routes } from "react-router-dom";
import Body from "./Body.jsx";
const Forum = () => {
  return (
    <div className="returnPage">
      <Routes>
        <Route path={"/body"} element={<Body />} />
        <Route path={"/massag"} element={<Messag />} />
        <Route path={"/request"} element={<Request />} />
        <Route path={"/createpost"} element={<CreatePost />} />
        <Route path={"/contacts"} element={<Contacts />} />
        <Route path={"/settings"} element={<Settings />} />
        <Route exact path={"/"} element={<Body />} />
        <Route path={"*"} element={<h1>No data</h1>} />
      </Routes>
    </div>
  );
};

export default Forum;
