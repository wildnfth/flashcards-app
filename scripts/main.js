

fetch('../resources/kotoba.json')
    .then(response => response.json())
    .then(data => {
            const cards = document.querySelectorAll('.card');

            // Display data in HTML elements
        cards.forEach((card, index) => {
            card.querySelector('.kanji').textContent = data[index].kanji;
            card.querySelector('.kana').textContent = data[index].kana;
            card.querySelector('.example-jp').textContent = data[index]['example-jp'];
        })
    })
    .catch(error => console.error('Error fetching JSON:', error));