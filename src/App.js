import React, { useState } from 'react'
import MfFooter from './components/MfFooter'

export default function  () {
  let[showChild,setShowChild]=useState(false)
  return (
    <div> 
    <h2>这里是父组件</h2>
    <button onClick={()=>setShowChild(!showChild)}>显示/影藏子组件</button>
    {showChild && (<MfFooter></MfFooter>)}
    </div>
  )
}
