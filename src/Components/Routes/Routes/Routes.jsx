
import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../../Main/Main";
import Home from "../../Home/Home/Home";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children : [
            {
                path : "/" , element : <Home/>
            }
        ]
    },
]);


