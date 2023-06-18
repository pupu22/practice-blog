import React from "react";
import {Link} from 'react-router-dom'
const Register = () =>{
    return (
        <div className="auth">
            <h1>注册</h1>
            <form>
                <input required type="text" placeholder="username"/>
                <input required type="email" placeholder="email"/>
                <input required type="password" placeholder="password"/>
                <button>注册</button>
                <p>错误信息</p>
                <span>已有账号，<Link to="/login">点击登录</Link></span>
            </form>
        </div>
    )
}
export default Register