
import { useState,useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import MainScreen from './screen/MainScreen';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import Biosection from './screen/Biosection';
import Projects from './screen/Projects';
import Contact from './screen/Contact';

const App = () => {

  const [isSmScreen, setIsSmScreen] = useState(window.matchMedia('(max-width: 800px)').matches);
  useEffect(() => {
    const handleResize = () => {
      setIsSmScreen(window.matchMedia('(max-width: 800px)').matches);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
 
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <header className='w-full flex justify-between items-center bg-[#0d47a1] px-8 py-4 drop-shadow-lg'>-m "poftfolio"
          <Link to="/">
            <h1 className="font-extrabold text-[#b3e5fc] md:text-[26px] text-[16px]">WHTECH <span className="md:text-[11px] text-[8px]">Empowering ideas through technology</span></h1>
          </Link>
          {isSmScreen ? (
            <Menu>
              <MenuHandler>
                <Button variant="filled">Menu</Button>
              </MenuHandler>
              <MenuList>
                <Link to="/"><MenuItem>Articles</MenuItem></Link>
                <Link to="/projects"><MenuItem>Projects</MenuItem></Link>
                <Link to="/about"><MenuItem>About</MenuItem></Link>
                <Link to="/contact"><MenuItem>Contact</MenuItem></Link>
              </MenuList>
            </Menu>) :
            (<div className = "flex flex-row gap-4 hover:text-[#f0f9ff]">
              <Link to="/"><h1 className="font-extrabold text-[#b3e5fc] md:text-[16px] text-[16px] hover:text-[#f0f9ff]">Articles</h1></Link>
              <Link to="/projects"><h1 className="font-extrabold text-[#b3e5fc] md:text-[16px] text-[16px] hover:text-[#f0f9ff]">Projects</h1></Link>
              <Link to="/about"><h1 className="font-extrabold text-[#b3e5fc] md:text-[16px] text-[16px] hover:text-[#f0f9ff]">About</h1></Link>
              <Link to="/contact"><h1 className="font-extrabold text-[#b3e5fc] md:text-[16px] text-[16px] hover:text-[#f0f9ff]">Contact</h1></Link>
              </div>
            )}

        </header>
        <main className='sm:p-8 px-8 py-8 w-full bg-[#1976d2] flex-grow'>
          <Routes>
            <Route path='/' element={<MainScreen />} />
            <Route path='/about' element={<Biosection />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter >
  )
}

export default App