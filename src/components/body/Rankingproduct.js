import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classes from "./Rankingproduct.module.css"


const Rankingproduct = (props) => {
    const dataArray = Object.entries(props.data);
    console.log(dataArray)
    return (
        <>

            <ul className={classes.cardul}>
                {dataArray.map(([key, value]) => (
                    <Card className={classes.card}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{value}</Card.Title>
                            <Card.Text>
                                Some quick example text 
                            </Card.Text>
                        </Card.Body>
                    </Card>

                ))}
            </ul>
        </>


    )

}
export default Rankingproduct;