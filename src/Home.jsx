import React from 'react';
import Colors from './Colors';
import axios from 'axios';


const [Data,setData]=UseState({
    Company:'',
    Description:'',
})
const [colorsData,setColorsData]=useState([])

const Home=()=>{


    useEffect(()=>{
     axios.get('https://reqres.in/api/unknown',  { headers: { 'x-api-key': 'reqres_bc833d78e78f49b297257c99fa851391'}})
        .then(res=>{
            //make the name and description your own fictional company
            let companyName = "Action Movies";
            let CompanyDesc= " We provide action packed movies for kids."
            console.log('Response from Main API:' ,res);
            console.log('Colors Data:', res.data.data);

        })
        .catch(err=>{

            console.log(err);

        })
     }, [])
    
    return(
        <>
        <h1>{Data.Company}</h1>
        <p>{Data.Description}</p>
        <Colors data = {colorsData}/>

        </>
    )
}

export default Home;
