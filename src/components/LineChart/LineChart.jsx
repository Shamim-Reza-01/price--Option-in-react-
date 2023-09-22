import {
  LineChart as LChart,Line, XAxis, YAxis,} from "recharts";

const LineChart = () => {
  const data = [
    { id: 1, name: "Person 1", math: 85, physics: 92, programming: 78 },
    { id: 2, name: "Person 2", math: 70, physics: 88, programming: 90 },
    { id: 3, name: "Person 3", math: 92, physics: 76, programming: 85 },
    { id: 4, name: "Person 4", math: 78, physics: 94, programming: 88 },
    { id: 5, name: "Person 5", math: 88, physics: 80, programming: 92 },
    { id: 6, name: "Person 6", math: 75, physics: 85, programming: 78 },
    { id: 7, name: "Person 7", math: 95, physics: 90, programming: 89 },
    { id: 8, name: "Person 8", math: 84, physics: 78, programming: 93 },
    { id: 9, name: "Person 9", math: 89, physics: 87, programming: 80 },
    { id: 10, name: "Person 10", math: 70, physics: 84, programming: 77 },
  ];

  return (
    <div>
      <LChart className="bg-slate-300" width={800} height={400} data={data}>
        <Line type="monotone" dataKey="math" stroke="green" />
        <Line type="monotone" dataKey="physics" stroke="blue" />
        <Line type="monotone" dataKey="programming" stroke="yellow" />
        <XAxis dataKey={'name'}></XAxis>
        <YAxis></YAxis>
      </LChart>
    </div>
  );
};

export default LineChart;
