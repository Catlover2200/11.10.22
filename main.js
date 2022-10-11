const ctx = document.querySelector('#chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['USA', 'CANADA', 'FRANCE', 'BRAZIL', 'GERMANY'],
        datasets: [{
            data: [523.06, 303.96, 195.10, 190.10, 156.48],
        }]
    }
});
jgjh