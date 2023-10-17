import { Outlet } from "react-router-dom"
import Header from "../components/header/Header";
import { Link } from "react-router-dom";
const MypageRoot = () => {
    return (

        <div>
            
            <Link to ="HOME"> Button</Link>
           
            <header>
           

            </header>

            <main>
                <Outlet></Outlet>
            </main>
        </div>
    )

}
export default MypageRoot;