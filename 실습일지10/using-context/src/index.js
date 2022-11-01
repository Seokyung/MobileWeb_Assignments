import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ContextApp from './contextApp';
import ContextHook from './contextHook';
import PageColor from './pageColor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<ContextApp/>
    <ContextHook/>
    //<PageColor/>
);