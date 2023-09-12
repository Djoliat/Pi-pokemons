
import { Route, Routes, useLocation} from "react-router-dom";
import LandignPage from "./Component/LandingPage/LandingPage";

import Detail from "./Component/Detail/Detail";

import Home from "./Component/Home/Home";
import "./App.css";
import Form from "./Component/Form/form";
// import CreatePoke from "./Component/Form/form";


function App() {
// const {pathname} = useLocation()

  return (
    <div>
      <div>
      <Routes>
        <Route path='/' element={<LandignPage />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/create" element={<Form/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
