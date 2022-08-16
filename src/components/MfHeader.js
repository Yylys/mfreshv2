import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
export default function MfHeader() {
  // 状态变量-当前的登录的用户名
  let [userName,setUserName]=useState("")
  // 元素引用_搜索关键字输入框
  let kwInput= useRef();
  function submitSearch(){
    let kw=kwInput.current.value
    console.log('开始搜索:',kw)
  }

  return (
    <div className='header_box'>
      <header className="header container">
  <h1 className="logo">
  {/* <a href="index.html" className="link"></a> */}
  <Link to="/" className="link"></Link>
  </h1>
  <div className="h_con">
    <ul className="clearfloat">
      <li className="phone">4000-585-116</li>
      <li><a href="#">中文</a></li>
      <li><em>|</em></li>
      <li><a href="#">English</a></li>
      <li><a href="#" className="weixin"></a></li>
      <li><a href="#" className="weibo"></a></li>
      {
        userName==='' ? (<>
      <li><Link to="/login" className="h_login">登录</Link></li>
      <li><em>|</em></li>
      <li><Link to="/register" className="h_register">注册</Link></li>
        </>) 
        :
        (<>
      <li className="top_user"><a href="#">欢迎回来:{userName}</a></li>
      <li className="top_quit"><a href="#">退出</a></li>
        </>)
      }
    </ul>
    <div className="search clearfloat">
      <button type="button" onClick={submitSearch}></button>
      <input defaultValue='abc' ref={kwInput} type="text" />
    </div>
  </div>
</header>
{/*nav*/}
<nav className="navbar">
  <div className="container">
    <div className="nav">
      <ul>
        <li><Link to="/l"><span className="icon_home"></span>首页</Link></li>
        <li><Link to="/about">关于净美仕</Link></li>
        <li><Link to="/news">公司动态</Link></li>
        <li className="nav_pd">
          <Link to="/product">产品中心<span className="icon_pd"></span></Link>
          <div className="pd_dropdown">
            <Link to="/product?type=1">净美仕净化器</Link>
            <Link to="/product?type=2">净美仕滤网</Link>
          </div>
        </li>
        <li><Link to="/contact">联系我们</Link></li>
      </ul>
    </div>
    <div className="s_cart">
      <a href="cart.html">
        <span className="icon_cart"></span>购物车(<strong id="cart_sum">0</strong>)<span className="icon_sj"></span>
      </a>
      <div className="cart_dropdown">
        {/*<h3>您的购物车为空~</h3>*/}
        <ul>
          {/*<li>*/}
            {/*<a href=""><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>*/}
            {/*<div>*/}
              {/*<span>-</span><input type="text" value="2"/><span>+</span>*/}
            {/*</div>*/}
            {/*<strong>¥1599.00</strong>*/}
            {/*<em></em>*/}
          {/*</li>*/}
          {/*<li>*/}
            {/*<a href=""><img src="product-imgs/jhq-m8088a.jpg" alt=""/></a>*/}
            {/*<div>*/}
              {/*<span>-</span><input type="text" value="2"/><span>+</span>*/}
            {/*</div>*/}
            {/*<strong>¥1599.00</strong>*/}
            {/*<em></em>*/}
          {/*</li>*/}
        </ul>
        <div className="cd_js clearfloat">
          <span>共计：<strong>0.00</strong></span>
          <a href="#">结算</a>
        </div>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
