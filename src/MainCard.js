import React, { useState } from 'react';
import './App.css';
import { FcPlus } from "react-icons/fc";
import {AiFillMinusCircle} from "react-icons/ai";
const Heading=(props)=>{

   return(
         <>
             <div className='list'>
                            <div className='listnumber'>{props.noteno}.</div>
                               <div className='listcontent'>{props.notecontent}</div>
                               <AiFillMinusCircle className='minuscircle' onClick={()=>{ props.onSelect(props.id) }}/>
                            </div> 

         </>
   );
}
const MainCard=()=>{
   const [newnote,setnewnote]=useState('');
   const [arr,setarr]=useState([]);

   // const [note,setnote]=useState('');
   // const [noteno,setnoteno]=useState('');
   const changenote=(e)=>{
      // console.log(e.target.name);
      setnewnote(e.target.value);
   }
   const removenote=(ele)=>{     
         console.log(ele);   
         setarr((prevalue)=>{
                return  prevalue.filter((value,index)=>{ return index !== ele})
         })

   }
   const addnote=()=>{
         // console.log(newnote);
         setarr([...arr,newnote]);
         console.log(arr);
         setnewnote('');
         };

  const fuction=(value,index)=>{
   return(
           <Heading key={index} id={index} notecontent={value} onSelect={removenote}/>
        )
      }
    const mapping=arr.map(fuction);
       
        
    return(
              <>
                 <div className='cardDiv'>
                    <p className='cardtitle'>Add List</p>
                     <div className='inputDiv'>
                                <input className='input' type='text' placeholder='Add an Item' name='notecontent' value={newnote} onChange={changenote}/>
                                <span className='addIcon' onClick={addnote}><FcPlus/></span>
                     </div>                
                      <div className='listdiv'>     
                            {mapping}      
                         </div>
                      
                  </div>
             </>
          );
}
export default MainCard;