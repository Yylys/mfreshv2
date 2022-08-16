import React, { useEffect, useState } from 'react'

export default function MfFooter() {
  
  let [count,setCount]=useState(0)
  let [age,setAge]=useState(18)
// 函数组件声明周期方法
useEffect(function(){
  console.log('1-生命周期方法:组件挂载+更新')
})
useEffect(function(){
  console.log('2-生命周期方法:组件挂载+更新')
},[count]);
useEffect(function(){
  console.log('3-生命周期方法:组件挂载')
},[age])
useEffect(function(){
  return function(){
    console.log('4-生命周期方法:组件卸载')
  }
},[age])

  return (
    <div style={{border: '1px solid #aaa',margin:'20px'}}>
    <h3>这里是子组件</h3>
    <button onClick={()=>{setCount(count+1)}}>点击次数:{count}</button>
    <button onClick={()=>{setAge(age+1)}}>点击次数:{age}</button>
    </div>
  )
}
