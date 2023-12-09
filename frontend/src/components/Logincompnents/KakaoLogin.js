
import classes from "./KakaoLogin.module.css"
import kakao from "../../imgfile/kakao_login_medium_narrow.png"
const KakaoLogin = () => {
    return (
        <div className={classes.container}>
            <a className={classes.kakaoLink} href="https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=c2c9d7624e8352d19ded017f4f838cc7&redirect_uri=http://localhost:2000/login/kakao">
                <img className={classes.kakaoImage} src={kakao} alt="Kakao" />
            </a>
        </div>
    )
}
export default KakaoLogin;