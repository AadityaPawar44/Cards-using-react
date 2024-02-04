import React from 'react'
import { IconName } from "react-icons/fa";
import {FcLike,FcLikePlaceholder}  from "react-icons/fc"; 
import { toast } from 'react-toastify';
import {useState} from  'react';
 
export const Card = (props) => {
    let course=props.course;
    let likedCourses=props.likedCourses;
    let setLikedCourses=props.setLikedCourses;
    
    function ClickHandler()
    {
        if(likedCourses.includes(course.id))
        {
            //already liked
            setLikedCourses((prev)=>prev.filter((cid)=>(cid !==course.id)));
            toast.warning("Like removed");
        }
        else
        {
            //not already liked
            //insert karna hain liked coure 
            if(likedCourses.length===0){
                setLikedCourses([course.id]);
            }
            else 
            {
                setLikedCourses((prev)=>[...prev,course.id]);
            }

            toast.success("Liked Successfully");
        }
          
    }
  return (
    <div className='w-[300px] bg-slate-900 bg-opacity-80 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={course.image.url}></img>
            <div> 
                <button className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center' onClick={ClickHandler}>
                    {
                        !likedCourses.includes(course.id)? (<FcLikePlaceholder fontSize="1.75rem"/>):(<FcLike fontSize="1.75rem"/>)
                    }
                </button>
            </div>
        </div>
           
            <div className='p-4 '>
                <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>
                    {course.description.length>100 ?(course.description.substr(100))+'...':(course.description)
                } </p>
            </div>
        
    </div>
  )
}
