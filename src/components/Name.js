import React from "react";

import NameItem from "./NameItem"

function Name(){

    //Create a NameList List Object
    const NameList = {

        //Name object
        Name : {
            "title": "Miss",
            "first": "Jennie",
            "last": "Nichols"
          },
        
        //location object
        location: {
          "city" : "London2"
            },
        
        //Email object
        email : "jennie.nichols@example.com",
        
        //Date of birth object
        dob: {
            "date": "1992-03-08T15:13:16.688Z",
            "age": 30
          },

        //picture object
        picture: {
            
            "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
            
          }

    };

    return(

            <div>

            <h1>Name List</h1>
            <hr></hr>
            <ul>
            <NameItem 
            
            Name={NameList.Name.first + '' + NameList.Name.last}
            city={NameList.location.city}
            email={NameList.email}
            birthday={NameList.dob.date}
            avatar = {NameList.picture.medium}

            
            
            
            />

         
            </ul>
    
            </div>

    )
}
export default Name;