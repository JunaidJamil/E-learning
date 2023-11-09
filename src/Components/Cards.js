import React from 'react'
import { FaGlobe ,FaBookOpen ,FaHome} from 'react-icons/fa'
import { FaGraduationCap } from "react-icons/fa6";
import "./cssCard/card.css"


 const Cards = () => {

 const Card = [
    {
      Icon: <FaGraduationCap  size={70}   /> ,
      title: "Skilled Instructor",
      Description : "We have Best Instructor with great skill and great knowledge they will make your child great ",   
    },
    {
      Icon: <FaGlobe size={70}/> ,
      title: "Teacher",
      Description : "We have Best Teacher with great skill and great knowledge they will make your child great ",   
    },
    {
      Icon: <FaBookOpen size={70} /> ,
      title: "World  Best ",
      Description : "We have Best World Best with great skill and great knowledge they will make your child great ",   
    },
    {
      Icon: <FaHome size={70} /> ,
      title: "World  Best ",
      Description : "We have Best World Best with great skill and great knowledge they will make your child great ",   
    }
]
  return (  
    <div className=' flex justify-center gap-5 flex-wrap text-center'>
  
    {
      Card.map((item)=>{
          return(
            
            <div  className=' align-middle rounded-lg w-100 border-2  md:w-auto maindiv text-center'>
      
      <div className=' text-center littlediv'>
       
          <div className='flex justify-center align-middle icon my-2'> {item.Icon } </div>
        <h1 className=' font-mono text-xl my-2 '>{item.title}</h1>
        <div className='text-center desmain'><p className='font-small  text-center des'>{item.Description}</p></div>
      </div>
    </div>
             

           )
      })
    } 
     </div>
  )
}

export default Cards