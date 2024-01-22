const ctx = document.getElementById("lineChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Monday", "tuesday", "Wednesday", "Thursday", "Friday", "Monday"],
    datasets: [
      {
        label: "Decibels",
        data: [64, 52, 73, 50, 52, 83],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const ctx2 = document.getElementById("barChart");

new Chart(ctx2, {
  type: "bar",
  data: {
    labels: [
      "09.00",
      "10.00",
      "11.00",
      "12.00",
      "13.00",
      "14.00",
      "15.00",
      "16.00",
      "17.00",
    ],
    datasets: [
      {
        label: "Decibels",
        data: [64, 52, 73, 50, 52, 83, 44, 65, 39],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const ctx3 = document.getElementById("scatter");

new Chart(ctx3, {
  type: "scatter",
  data: {
    labels: [
      "09.00",
      "10.00",
      "11.00",
      "12.00",
      "13.00",
      "14.00",
      "15.00",
      "16.00",
      "17.00",
    ],
    datasets: [
      {
        label: "Decibels",
        data: [64, 52, 73, 50, 52, 83, 44, 65, 39],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
