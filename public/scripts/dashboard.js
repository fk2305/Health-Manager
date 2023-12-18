// public/scripts/dashboard.js
document.addEventListener("DOMContentLoaded", function () {
    // Sample data for the chart
    var chartData = {
        labels: ["Exercise", "Calories Consumed", "Water Intake"],
        datasets: [{
            label: 'Daily Progress',
            data: [30, 1500, 8], // Sample values, you can replace them with real data
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(75, 192, 192, 0.7)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    };

    var chartOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    // Get the canvas element and initialize the chart
    var ctx = document.getElementById('healthChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: chartOptions
    });
});
