import HeaderComponent from './HeaderComponent'
export default function HomePage() {
  return (
    <div className="relative w-full h-screen">
   
      <img 
        src="home.jpg" 
        alt="Background" 
        className="absolute " 
      />
      
      {/* Content Overlay */}
      <div className="relative ">
        <div className="  flex flex-col py-44 text-left ml-72  text-gray-500 text-xl md:text-2xl lg:text-3xl font-bold">
            <span className="block text-blue-800 overflow-hidden h-12 ml-44">
             <span className="inline-block animate-bounce mb-2">
                    GET STARTED
             </span>
         </span>
         <span className='mb-2 ml-44'>WITH YOUR</span>
         <span className='mb-2 ml-44'>TASK</span>
         <span className='mb-2 ml-44'>MANAGEMENT</span>
         <span className='mb-2 ml-44'>SYSTEM</span>

        <HeaderComponent 
          
            Login="Login"
            SignUp="SignUp"
            className=" inline-block text-gray-800 text-xl font-bold bg-transparent  hover:text-3xl transition-all " HomePage={''}        />
       
           </div>

      </div>
    </div>
  );
}