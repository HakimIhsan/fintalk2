const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Replace 'YOUR_OPENAI_API_KEY' with your actual OpenAI API key
const openaiApiKey = 'YOUR_OPENAI_API_KEY';

app.use(bodyParser.json());

app.post('/getChatResponse', async (req, res) => {
    const { userMessage, tableData } = req.body;

    // Include table data in the prompt
    const tablePrompt = tableData.map((row) => Object.values(row).join(' ')).join(' ');

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/engines/gpt-3.5-turbo/completions',
            {
                prompt: `${userMessage}\n${tablePrompt}`,
                max_tokens: 150,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${openaiApiKey}`,
                },
            }
        );

        // Send the AI response back to the client
        res.json({ aiMessage: response.data.choices[0].text.trim() });
    } catch (error) {
        console.error('Error communicating with GPT-3.5-turbo API', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
