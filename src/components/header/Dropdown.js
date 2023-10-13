import { useEffect } from "react";
import { useState } from "react";
import classes from "./Dropdown.module.css";

const Dropdown = (props) => {
    const dataArray = Object.entries(props.data);
    return (
        <ul className="dropdown-menu d-block position-static mx-0 shadow w-220px" data-bs-theme="light">
            {dataArray.map(([key,value])=>(
                  <li key={key}>
                  <p className="dropdown-item d-flex gap-2 align-items-center" >
                      <svg className="bi" width="16" height="16"></svg>
                      {value}
                  </p>
              </li>

            ))}
        </ul>

    )
}
export default Dropdown;


