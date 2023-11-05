import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root, { loader as RootLoader } from './components/Home/Root';


import MypageRoot from './mypageComponents/MypageRoot';
import HOME from './mypageComponents/HOME';
import Login from './components/Logincompnents/Login';

const router = createBrowserRouter([
  {path: '/',children: [
    {index : true, element: <Root />, loader: RootLoader},
    {path : "login", element:<Login></Login>},
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

