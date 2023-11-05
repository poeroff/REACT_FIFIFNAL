
import { Link, Outlet } from "react-router-dom"
import Header from "../header/Header";
import Slider from "../side/Slider";
import Slideshow from "../imgslider/Slideshow";
import Liveranking from "../body/Liveranking";
import classes from "./Root.module.css";

import { useLoaderData } from "react-router-dom";
import Underhead from "../underheader/Underhead";



const Root = () => {
    const data = useLoaderData();

    return (
        <div>

            <header>
                <Header data={data}> </Header>
            </header>
            <Underhead></Underhead>
            <Slideshow></Slideshow>
            <section className={classes.section}>
                <Slider></Slider>
                <Liveranking> </Liveranking>

                
            </section>


            <main>
                <Outlet></Outlet>
            </main>
        </div>
    )
}
export default Root;
