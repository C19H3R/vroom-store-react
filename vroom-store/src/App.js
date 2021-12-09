import { useReducer } from "react";
import "./app.css";

import FooterSection from "./layout/FooterSection";
import HeaderSection from "./layout/HeaderSection";
import Router from "./Router";
import AppWrapper from "./styledComponents/AppWrapper";

import { reducer } from "./context/AppReducer";
import { useNavigate } from "react-router";

function App() {
   return (
      <AppWrapper>
         <Router />
      </AppWrapper>
   );
}

export default App;
