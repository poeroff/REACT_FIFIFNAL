import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Dropdown.module.css";

const Dropdown = (props) => {
    const dataArray = Object.entries(props.data);
    return (
        <ul className="dropdown-menu d-block  mx-0 shadow w-220px"  data-bs-theme="light">
            {dataArray.map(([key,value])=>(
                  <li key={key}>
                  <Link to =" " className={classes.dropdown_item} >
                      <svg className="bi" width="16" height="16"></svg>
                      {value}
                  </Link>
              </li>

            ))}
        </ul>

    )
}
export default Dropdown;


