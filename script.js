function sendMessage() {
  const inputField = document.getElementById("user-input");
  const userText = inputField.value.trim();

  if (userText === "") return;

  const chatBox = document.getElementById("chat-box");

  // User message
  const userMessage = document.createElement("div");
  userMessage.className = "message user";
  userMessage.innerText = userText;
  chatBox.appendChild(userMessage);

  // Bot message
  const botMessage = document.createElement("div");
  botMessage.className = "message bot";
  botMessage.innerText = getBotResponse(userText);
  chatBox.appendChild(botMessage);

  inputField.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  input = input.toLowerCase();

  if (input.includes("hi") || input.includes("hello") || input.includes("hey")) {
    return "Hello 😊 Welcome to our Stationery Shop!";
  } else if (input.includes("pen")) {
    return "We have ball pens, gel pens, and fountain pens.";
  } else if (input.includes("pencil")) {
    return "We sell HB, 2B, and mechanical pencils.";
  } else if (input.includes("notebook")) {
    return "We have ruled, plain, and spiral notebooks.";
  } else if (input.includes("eraser")) {
    return "Soft and dust-free erasers are available.";
  } else if (input.includes("price")) {
    return "Prices depend on the item. Which product?";
  } else if (input.includes("bye")) {
    return "Goodbye 👋 Visit again!";
  } else {
    return "Sorry 😅 Ask about pens, pencils, notebooks, or erasers.";
  }
}
