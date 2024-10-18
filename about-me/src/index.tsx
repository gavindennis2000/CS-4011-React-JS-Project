import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";  // react router
import { About } from './about'  // about div from about.tsx
import { MyHobbies } from './myHobbies'  // hobbies div from myHobbies.tsx
import { MenuBar } from './modules/menubar'  // modified appbar from Material UI

import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: 
            <div>
                <MenuBar/>
                <About />
            </div>,
    },
    {
        path: "/about",
        element: 
            <div>
                <MenuBar/>
                <About />
            </div>,
    },
    {
        path: "/hobbies",
        element: 
            <div>
                <MenuBar/>
                <MyHobbies />
            </div>,
      },
]);

const App = () => {

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

createRoot(document.getElementById('root') as Element).render(<App />)