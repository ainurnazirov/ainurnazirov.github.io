import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './pages/TodoList';
import Login from './pages/Login';
import TodoDetail from './pages/TodoDetail';

const App: React.FC = () => {
    return (
        <GoogleOAuthProvider clientId="28899292055-evi2ta4d2sgo5vs0h8fh7pljort3b1kc.apps.googleusercontent.com">
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/todos" element={<TodoList />} />
                    <Route path="/todos/:id" element={<TodoDetail />} />
                </Routes>
            </Router>
        </GoogleOAuthProvider>
    );
};

export default App;
