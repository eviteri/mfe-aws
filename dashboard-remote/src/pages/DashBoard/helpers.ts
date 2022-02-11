import Chart from 'chart.js/auto'

export const buildLineChart = (element: HTMLCanvasElement) => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June']

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45]
      }
    ]
  }

  new Chart(element, {
    type: 'line',
    data: data,
    options: {}
  })
}

export const buildBarChart = (element: HTMLCanvasElement) => {
  const xValues = ['Italy', 'France', 'Spain', 'USA', 'Argentina']
  const yValues = [55, 49, 44, 24, 15]
  const barColors = ['red', 'green', 'blue', 'orange', 'brown']

  new Chart(element, {
    type: 'bar',
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues
        }
      ]
    }
  })
}
