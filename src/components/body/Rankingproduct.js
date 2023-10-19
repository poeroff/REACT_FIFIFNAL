import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classes from "./Rankingproduct.module.css"


const Rankingproduct = (props) => {
    const data_top_Array = Object.entries(props.data_top);
    const data_low_Array = Object.entries(props.data_low);

    
    return (
        <>

            <ul className={classes.cardul}>
            
                { data_top_Array.map(([key, value]) => (
                    
                    
                    <Card key={key} className={classes.card} >
                        
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title className={classes.title}>{value}</Card.Title>
                            <Card.Text>
                                Some quick example textasdasdsadasdsd 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                   

                ))}
            </ul>
            <ul className={classes.cardul}>
                { data_low_Array.map(([key, value]) => (
                    
                    <Card key={key} className={classes.card} >
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title className={classes.title}>{value}</Card.Title>
                            <Card.Text>
                                Some quick example textasdasdsadasdsd 
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    

                ))}
            </ul>
        </>


    )

}
export default Rankingproduct;