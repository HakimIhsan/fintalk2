<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Financial Dashboard</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" rel="stylesheet">
    <style>
        /* Styles (unchanged) */
    </style>
</head>
<body>

<div class="wrapper">
    <div class="chat-container">
        <div class="message-bubble">
            <h1 class="text-center mb-4">Financial Dashboard</h1>
            <div class="card">
                <h3 class="card-header text-center font-weight-bold text-uppercase py-4">DEMO FINTALK</h3>
                <div class="card-body">
                    <table id="table" class="table table-bordered table-responsive-md table-striped text-center"></table>
                </div>
            </div>
        </div>

        <div class="chat-window">
            <div class="main-title">CHAT BOT USING CHAT-GPT</div>
            <div id="chat-messages"></div>
            <form id="chat-form">
                <input
                    type="text"
                    id="chat-input"
                    autocomplete="off"
                    placeholder="Type your message here"
                    required
                />
                <button type="submit">Send</button>
            </form>
        </div>
    </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.2.3/axios.min.js"></script>
<script src="app.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@2.9.2/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>

<script>
    // Sample data array
    let tableData = [
        { name: "Salary (Rp.)", Jan: 10000000, Feb: 10000000, Mar: 10000000, Apr: 10000000 },
        { name: "Biaya Kuliah", Jan: 1000000, Feb: 1000000, Mar: 1000000, Apr: 1000000 },
        { name: "Spent Jajan", Jan: 300000, Feb: 5000000, Mar: 0, Apr: 30000 },
        // Add more rows as needed
    ];

    document.addEventListener("DOMContentLoaded", function () {
        const $tableID = $('#table');
        const $messages = $('#chat-messages');

        // Function to populate the table with data
        function populateTable() {
            $tableID.empty(); // Clear existing rows
            tableData.forEach(rowData => {
                const $newRow = $('<tr></tr>');
                for (const key in rowData) {
                    $newRow.append(`<td class="pt-3-half" contenteditable="true">${rowData[key]}</td>`);
                }
                $tableID.append($newRow);
            });
        }

        // Function to update both chat and table
        function updateChatAndTable(message, chatbotResponse) {
            $messages.append(`<div class="message user-message">
              <img src="./icons/user.png" alt="user icon"> <span>${message}</span>
            </div>`);
            $messages.append(`<div class="message bot-message">
              <img src="./icons/chatbot.png" alt="bot icon"> <span>${chatbotResponse}</span>
            </div>`);
            populateTable(); // Update the table
        }

        // Event listener for chat form submission
        $('#chat-form').on('submit', async function (e) {
            e.preventDefault();
            const message = $('#chat-input').val();
            $('#chat-input').val('');

            // Use axios library to make a POST request to the OpenAI API
            const response = await axios.post(
                "https://api.openai.com/v1/completions",
                {
                    prompt: message,
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

            // Update chat and table
            updateChatAndTable(message, chatbotResponse);
        });
    });
</script>
</body>
</html>
