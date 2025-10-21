import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", tasks: 12 },
  { day: "Tue", tasks: 6 },
  { day: "Wed", tasks: 14 },
  { day: "Thu", tasks: 18 },
  { day: "Fri", tasks: 15 },
  { day: "Sat", tasks: 16 },
];

const TaskCompletionChart = () => {
  return (
    <div
      // style={{
      //   backgroundColor:"white",
      //   borderRadius: "12px",
      //   boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      //   padding: "15px",
      //   width: "380px",
      //   height: "290px",
      // }}
      className="bg-white-500 rounded-xl mr-11 shadow-xl p-10 w-[130%]  h-[100%] ml-11 md:ml-44 md:p-2 md:w-[90%] md:h-[80%] md:mt-11 "

    >
      <h3 className="text-2xl font-bold md:text-2xl">
        Task Completion Trend
      </h3>

      <ResponsiveContainer width="100%" height="80%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" tick={{ fontSize: 20 }} />
          <YAxis hide />
          <Tooltip />
          <Bar
            dataKey="tasks"
            fill="#5d7cff"
            radius={[8, 8, 0, 0]}
            barSize={25}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TaskCompletionChart;
