import { useEffect, useState } from "react";
import classes from "./Liveranking.module.css";

import { useDispatch, useSelector } from 'react-redux';
import Rankingproduct from "./Rankingproduct";
import { useLoaderData } from "react-router-dom";
import {LiveActions} from "../../store/Live"
import React from "react";


const Liveranking = () => {

    
    const data = useLoaderData();
    // console.log(data.RANKING_PRODUCT)
    
    const [click_1, setclick_1] = useState(false)
    const [click_2, setclick_2] = useState(false)
    

 
    const dispatch = useDispatch()

    const [initialcounterState, setinitialcounterState] = useState([true, false,false,  false])

    const clickhandler = (event) => {
        const updatestate = initialcounterState.map((value,index) => (index === event))
        setinitialcounterState(updatestate)
            
        
       
    }


   
  
  
   



    
    return (
        <React.Fragment >
        <div className={classes.Rankgingdiv}>
            <h1> 실시간 랭킹 </h1>
            <button className="ui inverted primary button" style={{ padding:"2%"}} onClick={event => clickhandler(0)}>전체</button>
            <button className="ui inverted secondary button"  style={{ marginLeft:"0.5%",marginRight:"0.5%",padding:"2%"}} onClick={event => clickhandler(1)} >NEW</button>
            <button className="ui inverted red button" style={{ marginLeft:"0.5%",marginRight:"0.5%",padding:"2%"}} >상의</button>
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
             {initialcounterState[0] && <Rankingproduct data_top={data.RANKING_PRODUCT.NEW} data_low ={data.RANKING_PRODUCT.NEW_low}></Rankingproduct>} 
             {initialcounterState[1] && <Rankingproduct data_top={data.RANKING_PRODUCT.consultation_low} data_low ={data.RANKING_PRODUCT.consultation_top}></Rankingproduct>} 
        </div>
      
        
        </React.Fragment>
        
    )

}
export default Liveranking

