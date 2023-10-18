import { useEffect, useState } from "react";
import classes from "./Liveranking.module.css";
import { UseSelector, useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import Rankingproduct from "./Rankingproduct";
import { useLoaderData } from "react-router-dom";
import React from "react";


const Liveranking = () => {
    const data = useLoaderData();
    console.log(data.RANKING_PRODUCT.NEW)
  


    const [isClicked1, setIsClicked1] = useState(true);
    const [isClicked2, setIsClicked2] = useState(false);
    const [isClicked3, setIsClicked3] = useState(false);
    const [isClicked4, setIsClicked4] = useState(false);
    const [isClicked5, setIsClicked5] = useState(false);
    const [isClicked6, setIsClicked6] = useState(false);
    const [isClicked7, setIsClicked7] = useState(false);
    const [isClicked8, setIsClicked8] = useState(false);
    const [num, setnum] = useState();
    const [count, setcount] = useState(0);




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



    return (
        <React.Fragment>
        <div className={classes.Rankgingdiv}>
            <h1> 실시간 랭킹 </h1>
            <button className="ui inverted primary button" style={{ padding:"2%"}} onClick={clickhandler1}>전체</button>
            <button className="ui inverted secondary button"  style={{ marginLeft:"0.5%",marginRight:"0.5%",padding:"2%"}}>NEW</button>
            <button className="ui inverted red button" style={{ marginLeft:"0.5%",marginRight:"0.5%",padding:"2%"}}>상의</button>
            <button className="ui inverted orange button"  style={{ marginLeft:"0.5%",marginRight:"0.5%",padding:"2%"}}>바지</button>
            <button className="ui inverted yellow button"  style={{ marginLeft:"0.5%",marginRight:"0.5%",padding:"2%"}}>스커트</button>
            <button className="ui inverted olive button" style={{ marginLeft:"0.5%",marginRight:"0.5%",padding:"2%"}}>스니커즈</button>
            <button className="ui inverted green button"  style={{ marginLeft:"0.5%",marginRight:"0.5%",padding:"2%"}}>시계</button>
            <button className="ui inverted teal button"  style={{ marginLeft:"0.5%",marginRight:"0.5%",padding:"2%"}}>스포츠</button>
            <button className="ui inverted blue button" style={{ marginLeft:"0.5%",marginRight:"0.5%",padding:"2%"}}>속옷</button>
            <button className="ui inverted violet button" style={{ marginLeft:"0.5%",marginRight:"0.5%",padding:"2%"}}>주얼리</button>
            <button className="ui inverted purple button"  style={{ marginLeft:"0.5%",marginRight:"0.5%",padding:"2%"}}>뷰티</button>
            <button className="ui inverted pink button" style={{ marginLeft:"0.5%",marginRight:"0.5%",padding:"2%"}}>리빙</button>
            <button className="ui inverted brown button"  style={{ marginLeft:"0.5%",marginRight:"0.5%",padding:"2%"}}>아우터</button>
        </div>
        <div>
            {isClicked1 && <Rankingproduct data={data.RANKING_PRODUCT.NEW}></Rankingproduct>}

        </div>
        
        </React.Fragment>
        
    )

}
export default Liveranking

