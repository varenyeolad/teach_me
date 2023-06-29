import './App.css'
import { useEffect } from 'react';
import LearningPage from './pages/LearningPage/LearningPage';
import originalScale from 'forced-original-scale';


function App() {

  useEffect(() => {
    originalScale('App')
  }, [])
  
  
  return (
    <>
    <div id='App' style={{minWidth: '1920px'}}>
    <LearningPage/>
    </div>
    </>
  )
}

export default App
