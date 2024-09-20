import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Text,
} from "recharts";

// PieChart 用のサンプルデータ
const pieData01 = [
  { categoryName: "Category A", value: 400 },
  { categoryName: "Category B", value: 300 },
  { categoryName: "Category C", value: 300 },
  { categoryName: "Category D", value: 200 },
];

const pieData02 = [
  { typeName: "A1", value: 100 },
  { typeName: "A2", value: 300 },
  { typeName: "B1", value: 100 },
  { typeName: "B2", value: 80 },
  { typeName: "B3", value: 40 },
  { typeName: "B4", value: 30 },
  { typeName: "B5", value: 50 },
  { typeName: "C1", value: 100 },
  { typeName: "C2", value: 200 },
  { typeName: "D1", value: 150 },
  { typeName: "D2", value: 50 },
];

//LineChart 用のサンプルデータ
const data = [
  {
    day: "MON",
    sales: 3000,
    customers: 1000,
  },
  {
    day: "TUE",
    sales: 6000,
    customers: 2000,
  },
  {
    day: "WED",
    sales: 3500,
    customers: 1500,
  },
  {
    day: "THU",
    sales: 4500,
    customers: 2000,
  },
  {
    day: "FRI",
    sales: 6000,
    customers: 1000,
  },
  {
    day: "SAT",
    sales: 3500,
    customers: 2000,
  },
  {
    day: "SUN",
    sales: 7000,
    customers: 2500,
  },
];

//AreaChart 用のサンプルデータ
const salesData = [
  {
    day: "MON",
    sales: 3000,
    customers: 1000,
  },
  {
    day: "TUE",
    sales: 6000,
    customers: 2000,
  },
  {
    day: "WED",
    sales: 3500,
    customers: 1500,
  },
  {
    day: "THU",
    sales: 4500,
    customers: 2000,
  },
  {
    day: "FRI",
    sales: 6000,
    customers: 1000,
  },
  {
    day: "SAT",
    sales: 3500,
    customers: 2000,
  },
  {
    day: "SUN",
    sales: 7000,
    customers: 2500,
  },
];

const rangeData = [
  {
    day: "01-01",
    temperature: [-1, 9],
  },
  {
    day: "01-02",
    temperature: [2, 10],
  },
  {
    day: "01-03",
    temperature: [3, 12],
  },
  {
    day: "01-04",
    temperature: [4, 15],
  },
  {
    day: "01-05",
    temperature: [10, 17],
  },
  {
    day: "01-06",
    temperature: [5, 15],
  },
  {
    day: "01-07",
    temperature: [3, 11],
  },
  {
    day: "01-08",
    temperature: [0, 7],
  },
  {
    day: "01-09",
    temperature: [-2, 5],
  },
];

const RADIAN = Math.PI / 180;
// 円グラフの内側ラベルをカスタマイズする関数
const renderCustomizedInnerLabel: React.FunctionComponent<{
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
  categoryName: string;
}> = ({ cx, cy, midAngle, innerRadius, outerRadius, categoryName }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN) - 30;
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="central"
      dominantBaseline="central"
    >
      {`${categoryName}`}
    </text>
  );
};

// 円グラフの外側ラベルをカスタマイズする関数
const renderCustomizedOuterLabel: React.FunctionComponent<{
  cx: number;
  cy: number;
  x: number;
  y: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
  typeName: string;
  value: number;
}> = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  typeName,
  value,
  x,
  y,
}) => {
  const textAnchor = x > cx ? "start" : "end";
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const nameX = cx + radius * Math.cos(-midAngle * RADIAN);
  const nameY = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <>
      <Text
        x={nameX}
        y={nameY}
        fill="white"
        // テキストの水平位置を設定
        textAnchor="middle"
        // テキストの垂直位置を設定
        dominantBaseline="middle"
      >
        {`${typeName}`}
      </Text>
      <Text
        // X、Y 座標を微調整
        x={x - 2}
        y={y - 10}
        // テキストの水平位置を設定
        textAnchor={textAnchor}
        // テキストの垂直位置を設定
        dominantBaseline="hanging"
        fill="#82ca9d"
      >
        {value}
      </Text>
    </>
  );
};

