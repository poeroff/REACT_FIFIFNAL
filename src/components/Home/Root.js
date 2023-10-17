
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
            <Slider></Slider>

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

        return data;

    } catch (error) {
        console.error('Error loading data:', error);
        return { error: 'Failed to load data' }; // You can return an error object or message
    }
}
