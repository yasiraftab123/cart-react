import React from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from "react-toastify";
const Card=(props)=>{
    let course=props.course;
    let likedCourses=props.likedCourses;
    let setLikedCourses=props.setLikedCourses;


    function clickHandler(){
        if(likedCourses.includes(course.id)){
            //pehle se liked hai
            setLikedCourses((prev)=>(prev.filter((cid)=>(cid!=course.id))));
            toast.warning("Like removed");
        }
        else{
            console.log('1');
            //pehle se liked nhi h
            //insert into liked courses
            if(likedCourses.length===0){
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses((prev)=>[...prev,course.id]);
            }
            toast.success("Liked successfully");
        }

    }
    return(
        <div className="w-[300px] bg-opacity-80 bg-bgDark rounded-md overflow-hidden">
            <div className="relative">
                <img src={course.image.url}></img>

                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">
                    <button onClick={clickHandler}>
                    {
                        (likedCourses.includes(course.id)) ? (<FcLike fontSize="1.75rem"></FcLike>) : (<FcLikePlaceholder fontSize="1.75rem"></FcLikePlaceholder>)
                    }
                    
                    </button>
                </div>
            </div>
            
           
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="text-white mt-2">
                    {
                        course.description.length>150 ? (course.description.substr(0,150)+"...") : (course.description)
                    }
                </p>
            </div>
        </div>
    )
}
export default Card