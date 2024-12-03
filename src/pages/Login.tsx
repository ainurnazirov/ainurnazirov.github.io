import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const navigate = useNavigate();

    const handleLoginSuccess = (response: any) => {
        console.log('Login Success:', response);
        // Сохраняем токен или информацию о пользователе в локальное хранилище
        localStorage.setItem('google_token', response.credential);
        navigate('/todos');
    };

    const handleLoginFailure = () => {
        console.log('Login Failed');
    };

    return (
        <div>
            <h2>Login with Google</h2>
            <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginFailure} />
        </div>
    );
};

export default Login;