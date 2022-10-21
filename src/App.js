import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Hom from "./Components/Home/Hom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Main from "./Layout/Main";
import PrivateRout from "./Routs/PrivateRout";
import Orders from './Components/Orders/Orders'

function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <PrivateRout><Hom></Hom></PrivateRout>},
        { path: "/login", element: <Login></Login> },
        { path: "/register", element: <Register></Register> },
        {path:"/order", element:<PrivateRout><Orders></Orders></PrivateRout>}
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={routers}></RouterProvider>
    </div>
  );
}

export default App;
