import React from "react";
import moment from "moment"


function NameItem(props){

    return(

        <div>
    
           <ul>

                <p>Name :  {props.Name} </p>
                <p>City : {props.city} </p> 
                <p>Email : {props.email}</p> 
                <p>Birthday : {moment(props.birthday).format('DD/MM/YYYY')}</p>
                <img src ={props.avatar}/>



           </ul>
           
            

        </div>


    )


}

export default NameItem;