import { useState, useEffect } from 'react';

// TypingText Component (Kept as is, as it's a great feature)
function TypingText({ text, speed = 100, className = "" }) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  // Changed animate-pulse to a subtle flash for a less jarring effect
  return <h1 className={className}>{displayText}<span className="inline-block w-1 h-8 ml-1 bg-white animate-flash">|</span></h1>;
}

// HeaderComponent (Kept as is for functionality)
function HeaderComponent({ Login, className }) {
  return (
    <a href="/Login" className={className}>
      {Login}
    </a>
  );
}

export default function HomePage() {
  return (
    // 1. **Main Container**: Darker, professional background
    <div className="min-h-screen bg-slate-900 relative overflow-hidden font-sans">

      {/* Custom Animation Keyframes for Professional Look */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes flash {
            20% { opacity: 0; }
        }
      `}</style>

      {/* 2. **Animated Background Elements (Subtler)** */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtler, cooler tones */}
        <div className="absolute top-[-50px] left-[-50px] w-96 h-96 bg-blue-300/20 rounded-full mix-blend-lighten filter blur-3xl opacity-10 animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-96 h-96 bg-cyan-400/20 rounded-full mix-blend-lighten filter blur-3xl opacity-10 animate-[pulse_6s_ease-in-out_infinite_reverse]"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* 3. **Header**: Clean, defined, and darker */}
        <header className="flex flex-row justify-between items-center px-4 md:px-8 py-4 bg-slate-900/90 backdrop-blur-md shadow-2xl sticky top-0 z-50">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer p-1 rounded-lg hover:bg-slate-800 transition-colors">
            <div className="w-10 h-10 bg-cyan-700 rounded-lg flex items-center justify-center text-xl text-white shadow-xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-9 0V3a2 2 0 012-2h3m-3 0h4m-4 0a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2H9z"></path></svg>
            </div>
            <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">TaskFlow<span className="text-cyan-500">.</span></span>
          </div>

          {/* Login Button (Cleaner, professional primary color) */}
          <div className="relative group">
            {/* Subtle border effect on hover only */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
            <HeaderComponent
              Login="Sign In"
              className="relative px-6 py-2 bg-cyan-600 text-white font-semibold rounded-xl hover:bg-cyan-700 transition-all duration-300 shadow-lg hover:shadow-yellow-200/20"
            />
          </div>
        </header>

        {/* 4. **Hero Section**: Clear, high-contrast typography */}
        <div className="text-center px-4 md:px-6 pt-20 pb-16">
        
          <TypingText
            text="Organize your Work, Simplify Your Life"
            speed={70}
            // Larger, bolder, white text for authority
            className="font-extrabold text-xl md:text-3xl lg:text-3xl mb-6 text-white  drop-shadow-xl"
          />

          <p className="text-xl md:text-2xl font-light text-slate-300 max-w-4xl mx-auto leading-relaxed mt-8">
            The smart, secure platform to manage tasks, collaborate with teams, and achieve your most ambitious goals.
            <br />
            Trusted by <span className="font-extrabold text-cyan-600">thousands</span> of industry leaders worldwide.
          </p>

          {/* <button className="mt-10 px-10 py-4 text-xl font-bold bg-blue-500 text-white rounded-full shadow-2xl hover:bg-blue-600 transition-colors duration-300 transform hover:scale-[1.02]">
            Start Your Free Trial
          </button> */}
          <div className="relative ml-9 inline-block md:mr-11 mt-9 px-10 py-4 text-xl font-bold text-white rounded-full shadow-2xl hover:bg-blue-600 transition-colors duration-300 transform hover:scale-[1.02]">

            {/* Animated Gradient Border */}
            <div className="
        absolute inset-0 
        rounded-2xl 
        p-[3px]
        bg-gradient-to-r 
        from-cyan-500 via-cyan-800 via-cyan-700 via-green-400 to-cyan-700
        bg-[length:300%_300%]
         animate-gradientMove
        shadow-[0_0_25px_rgba(0,0,0,0.3)]

      ">
              
            </div>

            {/* Button Content */}
            <HeaderComponent Login=" Start Your Free Trial" className="  

        relative 
       
    
      px-3 py-2
       
        font-bold 
       text-white
   
      " />


          </div>


        </div>

       
        {/* 5. **Feature Cards**: Uniform, cleaner design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-11 px-4 max-w-7xl mx-auto pb-24">

          {/* Base Card Style: White background, subtle shadow, blue accent border on hover */}
          {[
            { icon: '📋', title: 'Smart Organization', description: 'Leverage AI-powered categorization and custom views to keep everything structured and on track.' },
            { icon: '👥', title: 'Team Collaboration', description: 'Real-time syncing, comments, and role-based permissions ensure seamless, efficient team workflow.' },
            { icon: '📊', title: 'Track Progress', description: 'Generate executive reports, visualize team capacity, and monitor KPIs with integrated analytics.' }
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 text-left shadow-xl hover:shadow-2xl transition-all duration-300 border-b-4 border-transparent hover:border-cyan-600 hover:-translate-y-1"
            >
              <div className="text-5xl mb-4 text-blue-500">{feature.icon}</div>
              <h2 className="text-xl font-bold mb-3 text-slate-800">{feature.title}</h2>
              <p className="text-slate-600 leading-relaxed text-base">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}