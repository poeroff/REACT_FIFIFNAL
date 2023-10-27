import React from "react"
import classes from "./Sliderimg.module.css";
import {motin} from "framer-motion";


const Sliderimg = (props) => {
    return (
        <React.Fragment >
            <div className={classes.img}>
                <img src={props.img1}></img>
               
            </div>
            <div className={classes.img}>
            <img src={props.img2}></img>
               
            </div>
            <div className={classes.img}>
            <img src={props.img3}></img>
               
            </div>

        </React.Fragment>

    )



}
export default Sliderimg