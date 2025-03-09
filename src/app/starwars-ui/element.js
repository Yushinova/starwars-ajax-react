"use client"
import styles from "../page.module.css"
import { useState } from "react";

export function Element(props) {
    const [isActive, setIsActive] = useState(false);
    const onClick = () => {
        setIsActive(!isActive);
    };
    return(
        <div className={styles.episode} onClick={onClick}>
        <div className={styles.episodeHeader}>
            <h2 className={styles.episodeTitle}>{props.element.title}</h2>
            <h3 className={styles.episodeInfo}>Episode {props.element.episode_id}, {props.element.release_date}</h3>
        </div>
        <div className={isActive? styles.episodeVerbose : styles.hidenDiv}>{props.element.opening_crawl}</div>
      </div>
    );
}