import React, { useState } from 'react'
import Card from './Card'

const Cards = (props)=>{
    let courses=props.courses;
    const[likedCourses,setLikedCourses]=useState([]);
    let category=props.category;
    
    function getcourses(){
        if(category=="All"){
            let allcourses=[];
            Object.values(courses).forEach(array=>{
            array.forEach(courseData=>{
                allcourses.push(courseData);
            })
        })
        return allcourses;
        }
        else{
            return courses[category];
        }
        
    }
    console.log(courses);
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getcourses().map((course)=>(
                    <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
                ))
            }
        </div>
    )
}
export default Cards