import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={ <CreateSide /> } />
      <Route path="/account" element={ <UpdateAccount /> } />
      <Route path="/history" element={ <HistPage />} />
    </Routes> 
  );
}

export default App;
