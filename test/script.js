document.addEventListener('DOMContentLoaded', function() {
    fetch('students.json')
    .then(response => response.json())
    .then(data => {
        const studentList = document.getElementById('student-list');

        data.forEach(student => {
            const listItem = document.createElement('li');
            listItem.textContent = `${student.name} - Age: ${student.age}, Major: ${student.major}`;
            studentList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));
});
