"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Analytics() {
  const metrics = [
    {
      title: "Total Sales",
      value: "$120,000",
      change: "+12%",
      isPositive: true,
    },
    {
      title: "Active Users",
      value: "1,200",
      change: "-8%",
      isPositive: false,
    },
    {
      title: "Website Visits",
      value: "850",
      change: "+5%",
      isPositive: true,
    },
    {
      title: "New Sign-Ups",
      value: "360",
      change: "+18%",
      isPositive: true,
    },
  ];

  const trafficData = [
    { day: "Mon", visits: 200 },
    { day: "Tue", visits: 400 },
    { day: "Wed", visits: 350 },
    { day: "Thu", visits: 500 },
    { day: "Fri", visits: 600 },
    { day: "Sat", visits: 700 },
    { day: "Sun", visits: 650 },
  ];

  const salesData = [
    { month: "Jan", sales: 20000 },
    { month: "Feb", sales: 25000 },
    { month: "Mar", sales: 22000 },
    { month: "Apr", sales: 28000 },
    { month: "May", sales: 30000 },
    { month: "Jun", sales: 35000 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Analytics Dashboard
        </h1>

        {/* Overview Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics?.map((metric, index) => (
            <div
              key={index}
              className={`flex justify-between items-center bg-white rounded-lg shadow-md p-6 border-l-4 ${
                metric.isPositive ? "border-green-500" : "border-red-500"
              }`}
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-700">
                  {metric.title}
                </h3>
                <p className="text-lg text-gray-600 mt-2">{metric.value}</p>
              </div>
              <div className="text-right">
                <p
                  className={`text-sm mt-2 ${
                    metric.isPositive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {metric.change}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Line Chart: Website Traffic */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Website Traffic
          </h2>
          <div className="bg-gray-50 rounded-lg h-72 p-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="visits"
                  stroke="#3b82f6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart: Sales Performance */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Monthly Sales
          </h2>
          <div className="bg-gray-50 rounded-lg h-72 p-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#10b981" barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activities */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Recent Activities
          </h2>
          <ul className="space-y-4">
            <li className="flex items-center justify-between bg-white rounded-xl shadow-md p-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  User Registration
                </h3>
                <p className="text-sm text-gray-600">
                  New user signed up on 29-09-2025
                </p>
              </div>
              <p className="text-sm text-gray-500">+10 Users</p>
            </li>

            <li className="flex items-center justify-between bg-white rounded-xl shadow-md p-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Sales Increase
                </h3>
                <p className="text-sm text-gray-600">
                  Sales grew by 12% on 30-09-2025
                </p>
              </div>
              <p className="text-sm text-gray-500">+$15,000</p>
            </li>

            <li className="flex items-center justify-between bg-white rounded-xl shadow-md p-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Website Traffic Surge
                </h3>
                <p className="text-sm text-gray-600">
                  Website visits grew by 5% on 30-09-2025
                </p>
              </div>
              <p className="text-sm text-gray-500">+300 Visits</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
