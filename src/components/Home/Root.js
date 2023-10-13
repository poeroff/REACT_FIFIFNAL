
import { Outlet } from "react-router-dom"
import Header from "../header/Header";
import Slider from "../side/Slider";
import Slideshow from "../img/Slideshow";
import Liveranking from "../body/Liveranking";
import classes from "./Root.module.css";

import { useLoaderData } from "react-router-dom";


const Root = () => {
    const data = useLoaderData();
    console.log(data)
    



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
    try {
        const response = await fetch('https://chlxodud-7887d-default-rtdb.firebaseio.com/product.json');

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log(data);
        return data;

    } catch (error) {
        console.error('Error loading data:', error);
        return { error: 'Failed to load data' }; // You can return an error object or message
    }
}
