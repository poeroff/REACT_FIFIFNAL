import { useEffect, useState } from "react";
import classes from "./Liveranking.module.css";
import { UseSelector, useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { LiveActions } from "../store/Live";

const Liveranking = () => {

    const [isClicked1, setIsClicked1] = useState(false);
    const [isClicked2, setIsClicked2] = useState(false);
    const [isClicked3, setIsClicked3] = useState(false);
    const [isClicked4, setIsClicked4] = useState(false);
    const [isClicked5, setIsClicked5] = useState(false);
    const [isClicked6, setIsClicked6] = useState(false);
    const [isClicked7, setIsClicked7] = useState(false);
    const [isClicked8, setIsClicked8] = useState(false);
    const [num, setnum ] = useState();
    const [count, setcount ] = useState(0);
   



    const dispatch = useDispatch()

    const clickhandler1 = () => {
        setIsClicked1(true);

    }
    const clickhandler2 = () => {

    }
    const click1 = useSelector(state => state.Live.Click1);
    const click2 = useSelector(state => state.Live.Click2);
    const click3 = useSelector(state => state.Live.Click3);
    const click4 = useSelector(state => state.Live.Click4);


    useEffect(() => {
        const turn = Math.floor(Math.random() * (9 - 1)) + 1;
        setnum(turn)
  
        if (turn === 1 && num !== 1) {
            setTimeout(() => {
              setIsClicked1(true);
              setIsClicked2(false)
              setIsClicked3(false)
              setIsClicked4(false)
              setIsClicked5(false)
              setIsClicked6(false)
              setIsClicked7(false)
              setIsClicked8(false);
            }, 10000);
          } 
        else if(turn === 2  && num !== 2){
            setTimeout(() => {
                setIsClicked1(false);
                setIsClicked2(true)
                setIsClicked3(false)
                setIsClicked4(false)
                setIsClicked5(false)
                setIsClicked6(false)
                setIsClicked7(false)
                setIsClicked8(false);
              }, 10000);

        }
        else if(turn === 3  && num !== 3){
            setTimeout(() => {
                setIsClicked1(false);
                setIsClicked2(false)
                setIsClicked3(true)
                setIsClicked4(false)
                setIsClicked5(false)
                setIsClicked6(false)
                setIsClicked7(false)
                setIsClicked8(false);
              }, 10000);

        }
        else if(turn === 4  && num !== 4){
            setTimeout(() => {
                setIsClicked1(false);
                setIsClicked2(false)
                setIsClicked3(false)
                setIsClicked4(true)
                setIsClicked5(false)
                setIsClicked6(false)
                setIsClicked7(false)
                setIsClicked8(false);
              }, 10000);

        }
        else if(turn === 5  && num !== 5){
            setTimeout(() => {
                setIsClicked1(false);
                setIsClicked2(false)
                setIsClicked3(false)
                setIsClicked4(false)
                setIsClicked5(true)
                setIsClicked6(false)
                setIsClicked7(false)
                setIsClicked8(false);
              }, 10000);

        }
        else if(turn === 6  && num !== 6){
            setTimeout(() => {
                setIsClicked1(false);
                setIsClicked2(false)
                setIsClicked3(false)
                setIsClicked4(false)
                setIsClicked5(false)
                setIsClicked6(true)
                setIsClicked7(false)
                setIsClicked8(false);
              }, 10000);

        }
        else if(turn === 7  && num !== 7){
            setTimeout(() => {
                setIsClicked1(false);
                setIsClicked2(false)
                setIsClicked3(false)
                setIsClicked4(false)
                setIsClicked5(false)
                setIsClicked6(false)
                setIsClicked7(true)
                setIsClicked8(false);
              }, 10000);

        }
        else if(turn === 8  && num !== 8){
            setTimeout(() => {
                setIsClicked1(false);
                setIsClicked2(false)
                setIsClicked3(false)
                setIsClicked4(false)
                setIsClicked5(false)
                setIsClicked6(false)
                setIsClicked7(false)
                setIsClicked8(true);
              }, 10000);

        }
        else{
            setcount(count+1)
        }
     
      


         
    },[isClicked1,isClicked2,isClicked3, isClicked4, isClicked5,isClicked6,isClicked7,isClicked8,count])
    return (
        <div className={classes.rankingdiv}>
                <h3 className={classes.title}> 실시간 랭킹</h3>
                <div className={classes.uidiv}>
                    <ul className={classes.ui}>
                        <button className={!isClicked1 ? classes.button : classes.button_hover} onClick={clickhandler1}> NEW </button>
                        <button className={!isClicked2 ? classes.button : classes.button_hover} onClick={clickhandler2}>  상의 </button>
                    </ul>
                    <ul className={classes.ui}>
                        <button  className={!isClicked3 ? classes.button : classes.button_hover}>   바지 </button>
                        <button className={!isClicked4 ? classes.button : classes.button_hover}> 아우터</button>

                    </ul>
                    <ul className={classes.ui}>
                        <button  className={!isClicked5 ? classes.button : classes.button_hover}>스니커즈</button>
                        <button  className={!isClicked6 ? classes.button : classes.button_hover}>신발</button>

                    </ul>
                    <ul className={classes.ui}>
                        <button  className={!isClicked7 ? classes.button : classes.button_hover}> 시계</button>
                        <button className={!isClicked8 ? classes.button : classes.button_hover}> 모자 </button>

                    </ul>  
                </div>
            

        </div>
    )

}
export default Liveranking