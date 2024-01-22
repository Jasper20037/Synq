const ctx = document.getElementById("lineChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["09:00", "10:30", "12:00", "12:30", "15:00", "16:30"],
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

