import { Route, Routes } from "react-router-dom";

import { ROUTES } from './constant/Routes';
import Dashboard from "./admin/dashboard";
import User from "./admin/User/index";
import Home from "./client/Home";
import Notfound from "./admin/notfound/index";
import Category from "./admin/category/index";
import English from "./admin/english/index";

const App = () => {
  return (
     <Routes>
         <Route path={ROUTES.HOME} element={<Home />}></Route>
         <Route path={ROUTES.DASHBOARD} element={<Dashboard />}></Route>
         <Route path={ROUTES.USER} element={<User />}></Route>
         <Route path={ROUTES.CATEGORY} element={<Category />}></Route>
         <Route path={ROUTES.ENGLISH} element={<English />}></Route>
         <Route path={ROUTES.NOT} element={<Notfound />}></Route>
     </Routes>
  );
}

export default App;
