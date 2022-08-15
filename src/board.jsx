import React from 'react'
import { useState,useEffect } from 'react'
import Square from './Square'
import './board.css'


const Board = () => {

  let[state,setState]=useState(Array(9).fill(null));
  let[xturn,setXturn]=useState(true)

let cWin = ()=>{
 const winarreay=[ 
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
 ];
for(let win of winarreay){
  const[a,b,c]=win;
  //console.log(a);
  if(state[a]!==null && state[a]===state[b] && state[b]===state[c]){
    return state[a];

  }



}
return false;

}

const isWin=cWin();
// const winner=()=>{
//  let condition=isWin?`${isWin} is winner` :'no one is winner'
//  console.log(condition)
//  return condition
// }




useEffect(()=>{
  alert("WellCome:😉");
},[0]) 


  const handleClick = (index)=>{
  const cstate = {...state}
  cstate[index]=  xturn?"x":'0'

  setState(cstate)
  setXturn( !xturn )

 }
 let handleReset =()=>{
  setState(Array(9).fill(null))
 }
  return (
    <>
    <div className="heading"><h1>TIC TAC TOE</h1></div>
   <div className="btn">{isWin?<><button className='buttonC' onClick={handleReset}>Play Again</button></> :<><button className='buttonC' onClick={handleReset}>Reset</button></>}</div>
    {isWin?<><h1 style={{display:'flex',justifyContent:'center',marginTop:'3rem'}}>{isWin} won the game</h1></>: <>
     <div className='board'> 
        
      
      
       <div className="board-row">
      <Square onClick={()=> handleClick(0)} value={state[0]}/>
            <Square onClick={() => handleClick(1)} value={state[1]}/>
            <Square onClick={() => handleClick(2)} value={state[2]}/>

        </div>
        <div className="board-row">
        <Square onClick={() => handleClick(3)} value={state[3]}/>
        <Square onClick={() => handleClick(4)} value={state[4]}/>
        <Square onClick={() => handleClick(5)} value={state[5]}/>

        </div>
        <div className="board-row">
        <Square onClick={() => handleClick(6)} value={state[6]}/>
        <Square onClick={() => handleClick(7)} value={state[7]}/>
        <Square onClick={() => handleClick(8)} value={state[8]}/>

        </div>
        
    </div>
    </>
}

    </> 
  )
}

export default Board