import { useEffect, useState } from "react";
import classes from "./Liveranking.module.css";
import { useDispatch, useSelector } from 'react-redux';
import Rankingproduct from "./Rankingproduct";
import { useLoaderData } from "react-router-dom";

import React from "react";
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import { motion } from "framer-motion";
import Description from "../descripthion/Description"
import Description2 from "../descripthion/Description2";





const Liveranking = () => {
    const data = useLoaderData()

    const dispatch = useDispatch()
    const [imgfile, setimgfile] = useState(["all","NEW"])
    const [all, setall] = useState([]);
    const [newa, setnewa] = useState([]);
    

    const [initialcounterState, setinitialcounterState] = useState([true, false,false,false])

    const clickhandler = (event) => {
        const updatestate = initialcounterState.map((value, index) => (index === event))
        setinitialcounterState(updatestate)

    }

    
    useEffect(() => {
        // Firebase 초기화
        const firebaseConfig = {
            apiKey: "AIzaSyCZQrsHvlHYMzJdY96QmSOU1fZG5ygs15c",
            authDomain: "chlxodud-7887d.firebaseapp.com",
            databaseURL: "https://chlxodud-7887d-default-rtdb.firebaseio.com",
            projectId: "chlxodud-7887d",
            storageBucket: "chlxodud-7887d.appspot.com",
            messagingSenderId: "951273069717",
            appId: "1:951273069717:web:ec3b733ffc12c15ec08f9c",
            measurementId: "G-FDKQRRN1BV"
        };
        const app = initializeApp(firebaseConfig);
        const storage = getStorage(app);
        const AllArray = [];
        const NewArray = [];
        // Firebase Storage에서 이미지 URL 가져오기
        for(let i = 0; i<imgfile.length; i++){
           
            const imageRef = ref(storage, `gs://chlxodud-7887d.appspot.com/${imgfile[i]}`);
            listAll(imageRef).then((result) => {
                    result.items.forEach((itemRef) => {
                        getDownloadURL(itemRef)
                            .then((url) => {             
                                if(i === 0){
                                    AllArray.push(url)
                                    setall(AllArray);
                                    
                                }
                                else if(i === 1){         
                                    NewArray.push(url)
                                    setnewa(NewArray);

                                }
                            })
                            .catch((error) => {
                                console.error('Error getting download URL:', error);
                            });
                    });
                })
                .catch((error) => {
                    console.error('Error listing files:', error);
                });
        }
    }, []);
    const [ count , setcount] = useState(0);
    useEffect(() => {

        setTimeout(() => {
            clickhandler(count);
            setcount(count+1)
            if(count === 1){
                setcount(0);
            }
            
            
    
        },3000)

    },[count])

    const title = ["전체","NEW"]
   






    return (
        <React.Fragment >
            <div className={classes.Rankgingdiv}>
                <h1> 실시간 랭킹 </h1>
                <button className= "ui inverted primary button" style={{ padding: "2%"}} onClick={event => clickhandler(0)}  >전체</button>
                <button className="ui inverted secondary button" style={{ marginLeft: "0.5%", marginRight: "0.5%", padding: "2%" }} onClick={event => clickhandler(1)} >NEW</button>
                <button className="ui inverted red button" style={{ marginLeft: "0.5%", marginRight: "0.5%", padding: "2%" }} >상의</button>
                <button className="ui inverted orange button" style={{ marginLeft: "0.5%", marginRight: "0.5%", padding: "2%" }}>바지</button>
                <button className="ui inverted yellow button" style={{ marginLeft: "0.5%", marginRight: "0.5%", padding: "2%" }}>스커트</button>
                <button className="ui inverted olive button" style={{ marginLeft: "0.5%", marginRight: "0.5%", padding: "2%" }}>스니커즈</button>
                <button className="ui inverted green button" style={{ marginLeft: "0.5%", marginRight: "0.5%", padding: "2%" }}>시계</button>
                <button className="ui inverted teal button" style={{ marginLeft: "0.5%", marginRight: "0.5%", padding: "2%" }}>스포츠</button>
                <button className="ui inverted blue button" style={{ marginLeft: "0.5%", marginRight: "0.5%", padding: "2%" }}>속옷</button>
                <button className="ui inverted violet button" style={{ marginLeft: "0.5%", marginRight: "0.5%", padding: "2%" }}>주얼리</button>
                <button className="ui inverted purple button" style={{ marginLeft: "0.5%", marginRight: "0.5%", padding: "2%" }}>뷰티</button>
                <button className="ui inverted pink button" style={{ marginLeft: "0.5%", marginRight: "0.5%", padding: "2%" }}>리빙</button>
                <button className="ui inverted brown button" style={{ marginLeft: "0.5%", marginRight: "0.5%", padding: "2%" }}>아우터</button>
                {/* {initialcounterState[0] && <Rankingproduct title = {title[0]} data_top={data.RANKING_PRODUCT.NEW} data_low={data.RANKING_PRODUCT.NEW_low} img={all} ></Rankingproduct>} */}
                {/* {initialcounterState[1] && <Rankingproduct  title = {title[1]} data_top={data.RANKING_PRODUCT.consultation_low} data_low={data.RANKING_PRODUCT.consultation_top} img={newa}></Rankingproduct>} */}
                <Description></Description>
                <Description2></Description2> 
            </div>
         
           
            
        </React.Fragment>
    )
}
export default Liveranking

