"use client"
import styles from "../page.module.css";
import { Header } from "./header";
import { Error } from "./error";
import { Loading } from "./loading";
import { StarwarsData } from "./starwars-data";
import { useEffect, useState } from "react";
import { getInfo } from "../starwars-api/client"
export function Main() {
    //инициализация всех дочерних компонентов
    const [allepisodes, setEpisodes] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    //функция устанавливающая все переменные дочерних компонентов
    async function setAllComponents() {
        setLoading(true);
        setError("");
        try{
            let response = await getInfo()
            if(typeof response=="string"){
               setError(response);
               return;
            }
            setEpisodes(response);
        }
        catch(err){
          setError("Error");
          return;
        }
        finally{
           setLoading(false);
        }
    }

   useEffect(() => {
       setAllComponents();
       }, []);
   
    return(
<div className={styles.bodyMain}>
     <Header/>
     <Loading isloading={loading}/>
     <Error error={error}/>
     <StarwarsData data={allepisodes}/>
      </div>
    );
}