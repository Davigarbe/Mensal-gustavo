document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('nameInput').value;
    fetch(`https://api.agify.io/?name=${name}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerText = `The predicted age for the name "${name}" is ${data.age} years.`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('result').innerText = 'Sorry, something went wrong. Please try again.';
        });
});
