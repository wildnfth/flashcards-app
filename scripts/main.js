document.addEventListener('DOMContentLoaded', function () {
    const kanjiClass = document.querySelector('.kanji');
    const kanaClass = document.querySelector('.kana');
    const exampleJpClass = document.querySelector('.example-jp');

    let jsonData;
    
    fetch('kotoba.json')
    .then(response => response.json())
    .then(data => {
            jsonData = data;
            updateFlashcard();
        })
        .catch(error => console.error('Error fetching JSON:', error));
    

    function updateFlashcard() {
      const currentFlashcard = jsonData[0];
      kanjiClass.textContent = currentFlashcard.kanji;
      kanaClass.textContent = currentFlashcard.kana;
      exampleJpClass.textContent = currentFlashcard['example-jp'];
    }

})


// document.addEventListener('DOMContentLoaded', function () {
//     const card = document.getElementById('card');
//     const kanjiElement = document.querySelector('.kanji');
//     const kanaElement = document.querySelector('.kana');
//     const exampleJpElement = document.querySelector('.example-jp');
//     const showAnswerButton = document.querySelector('.show-answer');
//     const nextButton = document.querySelector('.next');
//     const previousButton = document.querySelector('.previous');
  
//     let currentCardIndex = 0;
//     let flashcardsData;
  
//     // Fetch flashcards data from JSON file
//     fetch('kotoba.json')
//       .then(response => response.json())
//       .then(data => {
//         flashcardsData = data;
//         updateFlashcard();
//       })
//       .catch(error => console.error('Error fetching JSON:', error));
  
//     // Function to update flashcard with current data
//     function updateFlashcard() {
//       const currentFlashcard = flashcardsData[currentCardIndex];
//       kanjiElement.textContent = currentFlashcard.kanji;
//       kanaElement.textContent = currentFlashcard.kana;
//       exampleJpElement.textContent = currentFlashcard['example-jp'];
//     }
  
//     // Event listener for show answer button
//     showAnswerButton.addEventListener('click', function () {
//       const currentFlashcard = flashcardsData[currentCardIndex];
//       const backSideElement = document.getElementById('back-side');
//       backSideElement.textContent = currentFlashcard['example-en'];
//       card.classList.add('flipped');
//     });
  
//     // Event listener for next button
//     nextButton.addEventListener('click', function () {
//       currentCardIndex++;
//       if (currentCardIndex >= flashcardsData.length) {
//         currentCardIndex = 0;
//       }
//       updateFlashcard();
//       card.classList.remove('flipped');
//     });
  
//     // Event listener for previous button
//     previousButton.addEventListener('click', function () {
//       currentCardIndex--;
//       if (currentCardIndex < 0) {
//         currentCardIndex = flashcardsData.length - 1;
//       }
//       updateFlashcard();
//       card.classList.remove('flipped');
//     });
//   });
  