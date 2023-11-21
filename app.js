document.addEventListener('DOMContentLoaded', function () {
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    const $tableID = $('#table');

    // Sample data array
    let tableData = [
        { name: "Salary (Rp.)", Jan: 10000000, Feb: 10000000, Mar: 10000000, Apr: 10000000 },
        { name: "Biaya Kuliah", Jan: 1000000, Feb: 1000000, Mar: 1000000, Apr: 1000000 },
        { name: "Spent Jajan", Jan: 300000, Feb: 5000000, Mar: 0, Apr: 30000 },
        // Add more rows as needed
    ];

    // Function to populate the table with data
    function populateTable() {
        tableData.forEach((rowData) => {
            const $newRow = $('<tr></tr>');
            for (const key in rowData) {
                $newRow.append(`<td class="pt-3-half" contenteditable="true">${rowData[key]}</td>`);
            }
            $tableID.append($newRow);
        });
    }

    // Initial population
    populateTable();

    chatForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const userMessage = chatInput.value.trim();
        if (userMessage === '') return;

        // Add user message to chat window
        const userMessageElement = document.createElement('div');
        userMessageElement.classList.add('message-bubble', 'user-message');
        userMessageElement.innerText = userMessage;
        chatMessages.appendChild(userMessageElement);

        // Clear input
        chatInput.value = '';

        // Add loading message to chat window
        const loadingMessageElement = document.createElement('div');
        loadingMessageElement.classList.add('message-bubble', 'loading-message');
        loadingMessageElement.innerText = 'AI is processing...';
        chatMessages.appendChild(loadingMessageElement);

        // Make request to your server
        axios
            .post('/getChatResponse', {
                userMessage,
                tableData,
            })
            .then((response) => {
                // Remove the loading message
                loadingMessageElement.remove();

                const aiMessage = response.data.aiMessage;

                // Add AI message to chat window
                const aiMessageElement = document.createElement('div');
                aiMessageElement.classList.add('message-bubble', 'ai-message');
                aiMessageElement.innerText = aiMessage;
                chatMessages.appendChild(aiMessageElement);

                // Optionally, update the table data based on the AI response
                updateTableData(response.data.aiMessage);

                // Scroll to the bottom of the chat window
                chatMessages.scrollTop = chatMessages.scrollHeight;
            })
            .catch((error) => {
                // Remove the loading message
                loadingMessageElement.remove();

                let errorMessage = 'Oops! Something went wrong. Please try again.';

                if (error.response) {
                    // The request was made and the server responded with a status code
                    errorMessage = `Server responded with ${error.response.status} status. `;
                    if (error.response.data && error.response.data.error) {
                        errorMessage += `Error message: ${error.response.data.error}`;
                    }
                } else if (error.request) {
                    // The request was made but no response was received
                    errorMessage = 'No response received from the server.';
                } else {
                    // Something happened in setting up the request that triggered an Error
                    errorMessage = `Error setting up the request: ${error.message}`;
                }

                console.error('Error communicating with the server', error);
                
                // Add detailed error message to chat window
                const errorMessageElement = document.createElement('div');
                errorMessageElement.classList.add('message-bubble', 'error-message');
                errorMessageElement.innerText = errorMessage;
                chatMessages.appendChild(errorMessageElement);

                // Scroll to the bottom of the chat window
                chatMessages.scrollTop = chatMessages.scrollHeight;
            });
    });

    // Function to update table data based on AI response
    function updateTableData(aiResponse) {
        // ... (Your existing table data update logic)
    }
});
