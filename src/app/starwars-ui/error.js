"use client"
import styles from "../page.module.css"

export function Error(props) {
    let error=props.error
    if(props.error!=""){
       error=props.error
       console.log(error)
    }
    return(
        <div className={styles.error}>{error}</div>
    );
}