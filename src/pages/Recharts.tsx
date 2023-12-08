import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

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

export default function Recharts() {
  return (
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
  );
}
