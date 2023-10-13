import { useState } from "react";
import classes from "./Slider.module.css";

const Slider = () => {
    const [cloth, setcloth] = useState(false)


    const clothhandler = () => {
        setcloth(!cloth)
    }
    return (
        <form className={classes.form}>
            <div className={classes.box}>
                <button type="button" className={classes.product} onClick={clothhandler}>
                    <span> 인기</span>
                    <div className={classes.a1}>+</div>
                </button>
            </div>
            {cloth &&
                <div className={classes.Hot}>
                    <div className={classes.Hottable}>
                        <button className={classes.button}> 맨투맨</button>
                        <button className={classes.button}> 맨투맨</button>
                        <button className={classes.button}> 맨투맨</button>


                    </div>

                    <div className={classes.Hottable}>
                        <button className={classes.button}> 맨투맨</button>
                        <button className={classes.button}> 맨투맨</button>
                        <button className={classes.button}> 맨투맨</button>

                    </div>
                </div>}
            <div className={classes.box}>
                <button className={classes.product}>
                    <span> 상의</span>
                    <div className={classes.a1}>+</div>
                </button>
            </div>

            <div className={classes.box}>
                <button className={classes.product}>
                    <span> 아우터</span>
                    <div className={classes.a1}>+</div>
                </button>
            </div>

            <div className={classes.box}>
                <button className={classes.product}>
                    <span> 바지</span>
                    <div className={classes.a1}>+</div>
                </button>
            </div>
            <div className={classes.box}>
                <button className={classes.product}>
                    <span> 바지</span>
                    <div className={classes.a1}>+</div>
                </button>
            </div>
            <div className={classes.box}>
                <button className={classes.product}>
                    <span> 바지</span>
                    <div className={classes.a1}>+</div>
                </button>
            </div>
            <div className={classes.box}>
                <button className={classes.product}>
                    <span> 바지</span>
                    <div className={classes.a1}>+</div>
                </button>
            </div>
            <div className={classes.box}>
                <button className={classes.product}>
                    <span> 바지</span>
                    <div className={classes.a1}>+</div>
                </button>
            </div>
            <div className={classes.box}>
                <button className={classes.product}>
                    <span> 바지</span>
                    <div className={classes.a1}>+</div>
                </button>
            </div>
            <div className={classes.box}>
                <button className={classes.product}>
                    <span> 바지</span>
                    <div className={classes.a1}>+</div>
                </button>
            </div>







        </form>

    )



}
export default Slider;