import { Fragment } from "react";
import React from "react";
import classes from "./Animation.module.css";
import Lottie from "lottie-web";
import useWindowDimensions from "../hooks/useWindowDimensions.js";
const DisplayAnimation = (props) => {
    const id = "#" + props.animationName;
    const name = props.animationName;
    React.useEffect(() => {
        Lottie.loadAnimation({
            container: document.querySelector(id),
            animationData: props.animation,
            renderer: "svg",
        });
    }, []);
    const { height, width } = useWindowDimensions();
    if (width > 1000) {
        return (
            <Fragment>
                <div id={props.animationName} style={{ width: 300, height: 300 }} />
            </Fragment>
        );
    } else {
        return (
            <Fragment>
                <div
                    id={props.animationName}
                    style={{ width: 500, height: 130, size: 500 }}
                />
            </Fragment>
        );
    }
};
export default DisplayAnimation;