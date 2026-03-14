import {  Route, Routes } from 'react-router-dom';
import './App.css'
import StudentLogin from './components/StudentLogin';
import Home from './pages/Home';
import Layout from './pages/Layout';
import StudentResult from './components/StudentResult';
import StudentACard from './components/StudentACard';

const App = () => {
  return (
    <>
       <Routes>
        <Route path='/' element={<StudentLogin />} />
        <Route path='/home' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='result' element={<StudentResult />} />
        <Route path='admitcard' element={<StudentACard />} />
        </Route>
       </Routes>
    </>
  );
};

export default App;