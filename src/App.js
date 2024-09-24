import { Route, Routes } from "react-router-dom";
import HomePage from "./pages";
import LoginComponent from "./pages/SignIn";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/login" element={ <LoginComponent /> } />
      <Route path="/signup" element={ <SignUp />} />
    </Routes> 
  );
}

export default App;
