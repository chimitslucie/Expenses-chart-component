// fetch("http://127.0.0.1:5500/main/js/data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     const days = [];
//     const amounts = [];

//     data.forEach(element => {
//         days.push(element.day)
//         amounts.push(element.amount)
//     });

//     const ctx = document.getElementById("myChart");

//     new Chart(ctx, {
//         type: "bar",
//         data: {
//             labels: days,
//             datasets: [
//                 {
//                     label: false,
//                     data: amounts,
//                     borderWidth: 1,
//                 },
//             ],
//         },
//         options: {
//             scales: {
//                 y: {
//                     beginAtZero: true,
//                 },
//             },
//         },
//     });
//   });

fetch("http://127.0.0.1:5500/main/js/data.json")
    .then((response) => response.json())
    .then((data) => {
        const days = [];
        const amounts = [];

        data.forEach((element) => {
            days.push(element.day);
            amounts.push(element.amount);
        });

        const ctx = document.getElementById("myChart");

        new Chart(ctx, {
            type: "bar",
            data: {
                labels: days,
                datasets: [
                    {
                        label: false,
                        data: amounts,
                        backgroundColor: "#EC755D",
                        borderRadius: "5",
                        hoverBackgroundColor: "#FF9B86",
                    },
                ],
            },
            options: {
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                        },
                        border: {
                            display: false,
                        },
                    },
                    y: {
                        grid: {
                            display: false,
                        },
                        ticks: {
                            display: false,
                        },
                        border: {
                            display: false,
                        },
                    },
                },
            },
        });
    });
