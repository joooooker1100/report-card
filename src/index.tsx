import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateNewStudent from './CreateNewStudent';

export default function Kol() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<App />} />
          <Route path="CreateNewStudent" element={<CreateNewStudent />} />
          <Route path="ListStudents" element={<CreateNewStudent />} />
          <Route path="CreateNewLesson" element={<CreateNewStudent />} />
          <Route path="ListLessons" element={<CreateNewStudent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   <Kol />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
