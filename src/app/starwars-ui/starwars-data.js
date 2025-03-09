"use client"

import styles from "../page.module.css"
import React from "react";
import { Element } from "./element";
export function StarwarsData(props) {

  let data=[]
  if(props.data!=null){
    data=props.data
  }
    return(
    <div className={styles.episodes} id="episodes">
   {data.map((element)=>(
    <Element key={element.episode_id} element={element}/>
    ))};
    </div>
    );
}