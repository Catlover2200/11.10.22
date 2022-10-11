const ctx = document.querySelector('#chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['America', 'Canada', 'Frankrig', 'Brazilien', 'Tyskland'],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3],
        }]
    }
});
