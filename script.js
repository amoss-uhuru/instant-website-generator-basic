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

    switch(template) {
      case "restaurant":
        generatedHTML = restaurantTemplate(name, desc, contact);
        break;
      case "portfolio":
        generatedHTML = portfolioTemplate(name, desc, contact);
        break;
      case "shop":
        generatedHTML = shopTemplate(name, desc, contact);
        break;
      case "gym":
        generatedHTML = gymTemplate(name, desc, contact);
        break;
      case "corporate":
        generatedHTML = corporateTemplate(name, desc, contact);
        break;
      default:
        generatedHTML = businessTemplate(name, desc, contact);
    }

    document.getElementById("preview").srcdoc = generatedHTML;
    btn.innerText = "✨ Generate Website";

  }, 600);
}

/* BASE STYLE WITH GOOGLE FONT */
function baseStyle(font="Poppins") {
  return `
  <link href="https://fonts.googleapis.com/css2?family=${font}:wght@300;400;600&display=swap" rel="stylesheet">
  <style>
    body { margin:0; font-family:'${font}', sans-serif; line-height:1.6; }
    header { padding:80px 20px; color:white; text-align:center; }
    section { padding:50px 20px; text-align:center; }
    .services div { margin:10px; }
    footer { padding:20px; text-align:center; color:white; }
    img { max-width:100%; border-radius:10px; }
  </style>
  `;
}

/* BUSINESS */
function businessTemplate(name, desc, contact) {
  return `
  <html>
  <head>${baseStyle()}</head>
  <body>

  <header style="background:#007bff;">
    <h1>${name}</h1>
    <p>${desc}</p>
  </header>

  <section class="services">
    <h2>Our Services</h2>
    <div>✔ Quality Service</div>
    <div>✔ Trusted Professionals</div>
    <div>✔ Affordable Pricing</div>
  </section>

  <section>
    <h2>Testimonials</h2>
    <p>"Amazing service!"</p>
    <p>"Highly recommend!"</p>
  </section>

  <section>
    <h2>Contact</h2>
    <p>${contact}</p>
  </section>

  <footer style="background:#222;">
    <p>© ${name}</p>
  </footer>

  </body>
  </html>`;
}

/* RESTAURANT */
function restaurantTemplate(name, desc, contact) {
  return `
  <html>
  <head>${baseStyle("Playfair Display")}</head>
  <body>

  <header style="background:#c0392b;">
    <h1>${name}</h1>
    <p>${desc}</p>
  </header>

  <section>
    <img src="https://source.unsplash.com/800x400/?food">
  </section>

  <section>
    <h2>Our Menu</h2>
    <p>Fresh & delicious meals daily</p>
  </section>

  <section>
    <h2>Contact</h2>
    <p>${contact}</p>
  </section>

  <footer style="background:#222;">
    <p>Visit us today!</p>
  </footer>

  </body>
  </html>`;
}

/* PORTFOLIO */
function portfolioTemplate(name, desc, contact) {
  return `
  <html>
  <head>${baseStyle()}</head>
  <body>

  <header style="background:#222;">
    <h1>${name}</h1>
    <p>${desc}</p>
  </header>

  <section>
    <h2>My Work</h2>
    <img src="https://source.unsplash.com/800x400/?workspace">
  </section>

  <section>
    <h2>About Me</h2>
    <p>${desc}</p>
  </section>

  <section>
    <h2>Contact</h2>
    <p>${contact}</p>
  </section>

  <footer style="background:#000;">
    <p>Let's work together</p>
  </footer>

  </body>
  </html>`;
}

/* SHOP */
function shopTemplate(name, desc, contact) {
  return `
  <html>
  <head>${baseStyle()}</head>
  <body>

  <header style="background:#27ae60;">
    <h1>${name}</h1>
    <p>${desc}</p>
  </header>

  <section>
    <img src="https://source.unsplash.com/800x400/?store">
  </section>

  <section>
    <h2>Products</h2>
    <p>High quality items available now</p>
  </section>

  <section>
    <h2>Contact</h2>
    <p>${contact}</p>
  </section>

  <footer style="background:#222;">
    <p>Shop with us</p>
  </footer>

  </body>
  </html>`;
}

/* GYM */
function gymTemplate(name, desc, contact) {
  return `
  <html>
  <head>${baseStyle()}</head>
  <body>

  <header style="background:#111;">
    <h1>${name}</h1>
    <p>${desc}</p>
  </header>

  <section>
    <img src="https://source.unsplash.com/800x400/?gym">
  </section>

  <section>
    <h2>Programs</h2>
    <p>Strength, Cardio, Personal Training</p>
  </section>

  <section>
    <h2>Contact</h2>
    <p>${contact}</p>
  </section>

  <footer style="background:#000;">
    <p>Train with us</p>
  </footer>

  </body>
  </html>`;
}

/* CORPORATE */
function corporateTemplate(name, desc, contact) {
  return `
  <html>
  <head>${baseStyle()}</head>
  <body>

  <header style="background:#34495e;">
    <h1>${name}</h1>
    <p>${desc}</p>
  </header>

  <section>
    <img src="https://source.unsplash.com/800x400/?office">
  </section>

  <section>
    <h2>About Company</h2>
    <p>${desc}</p>
  </section>

  <section>
    <h2>Contact</h2>
    <p>${contact}</p>
  </section>

  <footer style="background:#222;">
    <p>Professional solutions</p>
  </footer>

  </body>
  </html>`;
}

/* DOWNLOAD */
function downloadSite() {
  if (!generatedHTML) {
    alert("Generate first!");
    return;
  }

  const blob = new Blob([generatedHTML], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "website.html";
  a.click();
}
