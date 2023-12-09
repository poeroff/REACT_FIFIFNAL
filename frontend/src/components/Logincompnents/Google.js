import { GoogleLogin } from '@react-oauth/google';
import classes from "./GoogleLogin.module.css"

const Google = () => {
    const clientId = "118443814001-jn6pgsbn26k6eouvrcjihis1aj406osn.apps.googleusercontent.com";
  
    const responseGoogle = (error) => {
        console.log(error);
    }
    return (
        <div className={classes.container}   >
            <GoogleLogin
                onSuccess={onSuccess => {
                    console.log("로그인 성공");
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
                
            />

        </div>

    )

}

export default Google