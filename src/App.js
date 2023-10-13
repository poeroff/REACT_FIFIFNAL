import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';




import Root , {loader as RootLoader} from "./components/Home/Root";
import Header , {loader as Headloader} from "./components/header/Header";
import Slider from "./components/side/Slider";







const router =  createBrowserRouter([
  {path : "/", element : <Root> </Root>,loader:RootLoader, children: [
    
    
    
   
  ]}
])

function App() {
  return <RouterProvider router = {router}></RouterProvider>
}

export default App;



