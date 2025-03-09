"use client"
import 'bootstrap/dist/css/bootstrap.min.css';

export function Loading(props) {
    if(props.isloading){
        return(
            <div className="spinner-border text-info" ></div>
           );
    }
  
}