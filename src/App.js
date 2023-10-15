import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root, { loader as RootLoader } from './components/Home/Root';

import MypageRoot from './mypageComponents/MypageRoot';
import HOME from './mypageComponents/HOME';

const router = createBrowserRouter([
  {path: '/',element: <Root />,  loader: RootLoader},
  {path: "mypage",  children : [ 
    {index : true, element: <MypageRoot></MypageRoot>},
    {path : "HOME",element:<HOME></HOME>}
  ]},
 
     
    
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

