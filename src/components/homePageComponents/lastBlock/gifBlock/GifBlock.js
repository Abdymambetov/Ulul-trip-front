import React from 'react'
import Lottie from "lottie-react"
import lottie1 from "../gifBlock/lottie/lottie1.json"
import lottie2 from "../gifBlock/lottie/lottie2.json"
import point from"../gifBlock/img/image 18.svg"
import classes from "./GifBlock.module.css"


export default function Gif() {
    return (
        <div className={classes.container}>
            <Lottie
                className={classes.lot}
                animationData={lottie1}
            />
            <div className={classes.text}>
                <h2 className={classes.userFile}><p>Отсканируйте QR код</p>
                    чтобы скачать мобильное ANDROID приложение</h2>
            </div>
            <div className={classes.block}>

                <Lottie
                    className={classes.android}
                    animationData={lottie2}
                />

                <img src={point} className={classes.point} alt="some" />
            </div>

        </div>
    );
}