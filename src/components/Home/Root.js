
import { Outlet } from "react-router-dom"
import Header from "../header/Header";
import Slider from "../side/Slider";
import Slideshow from "../img/Slideshow";
import Liveranking from "../body/Liveranking";
import classes from "./Root.module.css";

import { useLoaderData } from "react-router-dom";


const Root = () => {
    const data = useLoaderData();
    



    return (
        <div>
            <header>
                <Header data ={data}> </Header>
            </header>
            <Slideshow></Slideshow>
            <div className={classes.body}>
                <div className={classes.Slider}>
                    <Slider></Slider>
                </div>
                <Liveranking></Liveranking>
            </div>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    )
}
export default Root;
export async function loader({ request, params }) {


    const response = await fetch('https://chlxodud-7887d-default-rtdb.firebaseio.com/product.json');

    if (!response.ok) {

    }

    else {
        const data = await response.json();
        return data;

    }
}

