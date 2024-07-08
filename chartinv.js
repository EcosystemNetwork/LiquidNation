document.addEventListener('DOMContentLoaded', function () {
    // Pros and Cons Chart
    const prosConsCtx = document.getElementById('prosConsChart').getContext('2d');
    new Chart(prosConsCtx, {
        type: 'pie',
        data: {
            labels: ['Pros', 'Cons'],
            datasets: [{
                data: [3, 2], // Example data
                backgroundColor: ['#36A2EB', '#FF6384']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
            }
        }
    });

    // Value Proposition Chart
    const valuePropositionCtx = document.getElementById('valuePropositionChart').getContext('2d');
    new Chart(valuePropositionCtx, {
        type: 'doughnut',
        data: {
            labels: ['Bridge Fees', 'Cross Chain Order Book Data', 'Decentralized Clearing Houses', 'AI to manage Quantum NFFT data sets', 'Tokenization of Digital and RWA', 'Automated Market Maker (AMM)'],
            datasets: [{
                data: [10, 20, 30, 15, 10, 15], // Example data
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                },
            }
        }
    });

    // Cap Table Chart
    const capTableCtx = document.getElementById('capTableChart').getContext('2d');
    new Chart(capTableCtx, {
        type: 'bar',
        data: {
            labels: ['Eric Founder CEO', 'Chris Co-Founder CFO', 'Rene Co-Founder CTO', 'Bitcoin Startup Lab'],
            datasets: [{
                label: '% of Ownership',
                data: [70.5, 15, 10, 4.5], // Example data
                backgroundColor: ['#36A2EB']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: false,
                },
            }
        }
    });

    // Valuation Chart
    const valuationCtx = document.getElementById('valuationChart').getContext('2d');
    new Chart(valuationCtx, {
        type: 'line',
        data: {
            labels: ['Now', '1.5 Years', '2.5 Years'],
            datasets: [{
                label: 'Valuation',
                data: [800, 5000, 8000], // Example data in millions
                backgroundColor: '#36A2EB',
                borderColor: '#36A2EB',
                fill: false,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false,
                    suggestedMin: 0,
                    suggestedMax: 10000
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
            }
        }
    });
});