import axios from "axios";
export async function getInfo() {
    let url = "https://swapi.dev/api/films";
    try{
       let response = await axios.get(url);
       let data = response.data.results
       console.log(data)
       return data;
    }
    catch(err){
        console.log(err)
        return err.message;
    }
    
}