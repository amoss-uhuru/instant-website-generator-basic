let generatedHTML = "";

function generateSite() {
  const name = document.getElementById("name").value;
  const desc = document.getElementById("desc").value;
  const contact = document.getElementById("contact").value;
  const template = document.getElementById("template").value;

  if (!name || !desc || !contact) {
    alert("Fill all fields!");
    return;
  }

  switch(template) {
    case "restaurant": generatedHTML = restaurant(name, desc, contact); break;
    case "portfolio": generatedHTML = portfolio(name, desc, contact); break;
    case "shop": generatedHTML = shop(name, desc, contact); break;
    case "gym": generatedHTML = gym(name, desc, contact); break;
    case "corporate": generatedHTML = corporate(name, desc, contact); break;
    case "clinic": generatedHTML = clinic(name, desc, contact); break;
    case "salon": generatedHTML = salon(name, desc, contact); break;
    case "realestate": generatedHTML = realestate(name, desc, contact); break;
    case "school": generatedHTML = school(name, desc, contact); break;
    case "lawyer": generatedHTML = lawyer(name, desc, contact); break;
    default: generatedHTML = business(name, desc, contact);
  }

  document.getElementById("preview").srcdoc = generatedHTML;
}

/* PREMIUM BASE */
function base(name, desc, contact, color, image) {
  return `
  <html>
  <head>
  <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
  <style>
    body { margin:0; font-family:Poppins; }
    header { background:url('${image}') center/cover; color:white; padding:120px; text-align:center; }
    section { padding:50px; text-align:center; }
    footer { background:#222; color:white; padding:20px; }
  </style>
  </head>

  <body>
  <header>
    <h1>${name}</h1>
    <p>${desc}</p>
  </header>

  <section>
    <h2>Our Services</h2>
    <p>Quality • Trust • Excellence</p>
  </section>

  <section>
    <h2>Contact</h2>
    <p>${contact}</p>
  </section>

  <footer>
    <p>© ${name}</p>
  </footer>

  </body>
  </html>`;
}

/* ALL TEMPLATES */
const business = (n,d,c) => base(n,d,c,"#007bff","https://source.unsplash.com/1600x900/?business");
const restaurant = (n,d,c) => base(n,d,c,"#c0392b","https://source.unsplash.com/1600x900/?food");
const portfolio = (n,d,c) => base(n,d,c,"#222","https://source.unsplash.com/1600x900/?workspace");
const shop = (n,d,c) => base(n,d,c,"#27ae60","https://source.unsplash.com/1600x900/?store");
const gym = (n,d,c) => base(n,d,c,"#111","https://source.unsplash.com/1600x900/?gym");
const corporate = (n,d,c) => base(n,d,c,"#34495e","https://source.unsplash.com/1600x900/?office");
const clinic = (n,d,c) => base(n,d,c,"#2c7be5","https://source.unsplash.com/1600x900/?hospital");
const salon = (n,d,c) => base(n,d,c,"#e84393","https://source.unsplash.com/1600x900/?beauty");
const realestate = (n,d,c) => base(n,d,c,"#27ae60","https://source.unsplash.com/1600x900/?house");
const school = (n,d,c) => base(n,d,c,"#6c5ce7","https://source.unsplash.com/1600x900/?school");
const lawyer = (n,d,c) => base(n,d,c,"#2d3436","https://source.unsplash.com/1600x900/?law");

function downloadSite() {
  const blob = new Blob([generatedHTML], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "website.html";
  a.click();
}
