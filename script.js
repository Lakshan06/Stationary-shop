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

  // Bot response
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
    return "Hello 😊 Welcome to our Stationery Shop! How can I help you?";
  } 
  else if (input.includes("good morning")) {
    return "Good morning ☀️ How can I assist you today?";
  } 
  else if (input.includes("good afternoon")) {
    return "Good afternoon 😊 What are you looking for?";
  } 
  else if (input.includes("good evening")) {
    return "Good evening 🌙 How may I help you?";
  } 
  else if (input.includes("how are you")) {
    return "I'm doing great 😊 Thanks for asking!";
  } 
  else if (input.includes("pen")) {
    return "We have ball pens, gel pens, and fountain pens!";
  } 
  else if (input.includes("pencil")) {
    return "We offer HB, 2B, and mechanical pencils.";
  } 
  else if (input.includes("notebook")) {
    return "We stock ruled, plain, and spiral notebooks.";
  } 
  else if (input.includes("eraser")) {
    return "Soft erasers and dust-free erasers are available.";
  } 
  else if (input.includes("price")) {
    return "Prices vary by product. Can you specify which item?";
  } 
  else if (input.includes("thank")) {
    return "You're welcome 😊 Happy to help!";
  } 
  else if (input.includes("bye")) {
    return "Goodbye 👋 Visit again!";
  } 
  else {
    return "Sorry, I didn’t understand 😅 Try asking about pens, pencils, notebooks, or erasers.";
  }
}