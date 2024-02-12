//use npm to install express and openai packages

const express = require('express');
const app = express();
const OpenAI = require('openai');
const openai = new OpenAI({ apiKey:'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'}); //replace 'API Key' with your API key

app.use(express.json());
app.use(express.static('public'));

//api post
app.post('/api/chat', async (req, res) => {
    //log userInput
    const userInput = req.body.userInput;
    //response = API fetch
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "You are HAL 9000 from 2001: A Space Odyssey." },
            { role: "user", content: userInput }
        ],
    });
    //formats data
    res.json({ message: response.choices[0].message.content });
});

//node js local host 
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
