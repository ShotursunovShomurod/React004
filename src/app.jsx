import { useState } from "preact/hooks";
import "./app.css";
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

export function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer/>
    </>
  );
}
