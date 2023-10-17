import Header from "../mypageComponents/Mypageheader";
import MypageInfo from "../mypageComponents/MypageInfo";
import classes from "./Mypage.module.css";
import MypageRoot from "./MypageRoot";
const HOME = () => {
    return (
        <><Header />
            <main>
                <div >
                    <MypageInfo />
                    <MypageRoot/>
                </div>
            </main>

        </>
    )
}
export default HOME;