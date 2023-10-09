document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById("lineChart").getContext("2d");
  
//Power Data.
    const powerData = {
      label: "Power (hp)",
      data: [50, 200, 250,  350, 400,550,650,700],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 2,
      fill: true,
    };

//Torque Data.
    const torqueData = {
      label: "Torque (lb-ft)",
      data: [200, 300, 500,550, 500,400,300,150],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 2,
      fill: true,
    };

// Configuring Line Chart.
    const chartConfig = {
      type: "line",
      data: {
        labels: ["1000 RPM", "2000 RPM", "3000 RPM", "4000 RPM", "5000 RPM", "6000 RPM", "7000 RPM", "8000 RPM"],
        datasets: [powerData, torqueData],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  
    new Chart(ctx, chartConfig);
  });
  