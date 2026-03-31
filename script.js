let generatedHTML = "";

function generateSite() {
  const name = document.getElementById("name").value;
  const desc = document.getElementById("desc").value;
  const contact = document.getElementById("contact").value;

  if (!name || !desc || !contact) {
    alert("Please fill all fields!");
    return;
  }

  generatedHTML = `
<!DOCTYPE html>
<html>
<head>
  <title>${name}</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      line-height: 1.6;
    }

    header {
      background: linear-gradient(135deg, #007bff, #00c6ff);
      color: white;
      padding: 60px 20px;
      text-align: center;
    }

    section {
      padding: 40px 20px;
      text-align: center;
    }

    .about {
      background: #f4f4f4;
    }

    .contact {
      background: #fff;
    }

    footer {
      background: #222;
      color: white;
      padding: 20px;
      text-align: center;
    }

    @media (max-width: 600px) {
      header {
        padding: 40px 10px;
      }
    }
  </style>
</head>
<body>

<header>
  <h1>${name}</h1>
  <p>${desc}</p>
</header>

<section class="about">
  <h2>About Us</h2>
  <p>${desc}</p>
</section>

<section class="contact">
  <h2>Contact</h2>
  <p>${contact}</p>
</section>

<footer>
  <p>© ${new Date().getFullYear()} ${name}. All rights reserved.</p>
</footer>

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
