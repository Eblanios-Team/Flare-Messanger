import { BrowserRouter } from "react-router-dom";
import Router from "../router.tsx"; // Импортируем маршруты


function App() {
  return (
    <>
      <BrowserRouter> 
        <Router /> 
      </BrowserRouter>
    </>
  );
}

export default App;
