import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './firebase';
import App from "./App.jsx";
import AuthContext from "./contexts/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthContext>
        <App />
    </AuthContext>
)


