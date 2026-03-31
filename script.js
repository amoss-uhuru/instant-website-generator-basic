let generatedHTML = "";

function generateSite() {
  const btn = document.getElementById("generateBtn");
  btn.innerText = "Generating...";

  setTimeout(() => {

    const name = document.getElementById("name").value;
    const desc = document.getElementById("desc").value;
    const contact = document.getElementById("contact").value;
    const template = document.getElementById("template").value;

    if (!name || !desc || !contact) {
      alert("Please fill all fields!");
      btn.innerText = "✨ Generate Website";
      return;
    }

    if (template === "business") {
      generatedHTML = businessTemplate(name, desc, contact);
    }

    if (template === "restaurant") {
      generatedHTML = restaurantTemplate(name, desc, contact);
    }

    if (template === "portfolio") {
      generatedHTML = portfolioTemplate(name, desc, contact);
    }

    document.getElementById("preview").srcdoc = generatedHTML;

    btn.innerText = "✨ Generate Website";

  }, 500);
}

/* TEMPLATES */

function businessTemplate(name, desc, contact) {
  return `
  <html>
  <body style="font-family:Arial;margin:0">
    <header style="background:#007bff;color:white;padding:60px;text-align:center">
      <h1>${name}</h1>
      <p>${desc}</p>
    </header>

    <section style="padding:40px;text-align:center">
      <h2>About</h2>
      <p>${desc}</p>
    </section>

    <section style="padding:40px;text-align:center;background:#f4f4f4">
      <h2>Contact</h2>
      <p>${contact}</p>
    </section>
  </body>
  </html>
  `;
}

function restaurantTemplate(name, desc, contact) {
  return `
  <html>
  <body style="font-family:Arial;margin:0;background:#fff8f0">
    <header style="background:#d35400;color:white;padding:60px;text-align:center">
      <h1>${name}</h1>
      <p>${desc}</p>
    </header>

    <section style="padding:40px;text-align:center">
      <h2>Our Menu</h2>
      <p>Delicious meals served daily</p>
    </section>

    <section style="padding:40px;text-align:center">
      <h2>Contact</h2>
      <p>${contact}</p>
    </section>
  </body>
  </html>
  `;
}

function portfolioTemplate(name, desc, contact) {
  return `
  <html>
  <body style="font-family:Arial;margin:0;background:#f0f4f8">
    <header style="background:#222;color:white;padding:60px;text-align:center">
      <h1>${name}</h1>
      <p>${desc}</p>
    </header>

    <section style="padding:40px;text-align:center">
      <h2>My Work</h2>
      <p>Projects and achievements</p>
    </section>

    <section style="padding:40px;text-align:center">
      <h2>Contact Me</h2>
      <p>${contact}</p>
    </section>
  </body>
  </html>
  `;
}

function downloadSite() {
  if (!generatedHTML) {
    alert("Generate a website first!");
    return;
  }

  const blob = new Blob([generatedHTML], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "website.html";
  a.click();
}
