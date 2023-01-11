import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Layout from './pages/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <Layout>
        <App/>
    </Layout>
</React.StrictMode>,);
