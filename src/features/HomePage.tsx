import HeaderComponent from './HeaderComponent'
export default function HomePage() {
  const divStyle = "rounded-xl border bg-blue-500 bg-tansparent shadow-xl text-center w-full md:w-1/2 lg:w-2/3 text-white py-9 px-2"
  return (
    <div className=" w-full h-screen bg-gradient-to-bl from-blue-500  to-blue-600   fixed">



      <div className="  flex text-xl font-bold flex-row justify-between text-white px-9 py-4 bg-gradient-to-bl from-blue-500 to-blue-500">
        <h3 className="text-3xl " >☑️ TaskFlow</h3>
        <HeaderComponent Login="Login" className='rounded-xl border hover:border-2 hover:rounded-xm hover:shadow-xl  bg-transparent shadow-xl mr-11 text-center w-full p-2 px-11 ' />
      </div>
      <div className="  text-4xl font-bold  justify-between text-white pt-11 pb-3">
        <h2 className="">Organize your Work , Simplify Your Life</h2>
      </div>
      <p className="text-xm font-semibold text-white">The smart way to manage tasks, collaborate with teams, and <br></br>achieve your goals, Join </p>
      <span className="text-xm font-semibold text-white">thousands of products users today.</span>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-20 ml-44  ">
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