export default function Recharts() {
  return (
    <div>
      <LineChart
        width={500}
        height={350}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 30,
        }}
      >
        {/* チャートの背景グリッド表示 */}
        <CartesianGrid stroke="#e0e0e0" strokeDasharray="5 3" />

        {/* X 軸のカスタマイズ（ラベルの角度、位置、スタイル） */}
        <XAxis
          dataKey="day"
          angle={45}
          tick={(props) => (
            <text
              x={props.x} // x座標
              y={props.y + 10} // y座標
              textAnchor="start" // アンカーポイントの設定（"start" または "end" で右寄せのラベルに設定）
              fontSize={12} // フォントサイズ
              fill="#666" // フォントの色
              transform={`rotate(${45},${props.x},${props.y})`} // ラベルを回転
            >
              {props.payload.value}
            </text>
          )}
        />

        {/* Y 軸のカスタマイズ（ラベルの位置、スタイル） */}
        <YAxis
          tick={({ x, y, payload }) => (
            <text
              x={x}
              y={y}
              textAnchor="end" // アンカーポイントの設定（"end" で右寄せのラベルに設定）
              fontSize={12} //フォントサイズ
              fill="#666" //フォントの色
            >
              {payload.value}
            </text>
          )}
        />

        {/* ホバー時の情報表示用のツールチップ */}
        <Tooltip />

        {/* チャートの凡例表示 */}
        <Legend verticalAlign="top" height={36} />

        {/* 'sales' データ用のライン */}
        <Line
          type="monotone" // ラインのタイプ（"monotone" は単調増加のライン）
          dataKey="sales" // 使用するデータのキー
          stroke="#8884d8" // ラインの色
          activeDot={{ r: 8 }} // ハイライト表示のドットの設定
          name="sales" // 凡例に表示される名前
        />

        {/* 'customers' データ用のライン */}
        <Line
          type="monotone" // ラインのタイプ（"monotone" は単調増加のライン）
          dataKey="customers" // 使用するデータのキー
          stroke="#82ca9d" // ラインの色
          activeDot={{ r: 8 }} // ハイライト表示のドットの設定
          name="customers" // 凡例に表示される名前
        />
      </LineChart>
      <AreaChart
        width={500}
        height={400}
        data={salesData}
        margin={{
          top: 10,
          right: 10,
          left: 0,
          bottom: 10,
        }}
      >
        {/* チャートの背景グリッド表示 */}
        <CartesianGrid stroke="#e0e0e0" strokeDasharray="5 3" />

        {/* X 軸のカスタマイズ（ラベルの角度、位置、スタイル） */}
        <XAxis
          dataKey="day"
          angle={45}
          tick={(props) => (
            <text
              x={props.x} // x座標
              y={props.y + 8} // y座標
              textAnchor="start" // アンカーポイントの設定（"start" または "end" で右寄せのラベルに設定）
              fontSize={12} // フォントサイズ
              fill="#666" // フォントの色
              transform={`rotate(${45},${props.x},${props.y})`} // ラベルを回転
            >
              {props.payload.value}
            </text>
          )}
        />

        {/* Y 軸のカスタマイズ（ラベルの位置、スタイル） */}
        <YAxis
          tick={({ x, y, payload }) => (
            <text
              x={x}
              y={y}
              textAnchor="end" // アンカーポイントの設定（"end" で右寄せのラベルに設定）
              fontSize={12} //フォントサイズ
              fill="#666" //フォントの色
            >
              {payload.value}
            </text>
          )}
        />

        {/* ホバー時の情報表示用のツールチップ */}
        <Tooltip />

        {/* チャートの凡例表示 */}
        <Legend verticalAlign="top" height={36} />

        {/* 'sales' データ用のエリア */}
        <Area type="monotone" dataKey="sales" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
      <AreaChart
        width={500}
        height={400}
        data={salesData}
        margin={{
          top: 10,
          right: 10,
          left: 0,
          bottom: 10,
        }}
      >
        {/* チャートの背景グリッド表示 */}
        <CartesianGrid stroke="#e0e0e0" strokeDasharray="5 3" />

        {/* X 軸のカスタマイズ（ラベルの角度、位置、スタイル） */}
        <XAxis
          dataKey="day"
          angle={45}
          tick={(props) => (
            <text
              x={props.x} // x座標
              y={props.y + 8} // y座標
              textAnchor="start" // アンカーポイントの設定（"start" または "end" で右寄せのラベルに設定）
              fontSize={12} // フォントサイズ
              fill="#666" // フォントの色
              transform={`rotate(${45},${props.x},${props.y})`} // ラベルを回転
            >
              {props.payload.value}
            </text>
          )}
        />

        {/* Y 軸のカスタマイズ（ラベルの位置、スタイル） */}
        <YAxis
          tick={({ x, y, payload }) => (
            <text
              x={x}
              y={y}
              textAnchor="end" // アンカーポイントの設定（"end" で右寄せのラベルに設定）
              fontSize={12} //フォントサイズ
              fill="#666" //フォントの色
            >
              {payload.value}
            </text>
          )}
        />

        {/* ホバー時の情報表示用のツールチップ */}
        <Tooltip />

        {/* チャートの凡例表示 */}
        <Legend verticalAlign="top" height={36} />

        {/* 'customers' データ用のエリア */}
        <Area
          type="monotone"
          dataKey="customers"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />

        {/* 'sales' データ用のエリア */}
        <Area
          type="monotone"
          dataKey="sales"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
      </AreaChart>
      <br />
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="customers" fill="#8884d8" />
        <Bar dataKey="sales" fill="#82ca9d" />
      </BarChart>
      <br />
      <br />
      <br />
      {/* 
        barGap:同じカテゴリ内の2つの棒の間隔
        barSize:各棒の幅または高さ
        reverseStackOrder:falseに設定されている場合、積み重ねられたアイテムは左から右にレンダリングされます。
      */}
      <BarChart
        width={730}
        height={250}
        data={data}
        barGap={8}
        barSize={10}
        reverseStackOrder={true}
      >
        {/* チャートの背景グリッド表示 */}
        <CartesianGrid stroke="#e0e0e0" strokeDasharray="5 3" />
        {/* X 軸のカスタマイズ（ラベルの角度、位置、スタイル） */}
        <XAxis
          dataKey="day"
          angle={45}
          tick={(props) => (
            <text
              x={props.x} // x座標
              y={props.y + 8} // y座標
              textAnchor="start" // アンカーポイントの設定（"start" または "end" で右寄せのラベルに設定）
              fontSize={12} // フォントサイズ
              fill="#666" // フォントの色
              transform={`rotate(${45},${props.x},${props.y})`} // ラベルを回転
            >
              {props.payload.value}
            </text>
          )}
        />

        {/* Y 軸のカスタマイズ（ラベルの位置、スタイル） */}
        <YAxis
          tick={({ x, y, payload }) => (
            <text
              x={x}
              y={y}
              textAnchor="end" // アンカーポイントの設定（"end" で右寄せのラベルに設定）
              fontSize={12} //フォントサイズ
              fill="#666" //フォントの色
            >
              {payload.value}
            </text>
          )}
        />
        {/* ホバー時の情報表示用のツールチップ */}
        <Tooltip />
        {/* チャートの凡例表示 */}
        <Legend verticalAlign="top" height={36} />
        {/* 'customers' データ用のエリア */}
        <Bar dataKey="customers" fill="#8884d8" />
        {/* 'sales' データ用のエリア */}
        <Bar dataKey="sales" fill="#82ca9d" />
      </BarChart>
      <br />
      <br />
      <BarChart
        width={730}
        height={250}
        data={rangeData}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        {/* X 軸のカスタマイズ（ラベルの角度、位置、スタイル） */}
        <XAxis
          dataKey="day"
          angle={45}
          tick={(props) => (
            <text
              x={props.x} // x座標
              y={props.y + 8} // y座標
              textAnchor="start" // アンカーポイントの設定（"start" または "end" で右寄せのラベルに設定）
              fontSize={12} // フォントサイズ
              fill="#666" // フォントの色
              transform={`rotate(${45},${props.x},${props.y})`} // ラベルを回転
            >
              {props.payload.value}
            </text>
          )}
        />
        {/* Y 軸のカスタマイズ（ラベルの位置、スタイル） */}
        <YAxis
          tick={({ x, y, payload }) => (
            <text
              x={x}
              y={y}
              textAnchor="end" // アンカーポイントの設定（"end" で右寄せのラベルに設定）
              fontSize={12} //フォントサイズ
              fill="#666" //フォントの色
            >
              {payload.value}
            </text>
          )}
        />
        <Tooltip />
        <Bar dataKey="temperature" fill="#8884d8" />
      </BarChart>
      <br />
      <br />
      <PieChart width={400} height={400}>
        <Pie
          data={pieData01}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
        />
        <Pie
          data={pieData02}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
      </PieChart>
      <br />
      <br />
      <PieChart width={600} height={600}>
        <Pie
          data={pieData01}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          label={renderCustomizedInnerLabel}
        />
        <Pie
          data={pieData02}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={130}
          outerRadius={180}
          fill="#82ca9d"
          label={renderCustomizedOuterLabel}
        />
      </PieChart>
    </div>
  );
}
