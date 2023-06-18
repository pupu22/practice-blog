import React from "react";
import {Link} from 'react-router-dom'
const Login = () =>{
    return (
        <div className="auth">
            <h1>登录</h1>
            <form>
                <input required type="text" placeholder="username"/>
                <input required type="password" placeholder="password"/>
                <button>登录</button>
                <p>错误信息</p>
                <span>没有账号，<Link to="/register">点击创建</Link></span>
            </form>
        </div>
    )
}
export default Login