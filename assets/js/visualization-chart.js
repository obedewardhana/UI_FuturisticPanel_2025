(function ($) {
  "use strict";
  window.loadChart = function loadChart() {
    var ctx = document.getElementById("chart1").getContext("2d");
    var chart1 = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["2025", "2024", "2023", "2022", "2021", "2020"],
        datasets: [
          {
            label: "Jumlah",
            data: [12, 19, 3, 23, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontFamily: "Maison Neue Mono",
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontFamily: "Maison Neue Mono",
              },
            },
          ],
        },
      },
    });

    var ct2 = document.getElementById("chart2").getContext("2d");
    var chart2 = new Chart(ct2, {
      type: "line",
      data: {
        labels: ["2025", "2024", "2023", "2022", "2021", "2020"],
        datasets: [
          {
            label: "Jumlah",
            data: [12, 19, 3, 23, 2, 3],
            borderColor: ["rgba(255,99,132,1)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontFamily: "Maison Neue Mono",
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontFamily: "Maison Neue Mono",
              },
            },
          ],
        },
      },
    });

    var ct3 = document.getElementById("chart3").getContext("2d");
    var chart3 = new Chart(ct3, {
      type: "pie",
      data: {
        labels: ["Male", "Female"],
        datasets: [
          {
            label: "Jumlah",
            data: [12, 19],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(255, 255, 255, 0.2)",
            ],
            borderColor: ["rgba(255,99,132,1)", "rgba(255, 255, 255,1)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        legend: {
          position: "top",
          fontFamily: "Maison Neue Mono",
        },
      },
    });

    var ct4 = document.getElementById("chart4").getContext("2d");
    var chart4 = new Chart(ct4, {
      type: "bar",
      data: {
        labels: ["2025", "2024", "2023", "2022", "2021", "2020"],
        datasets: [
          {
            label: "Jumlah",
            data: [5, 20, 11, 8, 12, 43],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontFamily: "Maison Neue Mono",
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontFamily: "Maison Neue Mono",
              },
            },
          ],
        },
      },
    });

    var ct5 = document.getElementById("chart5").getContext("2d");
    var chart5 = new Chart(ct5, {
      type: "line",
      data: {
        labels: ["2025", "2024", "2023", "2022", "2021", "2020"],
        datasets: [
          {
            label: "Jumlah",
            data: [7, 7, 4, 16, 22, 13],
            borderColor: ["rgba(255,99,132,1)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontFamily: "Maison Neue Mono",
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontFamily: "Maison Neue Mono",
              },
            },
          ],
        },
      },
    });

    var ct6 = document.getElementById("chart6").getContext("2d");
    var chart6 = new Chart(ct6, {
      type: "line",
      data: {
        labels: ["2025", "2024", "2023", "2022", "2021", "2020"],
        datasets: [
          {
            label: "Jumlah",
            data: [22, 2, 13, 23, 12, 3],
            borderColor: ["rgba(255,99,132,1)"],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontFamily: "Maison Neue Mono",
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontFamily: "Maison Neue Mono",
              },
            },
          ],
        },
      },
    });

    var ct7 = document.getElementById("chart7").getContext("2d");
    var chart7 = new Chart(ct7, {
      type: "pie",
      data: {
        labels: ["SD", "SMP","SMA/SMK","Mahasiswa"],
        datasets: [
          {
            label: "Jumlah",
            data: [12, 19],
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)"
              ],
              borderColor: [
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)"
              ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        legend: {
          position: "top",
          fontFamily: "Maison Neue Mono",
        },
      },
    });

    var ct8 = document.getElementById("chart8").getContext("2d");
    var chart8 = new Chart(ct8, {
      type: "bar",
      data: {
        labels: ["2025", "2024", "2023", "2022", "2021", "2020"],
        datasets: [
          {
            label: "Jumlah",
            data: [15, 20, 25, 38, 35, 43],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                fontFamily: "Maison Neue Mono",
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                fontFamily: "Maison Neue Mono",
              },
            },
          ],
        },
      },
    });
  };
})(jQuery);
