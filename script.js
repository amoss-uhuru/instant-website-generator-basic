function generateSite() {
  const name = document.getElementById("name").value;
  const desc = document.getElementById("desc").value;
  const contact = document.getElementById("contact").value;

  const html = `
    <html>
    <head>
      <title>${name}</title>
      <style>
        body { font-family: Arial; padding: 20px; }
        h1 { color: #007bff; }
      </style>
    </head>
    <body>
      <h1>${name}</h1>
      <p>${desc}</p>
      <p>Contact: ${contact}</p>
    </body>
    </html>
  `;

  document.getElementById("preview").srcdoc = html;
}

function downloadSite() {
  const iframe = document.getElementById("preview").srcdoc;

  const blob = new Blob([iframe], { type: "text/html" });
  const a = document.createElement("a");

  a.href = URL.createObjectURL(blob);
  a.download = "website.html";
  a.click();
}
