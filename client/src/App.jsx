
import { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import MainScreen from './screen/MainScreen';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography
} from "@material-tailwind/react";
import Biosection from './screen/Biosection';
import Projects from './screen/Projects';


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
        <header className='w-full flex justify-between items-center bg-[#37474f] px-8 py-4 drop-shadow-lg'>
          <Link to="/">
            <h1 className="font-extrabold text-[#cfd8dc] text-[26px] ">WHTECH <span className="md:text-[11px] text-[9px]">Empowering ideas through technology</span></h1>
          </Link>
          {isSmScreen ? (
            <Menu >
              <MenuHandler>
                <Button variant="filled" className='bg-[#263238] '>Menu</Button>
              </MenuHandler>
              <MenuList>
                <Link to="/"><MenuItem>Home</MenuItem></Link>
                <Link to="/projects"><MenuItem>Previous Projects</MenuItem></Link>
                <Link to="/about"><MenuItem>About</MenuItem></Link>

              </MenuList>
            </Menu>) :
            (<div className="flex flex-row gap-4 hover:text-[#f0f9ff]">
              <Link to="/"><h1 className="font-extrabold text-[#cfd8dc] md:text-[16px] text-[16px] hover:text-[#f0f9ff]">Home</h1></Link>
              <Link to="/projects"><h1 className="font-extrabold text-[#cfd8dc] md:text-[16px] text-[16px] hover:text-[#f0f9ff]">Previous Projects</h1></Link>
              <Link to="/about"><h1 className="font-extrabold text-[#cfd8dc] md:text-[16px] text-[16px] hover:text-[#f0f9ff]">About</h1></Link>

            </div>
            )}

        </header>
        <main className='sm:p-8 px-8 py-8 w-full bg-gradient-to-t from-[#546e7a] to-[#78909c] flex-grow'>
          <Routes>
            <Route path='/' element={<MainScreen />} />
            <Route path='/about' element={<Biosection />} />
            <Route path='/projects' element={<Projects />} />

          </Routes>
        </main>
        <div className="w-full bg-[#546e7a] px-8 pb-8 text-center" >

          <Typography className="font-normal text-[#cfd8dc]">
            &copy; 2023 WHTECH
          </Typography>
          <Link to="/about">
            <Typography className="font-normal text-[#cfd8dc]">
              Contact Us
            </Typography>
          </Link>

        </div>
      </div>
    </BrowserRouter >
  )
}

export default App