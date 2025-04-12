
// import Navbar from '../components/Navbar'
// import Hero from '../components/Hero'
// import Skills from '../components/Skills'
// import Projects from '../components/Projects'
// import Experience from '../components/Experience'
// import Contact from '../components/Contact'
// import React from 'react';

// const App = () => {
  
//   return (
//     <div className='overflow-x-hidden text-stone-300 antialiased'>
//       {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
//       </div> */}
     
//       <div className='container mx-auto px-8'>
//         <Navbar />
//         <Hero />
//         <Skills />
//        <Projects />
//        <Experience />
//        <Contact />
//       </div>
//     </div>
//   )
// }

// export default App
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import React, { useRef, useEffect } from 'react';

const App = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Ensure the video loops
      video.loop = true;

      // Play the video when the component mounts
      video.addEventListener('loadeddata', () => {
        video.play().catch(error => {
          // Handle potential autoplay errors (e.g., browser restrictions)
          console.error("Autoplay prevented:", error);
        });
      });
    }
  }, []);

  return (
    <div className='overflow-x-hidden text-stone-300 antialiased'>
      {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      </div> */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 z-[-2] min-w-full min-h-full object-cover"
        muted // Mute the video to allow autoplay in most browsers
        autoPlay // Attempt to autoplay the video
      >
        <source src="/video.mp4" type="video/mp4" />
        {/* You can add more <source> elements for different video formats (e.g., WebM, Ogg) for better browser compatibility */}
        Your browser does not support the video tag.
      </video>
      
      
      <div className='container mx-auto px-8'>
        <Navbar />
        <Hero />
        
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
    
  );
};

export default App;
