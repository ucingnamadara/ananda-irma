
import { useEffect } from 'react';
import './App.css'
import Home from './pages/home'

function App() {
  useEffect(() => {
    // 1. Define the observer logic
    const observerOptions = { threshold: 0.8 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          
          setTimeout(() => {
            el.classList.remove('opacity-0');
            
            // Determine direction (you can add your scroll listener logic here too)
            
            el.classList.add('animate-fade-slide-up');
            
            observer.unobserve(el);
          }, 150)
        }
      });
    }, observerOptions);

    // 2. Query elements AFTER React has finished rendering
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    // 3. Cleanup to prevent memory leaks
    return () => observer.disconnect();
  }, []); // Empty array means this runs once on mount
  return (
    <div className='max-w-125 w-full h-screen mx-auto text-center'>
      <Home/>
    </div>
  )
}

export default App
