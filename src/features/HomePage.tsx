import HeaderComponent from './HeaderComponent'
import TypingText from './TypingTextComponent';
export default function HomePage() {
  const divStyle = "rounded-xl border bg-blue-500 bg-tansparent mb-11 shadow-xl text-center w-full md:w-1/2 lg:w-2/3 text-white py-4 px-4  "
  return (
    <div className=" w-full  h-screen bg-gradient-to-bl from-blue-500  to-blue-600   overflow-auto ">



      <div className="  flex text-xl font-bold flex-row justify-between text-white px-3 py-1 bg-gradient-to-bl from-blue-500 to-blue-500">
        <h3 className="text-3xl ml-4 mt-3 animate-bounce" >☑️TaskFlow</h3>
       
        {/* <HeaderComponent Login="Login" className='rounded-xl border hover:border-2 hover:rounded-xm hover:shadow-xl  bg-transparent shadow-xl mr-11 text-center w-full p-2  ' /> */}
        <div className="relative inline-block mr-11">

          {/* Animated Gradient Border */}
          <div className="
        absolute inset-0 
        rounded-2xl 
        p-[3px]
        bg-gradient-to-r 
        from-pink-500 via-purple-500 via-blue-500 via-green-500 to-yellow-500
        bg-[length:300%_300%]
         animate-gradientMove
        shadow-[0_0_25px_rgba(0,0,0,0.3)]

      ">
            <div className="h-full w-full  rounded-2xl bg-white "></div>
          </div>

          {/* Button Content */}
          <button className="
        relative 
        text-black 
      px-5 py-2
        rounded-2xl 
        font-semibold 
        shadow-xl
   
      ">
            Login
          </button>

        </div>
        {/* <HeaderComponent Login="Login" className=' text-base rounded-xm border hover:bg-gradient-to-b 
                               from-blue-600 to-blue-400  border-blue-400  bg-transparent shadow-xm mr-11 text-center w-full   ' /> */}

      </div>
      <div className="  text-xl font-bold  justify-between text-white pt-7 pb-3 ">
        {/* <h2 className="px-4 text-xl md:text-2xl lg:text-3xl">Organize your Work , Simplify Your Life</h2> */}
        <TypingText
          text="Organize your Work , Simplify Your Life"
          speed={120}
          className="font-bold text-2xl  ml-4 mt-3 "
        />
      </div>
      <p className="text-xm font-semibold text-white px-4">The smart way to manage tasks, collaborate with teams, and <br></br>achieve your goals, Join </p>
      <span className="text-xm font-semibold text-white">thousands of products users today.</span>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-20 lg:ml-28  px-4">
        <div className={divStyle}>
          <p className=" text-4xl mb-2 ">📋</p>
          <h2 className="text-xl font-bold">Smart Organization</h2>
          <span>Organize tasks with projects,</span>
          <span>tables,and priorities,Everything in</span>
          <span> its perfect place.</span>
        </div>

        <div className={divStyle}>
          <p className=" text-4xl mb-2 ">🧑‍💼🧑‍💼</p>
          <h3 className="text-xl font-bold">Team Collaboration</h3>
          <span>Work Together seamlessly,Assign Tasks,Share Updates,and stay in sync.</span>
        </div>
        <div className={divStyle}>
          <p className=" text-4xl mb-2 ">📊</p>
          <h3 className="text-xl font-bold">Track Progress</h3>
          <span>Visualize your Productivity with </span>
          <span>with insights, reports, and completion analysis.</span>
        </div>

      </div>

    </div>
  );
}