import { Route, Routes } from "react-router-dom";

import { ROUTES } from './constant/Routes';
import Dashboard from "./admin/dashboard";
import Home from "./client/Home";

const App = () => {
  return (
     <Routes>
         <Route path={ROUTES.HOME} element={<Home />}></Route>
         <Route path={ROUTES.DASHBOARD} element={<Dashboard />}></Route>
     </Routes>
  );
}

export default App;
