"use client"
import styles from "../page.module.css"

export function Error(props) {
    let error="";
    if(props.error!=""){
       error=props.error;
    }
    return(
        <div className={styles.error}>{error}</div>
    );
}