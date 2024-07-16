import React from "react";
import Banner from "./plan.png";
import './landing.css'

export default function landingTwo() {
    return (
        <div>
            <p className="body">
                Our mission is to encourage and enrich the lives of families and
                individuals living in rural poverty <br></br>by establishing
                meaningful relationships, promoting education, and offering material
                aid.
            </p>
            <img className="banner-container" src={Banner}></img>
        </div>
    )
}