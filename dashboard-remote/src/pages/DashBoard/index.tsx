import React, { FC, useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'
import { H1 } from 'syf-component-library/ui/typography'
import { buildLineChart, buildBarChart } from './helpers'

const DashBoard: FC = () => {
  const lineCanvasRef = useRef()
  const barCanvasRef = useRef()

  useEffect(() => {
    if (lineCanvasRef?.current) {
      buildLineChart(lineCanvasRef.current)
    }
    if (barCanvasRef?.current) {
      buildBarChart(barCanvasRef.current)
    }
  }, [])

  return (
    <div>
      <canvas id="line-chart" ref={lineCanvasRef}></canvas>
      <canvas id="bar-chart" ref={barCanvasRef}></canvas>
    </div>
  )
}
export default DashBoard
