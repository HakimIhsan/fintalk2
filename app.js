const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");
const messages = document.getElementById("chat-messages");
const apiKey = "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";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userMessage = input.value;
  input.value = "";

  messages.innerHTML += `<div class="message user-message">
    <img src="./icons/user.png" alt="user icon"> <span>${userMessage}</span>
  </div>`;

  // Extract information from the table for the chatbot prompt
  const tableRows = document.querySelectorAll("#table tr");
  const rowData = {};

  tableRows.forEach((row, rowIndex) => {
    const columns = row.querySelectorAll("td");

    columns.forEach((column, columnIndex) => {
      // Assuming the first row contains column headers and the first column contains row titles
      if (rowIndex === 0 && columnIndex !== 0) {
        const columnHeader = column.textContent.trim();
        rowData[columnHeader] = {};
      } else if (rowIndex !== 0 && columnIndex === 0) {
        const rowTitle = column.textContent.trim();
        rowData[rowTitle] = {};
      } else if (rowIndex !== 0 && columnIndex !== 0) {
        const columnHeader = tableRows[0].querySelectorAll("td")[columnIndex].textContent.trim();
        const rowTitle = tableRows[rowIndex].querySelectorAll("td")[0].textContent.trim();
        rowData[rowTitle][columnHeader] = column.textContent.trim();
      }
    });
  });

  // Use the table data as part of the prompt
  const prompt = `${userMessage} ${JSON.stringify(rowData)}`;

  // Use axios library to make a POST request to the OpenAI API
  const response = await axios.post(
    "https://api.openai.com/v1/completions",
    {
      prompt,
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );

  const chatbotResponse = response.data.choices[0].text;

  messages.innerHTML += `<div class="message bot-message">
    <img src="./icons/chatbot.png" alt="bot icon"> <span>${chatbotResponse}</span>
  </div>`;
});
