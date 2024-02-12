//Checks for submit button click
document.getElementById('chatForm').addEventListener('submit', async function (event) {
    //prevents
    event.preventDefault();

    //set 
    const userInput = document.getElementById('userInput').value;

    const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userInput })
    });

    const data = await response.json();
    document.getElementById('chatInput').innerText = 'You: ' + userInput;
    document.getElementById('chatOutput').innerText = 'HAL9000: ' + data.message;
});
