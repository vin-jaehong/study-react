import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
// import Library from "./chapter-03/Library";
// import Clock from "./chapter-04/Clock";
// import CommentList from "./chapter-05/CommentList";
// import Accommodate from "./chapter-07/Accommodate";
// import ConfirmButton from "./chapter-08/ConfirmButton";
// import LandingPage from "./chapter-09/LandingPage";
// import AttendanceBook from "./chapter-10/AttendanceBook";
// import SignUp from "./chapter-11/SignUp";
// import ProfileCard from "./chapter-13/ProfileCard";
// import DarkOrLight from "./chapter-14/DarkOrLight";
import Blocks from "./chapter-15/Blocks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Blocks />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
