const ctx = document.querySelector('#chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['USA', 'CANADA', 'FRANCE', 'BRAZIL', 'GERMANY'],
        datasets: [{
        label: 'Rock',
            data: [157, 107, 65, 81, 62],
            backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
            ],

        },
            {
                label: 'Latin',
                data: [91, 60, 26, 53, 18],
                backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
             ]
            },
            {
                label: 'Metal',
                data: [64, 40, 20, 15, 25],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.4)',
                ]
            },
            {
                label: 'Alternative & Punk',
                data: [50, 36, 31, 7, 13],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ]
            }
        ],

    },
    options: {
        scales: {
            y: {
                title: {
                    display: true,
                    text: "USD $"
                }
            }
        }
    }

});

