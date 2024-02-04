 import React from 'react'
import { Card } from './Card';
import {useState} from  'react';
 
  const Cards = (props) => {
    let courses=props.courses;
    let category=props.category;
    //returns you a list 
    const[likedCourses,setLikedCourses]=useState([]);
    function getcourse () {
        if(category === "All")
        {
            let allCourses=[];
        Object.values(courses).forEach(array => {
            
              array.forEach(coursedata => {
                allCourses.push(coursedata);
              });
           
          }); 
        return allCourses;
        }
        else
        {
            //main sirf specific category data array karunga
            return courses[category];
        }
        
       
    }
   return (
     <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
        getcourse().map((course)=>{
          return  <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>
        })
    }
     </div>
   )
 }
 export default Cards
 