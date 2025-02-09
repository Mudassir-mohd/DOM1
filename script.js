
// Function to read values using DOM methods
function readValues() {
  const name = document.getElementById("name").innerText;
  const age = document.getElementById("age").innerText;
  const email = document.getElementById("email").innerText;
  const summary = document.getElementById("summary").innerText;
  
  console.log("Current Resume Information:");
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Email:", email);
  console.log("Summary:", summary);
  
  // Reading skill items
  const skillsList = document.getElementById("skills").children;
  console.log("Skills:");
  for (let i = 0; i < skillsList.length; i++) {
    console.log(`- ${skillsList[i].innerText}`);
  }
}

// Function to update resume values using innerText
function updateValuesWithInnerText() {
  document.getElementById("name").innerText = "Sunny";
  document.getElementById("age").innerText = "23";
  document.getElementById("email").innerText = "sunny@example.com";
  document.getElementById("summary").innerText = "Creative software engineer with a knack for building intuitive user interfaces and experiences.";

  // Updating each skill using innerText
  const skills = document.getElementById("skills").children;
  skills[0].innerText = "Vue.js";
  skills[1].innerText = "Node.js";
  skills[2].innerText = "UI/UX Design";
}

// Function to update resume values using innerHTML
function updateValuesWithInnerHTML() {
  document.getElementById("name").innerHTML = "<b>Arun</b>";
  document.getElementById("age").innerHTML = "<i>23</i>";
  document.getElementById("email").innerHTML = "<a href='mailto:arun@example.com'>arun@example.com</a>";
  document.getElementById("summary").innerHTML = "<strong>senior most developer</strong> with a passion for efficient data processing and scalable architectures.";

  // Updating the list of skills using innerHTML for all items
  document.getElementById("skills").innerHTML = `
    <li>Python</li>
    <li>Django</li>
    <li>Database Design</li>
  `;
}