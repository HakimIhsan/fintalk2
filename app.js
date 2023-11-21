document.addEventListener('DOMContentLoaded', function () {
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');

    const $tableID = $('#table');

    // Function to populate the table with data
    function populateTable() {
        // ... (Your existing table population logic)
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

        // Make request to your server
        axios
            .post('/getChatResponse', {
                userMessage,
                tableData, // Include your table data here
            })
            .then((response) => {
                const aiMessage = response.data.aiMessage;

                // Add AI message to chat window
                const aiMessageElement = document.createElement('div');
                aiMessageElement.classList.add('message-bubble', 'ai-message');
                aiMessageElement.innerText = aiMessage;
                chatMessages.appendChild(aiMessageElement);

                // Optionally, update the table data based on the AI response
                updateTableData(aiMessage);

                // Scroll to the bottom of the chat window
                chatMessages.scrollTop = chatMessages.scrollHeight;
            })
            .catch((error) => console.error('Error communicating with the server', error));
    });

    // Function to update table data based on AI response
    function updateTableData(aiResponse) {
        // ... (Your existing table data update logic)
    }
});
