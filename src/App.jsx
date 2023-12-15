
import React, { useEffect, useState } from 'react'
import './App.css'
import Bar from './components/Navbar'
import { FadeLoader} from 'react-spinners';


function App() {
  const [lodaing, setlodaing] = useState(false)
  useEffect(() => {
    setlodaing(true)
    setTimeout(() => {
     setlodaing(false)
    }, 2000);
 
  }, [])
  return (
 
    <div className='body'>
 
    {
      lodaing ?  (
    <div className='Bounch-leder'>
        <FadeLoader className='loder' color={'#5492fd'}   loading={lodaing}   size={50}aria-label="Loading Spinner"  data-testid="loader" />
    </div>
      ) : (
        <Bar/>
      )
    }
    </div>
  )
}

export default App
