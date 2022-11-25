import { Routes, Route } from "react-router-dom";

import Masuk from "../pages/login/Masuk";
import Daftar from "../pages/login/Daftar";

import { LOGIN, REGISTER } from "../router";

function Login() {
    return (
      <div>
        <Routes>
          <Route element={<Masuk />} path={LOGIN} />
          <Route element={<Daftar />} path={REGISTER} />
        </Routes>
      </div>
    );
  }
  
  export default Login;