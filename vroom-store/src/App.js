import "./app.css";

import FooterSection from "./layout/FooterSection";
import HeaderSection from "./layout/HeaderSection";
import Router from "./Router";
import AppWrapper from "./styledComponents/AppWrapper";
function App() {
   return (
      <AppWrapper>
         <HeaderSection />
         <Router />
         <FooterSection />
      </AppWrapper>
   );
}

export default App;
