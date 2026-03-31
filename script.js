let generatedHTML = "";

function generateSite() {
  const name = document.getElementById("name").value;
  const desc = document.getElementById("desc").value;
  const contact = document.getElementById("contact").value;

  generatedHTML = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${name}</title>
      <style>
        body {
          font-family: Arial;
          margin: 0;
          padding: 0;
          text-align: center;
        }
        .hero {
          background: #333;
          color: white;
          padding: 50px;
        }
        .section {
          padding: 30px;
        }
      </style>
    </head>
    <body>
      <div class="hero">
        <h1>${name}</h1>
        <p>${desc}</p>
      </div>

      <div class="section">
        <h2>Contact</h2>
        <p>${contact}</p>
      </div>
    </body>
    </html>
  `;

  document.getElementById("preview").srcdoc = generatedHTML;
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
