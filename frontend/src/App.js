import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root, { loader as RootLoader } from './components/Home/Root';


import MypageRoot from './mypageComponents/MypageRoot';
import HOME from './mypageComponents/HOME';
import Login from './components/Logincompnents/Login';
import Signup from './components/Logincompnents/Signup';
const router = createBrowserRouter([
  {path: '/',children: [
    {index : true, element: <Root/>},
    {path : "login",children : [
      {index:true ,  element:<Login></Login>},
      {path: "Signup",element:<Signup></Signup>}
    ]},
    {path: "mypage",  children : [ 
      {index : true, element: <HOME></HOME>},
      {path : "HOME",element:<HOME></HOME>}
    ]},
    


  ]},
]);




function App() {
  return <RouterProvider router={router} />;
}

export default App;

