import { useState } from "react";
import classes from "./Slider.module.css";
import { useDispatch, useSelector } from "react-redux";
import { sideActions } from "../../store/side-action";

const Slider = () => {

    const dispatch = useDispatch();

    const sidehandler = (event,index) =>{
        event.preventDefault()
        dispatch(sideActions.click(index))
    }

    const popular = useSelector(state => state.side.product[0]);
    console.log(popular)

    const jacket  = useSelector(state => state.side.product[1]);

    const outerwear = useSelector(state => state.side.product[2]);

    const Pants = useSelector(state => state.side.product[3]);

    const Onepiece = useSelector(state => state.side.product[4]);

    const Skirt = useSelector(state => state.side.product[5]);

    const sneakers = useSelector(state => state.side.product[6]);

    const shoes = useSelector(state => state.side.product[7]);

    const bag = useSelector(state => state.side.product[8]);
    
    const womanbag = useSelector(state => state.side.product[9]);

    const sport = useSelector(state => state.side.product[10]);

    const hat = useSelector(state => state.side.product[11]);
   






    return (
        <form className={classes.form}>
            <div className={classes.box}>
                <button type="button" className={classes.product} onClick={event => sidehandler(event,0)}>
                    <span> 인기</span>
                    <div className={classes.a1}>+</div>
                </button>
            </div>
            {popular &&
                <div className={classes.Hot}>
                     <div className={classes.Hottable}>
                        <button className={classes.button}> 맨투맨/스웨트</button>
                        <button className={classes.button}> 셔츠/블라우스</button>
                        <button className={classes.button}> 후드 티셔츠</button>
                        <button className={classes.button}> 캡/야구 모자 </button>
                        <button className={classes.button}> 가디건 </button>
                        
                    </div>
                    <div className={classes.Hottable}>
                        <button className={classes.button}> 니트/스웨터</button>
                        <button className={classes.button}> 트레이닝</button>
                        <button className={classes.button}> 긴소매 티셔츠</button>
                        <button className={classes.button}> 데닝 팬츠</button>
                        <button className={classes.button}> 코튼 팬츠</button>
                     

                    </div>
                </div>}
            <div className={classes.box}>
                <button className={classes.product} onClick={event => sidehandler(event,1)}>
                    <span> 상의</span>
                    <div className={classes.a1}>+</div>
                </button>
            </div>
            {jacket &&
                <div className={classes.Hot}>
                     <div className={classes.Hottable}>
                        <button className={classes.button}> 맨투맨/스웨트</button>
                        <button className={classes.button}> 셔츠/블라우스</button>
                        <button className={classes.button}> 후드 티셔츠</button>
                        <button className={classes.button}> 캡/야구 모자 </button>
                        <button className={classes.button}> 가디건 </button>
                        
                    </div>
                    <div className={classes.Hottable}>
                        <button className={classes.button}> 니트/스웨터</button>
                        <button className={classes.button}> 트레이닝</button>
                        <button className={classes.button}> 긴소매 티셔츠</button>
                        <button className={classes.button}> 데닝 팬츠</button>
                        <button className={classes.button}> 코튼 팬츠</button>
                     

                    </div>
                </div>}

            <div className={classes.box}>
                <button className={classes.product} onClick={event => sidehandler(event,2)}>
                    <span> 아우터</span>
                    <div className={classes.a1}>+</div>
                </button>
            </div>
            {outerwear &&
                <div className={classes.Hot}>
                    <div className={classes.Hottable}>
                        <button className={classes.button}> 맨투맨/스웨트</button>
                        <button className={classes.button}> 셔츠/블라우스</button>
                        <button className={classes.button}> 후드 티셔츠</button>
                        <button className={classes.button}> 캡/야구 모자 </button>
                        <button className={classes.button}> 가디건 </button>
                        
                    </div>
                    <div className={classes.Hottable}>
                        <button className={classes.button}> 니트/스웨터</button>
                        <button className={classes.button}> 트레이닝</button>
                        <button className={classes.button}> 긴소매 티셔츠</button>
                        <button className={classes.button}> 데닝 팬츠</button>
                        <button className={classes.button}> 코튼 팬츠</button>
                     

                    </div>
                </div>}

            <div className={classes.box}>
                <button className={classes.product} onClick={event => sidehandler(event,3)}>
                    <span> 바지</span>
                    <div className={classes.a1}>+</div>
                </button>
            </div>
            {Pants &&
                <div className={classes.Hot}>
                     <div className={classes.Hottable}>
                        <button className={classes.button}> 맨투맨/스웨트</button>
                        <button className={classes.button}> 셔츠/블라우스</button>
                        <button className={classes.button}> 후드 티셔츠</button>
                        <button className={classes.button}> 캡/야구 모자 </button>
                        <button className={classes.button}> 가디건 </button>
                        
                    </div>
                    <div className={classes.Hottable}>
                        <button className={classes.button}> 니트/스웨터</button>
                        <button className={classes.button}> 트레이닝</button>
                        <button className={classes.button}> 긴소매 티셔츠</button>
                        <button className={classes.button}> 데닝 팬츠</button>
                        <button className={classes.button}> 코튼 팬츠</button>
                     

                    </div>
                </div>}
            <div className={classes.box}>
                <button className={classes.product} onClick={event => sidehandler(event,4)}>
                    <span> 원피스</span>
                    <div className={classes.a1}>+</div>
                </button>
            </div>
            {Onepiece &&
                <div className={classes.Hot}>
                      <div className={classes.Hottable}>
                        <button className={classes.button}> 맨투맨/스웨트</button>
                        <button className={classes.button}> 셔츠/블라우스</button>
                        <button className={classes.button}> 후드 티셔츠</button>
                        <button className={classes.button}> 캡/야구 모자 </button>
                        <button className={classes.button}> 가디건 </button>
                        
                    </div>
                    <div className={classes.Hottable}>
                        <button className={classes.button}> 니트/스웨터</button>
                        <button className={classes.button}> 트레이닝</button>
                        <button className={classes.button}> 긴소매 티셔츠</button>
                        <button className={classes.button}> 데닝 팬츠</button>
                        <button className={classes.button}> 코튼 팬츠</button>
                     

                    </div>
                </div>}
            <div className={classes.box}>
                <button className={classes.product} onClick={event => sidehandler(event,5)}>
                    <span>스커트</span>
                    <div className={classes.a1}>+</div>
                </button>
            </div>
            {Skirt &&
                <div className={classes.Hot}>
                    <div className={classes.Hottable}>
                        <button className={classes.button}> 맨투맨/스웨트</button>
                        <button className={classes.button}> 셔츠/블라우스</button>
                        <button className={classes.button}> 후드 티셔츠</button>
                        <button className={classes.button}> 캡/야구 모자 </button>
                        <button className={classes.button}> 가디건 </button>
                        
                    </div>
                    <div className={classes.Hottable}>
                        <button className={classes.button}> 니트/스웨터</button>
                        <button className={classes.button}> 트레이닝</button>
                        <button className={classes.button}> 긴소매 티셔츠</button>
                        <button className={classes.button}> 데닝 팬츠</button>
                        <button className={classes.button}> 코튼 팬츠</button>
                     

                    </div>
                </div>}
            <div className={classes.box}>
                <button className={classes.product} onClick={event => sidehandler(event,6)}>
                    <span> 스니커즈</span>
                    <div className={classes.a1}>+</div>
                </button>
            </div>
            {sneakers &&
                <div className={classes.Hot}>
                      <div className={classes.Hottable}>
                        <button className={classes.button}> 맨투맨/스웨트</button>
                        <button className={classes.button}> 셔츠/블라우스</button>
                        <button className={classes.button}> 후드 티셔츠</button>
                        <button className={classes.button}> 캡/야구 모자 </button>
                        <button className={classes.button}> 가디건 </button>
                        
                    </div>
                    <div className={classes.Hottable}>
                        <button className={classes.button}> 니트/스웨터</button>
                        <button className={classes.button}> 트레이닝</button>
                        <button className={classes.button}> 긴소매 티셔츠</button>
                        <button className={classes.button}> 데닝 팬츠</button>
                        <button className={classes.button}> 코튼 팬츠</button>
                     

                    </div>
                </div>}
            <div className={classes.box}>
                <button className={classes.product} onClick={event => sidehandler(event,7)}>
                    <span> 신발</span>
                    <div className={classes.a1}>+</div>
                </button>
            </div>
            {shoes &&
                <div className={classes.Hot}>
                      <div className={classes.Hottable}>
                        <button className={classes.button}> 맨투맨/스웨트</button>
                        <button className={classes.button}> 셔츠/블라우스</button>
                        <button className={classes.button}> 후드 티셔츠</button>
                        <button className={classes.button}> 캡/야구 모자 </button>
                        <button className={classes.button}> 가디건 </button>
                        
                    </div>
                    <div className={classes.Hottable}>
                        <button className={classes.button}> 니트/스웨터</button>
                        <button className={classes.button}> 트레이닝</button>
                        <button className={classes.button}> 긴소매 티셔츠</button>
                        <button className={classes.button}> 데닝 팬츠</button>
                        <button className={classes.button}> 코튼 팬츠</button>
                     

                    </div>
                </div>}
            <div className={classes.box}>
                <button className={classes.product} onClick={event => sidehandler(event,8)}>
                    <span> 가방</span>
                    <div className={classes.a1}>+</div>
                </button>
            </div>
            {bag &&
                <div className={classes.Hot}>
                    <div className={classes.Hottable}>
                        <button className={classes.button}> 맨투맨/스웨트</button>
                        <button className={classes.button}> 셔츠/블라우스</button>
                        <button className={classes.button}> 후드 티셔츠</button>
                        <button className={classes.button}> 캡/야구 모자 </button>
                        <button className={classes.button}> 가디건 </button>
                        
                    </div>
                    <div className={classes.Hottable}>
                        <button className={classes.button}> 니트/스웨터</button>
                        <button className={classes.button}> 트레이닝</button>
                        <button className={classes.button}> 긴소매 티셔츠</button>
                        <button className={classes.button}> 데닝 팬츠</button>
                        <button className={classes.button}> 코튼 팬츠</button>
                     

                    </div>
                </div>}
            <div className={classes.box}>
                <button className={classes.product} onClick={event => sidehandler(event,9)}>
                    <span> 여성 가방</span>
                    <div className={classes.a1}>+</div>
                </button>
            </div>
            {womanbag &&
                <div className={classes.Hot}>
                     <div className={classes.Hottable}>
                        <button className={classes.button}> 맨투맨/스웨트</button>
                        <button className={classes.button}> 셔츠/블라우스</button>
                        <button className={classes.button}> 후드 티셔츠</button>
                        <button className={classes.button}> 캡/야구 모자 </button>
                        <button className={classes.button}> 가디건 </button>
                        
                    </div>
                    <div className={classes.Hottable}>
                        <button className={classes.button}> 니트/스웨터</button>
                        <button className={classes.button}> 트레이닝</button>
                        <button className={classes.button}> 긴소매 티셔츠</button>
                        <button className={classes.button}> 데닝 팬츠</button>
                        <button className={classes.button}> 코튼 팬츠</button>
                     

                    </div>
                </div>}
            <div className={classes.box}>
                <button className={classes.product} onClick={event => sidehandler(event,10)}>
                    <span> 스포츠 </span>
                    <div className={classes.a1}>+</div>
                </button>
            </div>
            {sport &&
                <div className={classes.Hot}>
                    <div className={classes.Hottable}>
                        <button className={classes.button}> 맨투맨/스웨트</button>
                        <button className={classes.button}> 셔츠/블라우스</button>
                        <button className={classes.button}> 후드 티셔츠</button>
                        <button className={classes.button}> 캡/야구 모자 </button>
                        <button className={classes.button}> 가디건 </button>
                        
                    </div>
                    <div className={classes.Hottable}>
                        <button className={classes.button}> 니트/스웨터</button>
                        <button className={classes.button}> 트레이닝</button>
                        <button className={classes.button}> 긴소매 티셔츠</button>
                        <button className={classes.button}> 데닝 팬츠</button>
                        <button className={classes.button}> 코튼 팬츠</button>
                     

                    </div>
                </div>}
            <div className={classes.box}>
                <button className={classes.product} onClick={event => sidehandler(event,11)}>
                    <span> 모자</span>
                    <div className={classes.a1}>+</div>
                </button>
            </div>
            {hat &&
                <div className={classes.Hot}>
                      <div className={classes.Hottable}>
                        <button className={classes.button}> 맨투맨/스웨트</button>
                        <button className={classes.button}> 셔츠/블라우스</button>
                        <button className={classes.button}> 후드 티셔츠</button>
                        <button className={classes.button}> 캡/야구 모자 </button>
                        <button className={classes.button}> 가디건 </button>
                        
                    </div>
                    <div className={classes.Hottable}>
                        <button className={classes.button}> 니트/스웨터</button>
                        <button className={classes.button}> 트레이닝</button>
                        <button className={classes.button}> 긴소매 티셔츠</button>
                        <button className={classes.button}> 데닝 팬츠</button>
                        <button className={classes.button}> 코튼 팬츠</button>
                     

                    </div>
                </div>}
          
            







        </form>

    )



}
export default Slider;