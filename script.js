// script.js
document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const businessNameInput = document.getElementById('businessName');
    const taglineInput = document.getElementById('tagline');
    const categoryCards = document.querySelectorAll('.category-card');
    const selectedCategoryInput = document.getElementById('selectedCategory');
    const primaryColorPicker = document.getElementById('primaryColor');
    const colorValueSpan = document.getElementById('colorValue');
    const generateBtn = document.getElementById('generateBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const previewIframe = document.getElementById('previewIframe');

    let currentGeneratedHTML = '';

    function setActiveCategory(category) {
        categoryCards.forEach(card => {
            const cat = card.getAttribute('data-category');
            if (cat === category) card.classList.add('active');
            else card.classList.remove('active');
        });
        selectedCategoryInput.value = category;
    }

    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const cat = card.getAttribute('data-category');
            setActiveCategory(cat);
        });
    });

    primaryColorPicker.addEventListener('input', (e) => {
        colorValueSpan.innerText = e.target.value;
    });

    function generateWebsiteHTML(businessName, tagline, category, primaryColor) {
        const currentYear = new Date().getFullYear();
        const safeName = businessName || "Your Brand";
        const safeTagline = tagline || "We craft digital success";

        // Common styles for generated site
        const style = `
        <style>
            * { margin:0; padding:0; box-sizing:border-box; font-family: 'Inter', system-ui, -apple-system, sans-serif; }
            body { line-height:1.5; color:#1e293b; background:#fff; }
            .container { max-width:1200px; margin:0 auto; padding:0 24px; }
            .btn { display:inline-block; background:${primaryColor}; color:white; padding:12px 32px; border-radius:40px; text-decoration:none; font-weight:600; transition:0.3s; border:none; cursor:pointer; box-shadow:0 4px 12px rgba(0,0,0,0.1); }
            .btn:hover { transform:translateY(-2px); box-shadow:0 6px 20px rgba(0,0,0,0.15); background:${primaryColor}dd; }
            header { background:#fff; box-shadow:0 2px 20px rgba(0,0,0,0.05); position:sticky; top:0; z-index:100; }
            .hero { padding:100px 0; text-align:center; background: linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%); }
            .section { padding:80px 0; }
            .section-title { font-size:2.2rem; text-align:center; margin-bottom:3rem; font-weight:700; }
            .grid-3 { display:grid; grid-template-columns:repeat(auto-fit, minmax(280px,1fr)); gap:30px; margin-top:20px; }
            .card { background:#fff; border-radius:28px; padding:32px; box-shadow:0 10px 30px -10px rgba(0,0,0,0.08); transition:0.3s; border:1px solid #f0f0f0; text-align:center; }
            .card:hover { transform:translateY(-6px); box-shadow:0 20px 35px -12px rgba(0,0,0,0.15); }
            .testimonial { background:#f8fafc; border-radius:28px; padding:32px; text-align:center; font-style:italic; margin:20px; box-shadow:0 4px 12px rgba(0,0,0,0.03); }
            footer { background:#0f172a; color:#cbd5e1; text-align:center; padding:40px 0; margin-top:40px; }
            footer a { color:#94a3b8; text-decoration:none; margin:0 10px; }
            footer a:hover { color:${primaryColor}; }
            @media (max-width:768px){ .hero { padding:60px 0; } .section { padding:50px 0; } .section-title { font-size:1.8rem; } }
        </style>
        `;

        // Template content based on category
        let mainContent = '';
        switch(category) {
            case 'business':
                mainContent = `
                <section class="hero">
                    <div class="container">
                        <h1 style="font-size:3.2rem; font-weight:800; background:linear-gradient(135deg, ${primaryColor}, #a855f7); -webkit-background-clip:text; background-clip:text; color:transparent;">${safeName}</h1>
                        <p style="font-size:1.3rem; color:#475569; margin:20px 0;">${safeTagline}</p>
                        <a href="#" class="btn">Get Started →</a>
                    </div>
                </section>
                <section class="section">
                    <div class="container">
                        <h2 class="section-title">Core Services</h2>
                        <div class="grid-3">
                            <div class="card"><i class="fas fa-chart-line" style="font-size:2.5rem; color:${primaryColor}; margin-bottom:20px;"></i><h3>Strategy</h3><p>Data-driven roadmaps to accelerate growth.</p></div>
                            <div class="card"><i class="fas fa-code" style="font-size:2.5rem; color:${primaryColor}; margin-bottom:20px;"></i><h3>Development</h3><p>Scalable, modern web solutions.</p></div>
                            <div class="card"><i class="fas fa-rocket" style="font-size:2.5rem; color:${primaryColor}; margin-bottom:20px;"></i><h3>Marketing</h3><p>Reach your audience with precision.</p></div>
                        </div>
                    </div>
                </section>
                <section class="section" style="background:#f8fafc;">
                    <div class="container">
                        <h2 class="section-title">What Clients Say</h2>
                        <div class="grid-3">
                            <div class="testimonial">“ProGen transformed our online presence. Exceptional service!” — Jane D.</div>
                            <div class="testimonial">“The team delivered ahead of schedule and exceeded expectations.” — Mark T.</div>
                            <div class="testimonial">“Highly professional, creative, and results-driven.” — Sarah K.</div>
                        </div>
                    </div>
                </section>`;
                break;
            case 'restaurant':
                mainContent = `
                <section class="hero" style="background: linear-gradient(135deg, #fff7ed, #ffedd5);">
                    <div class="container">
                        <h1 style="font-size:3.2rem;">${safeName}</h1>
                        <p style="font-size:1.2rem; color:#b45309;">${safeTagline}</p>
                        <a href="#" class="btn" style="background:#d97706;">Explore Menu →</a>
                    </div>
                </section>
                <section class="section">
                    <div class="container">
                        <h2 class="section-title">Signature Dishes</h2>
                        <div class="grid-3">
                            <div class="card"><img src="https://placehold.co/400x300/FFE4C4/black?text=Grilled+Steak" style="width:100%; border-radius:20px; margin-bottom:15px;"><h3>Grilled Ribeye</h3><p>Prime cut, garlic butter, rosemary.</p><span style="color:#d97706; font-weight:bold;">$32</span></div>
                            <div class="card"><img src="https://placehold.co/400x300/FFE4C4/black?text=Seafood+Pasta" style="width:100%; border-radius:20px;"><h3>Seafood Linguine</h3><p>Shrimp, scallops, white wine sauce.</p><span style="color:#d97706;">$28</span></div>
                            <div class="card"><img src="https://placehold.co/400x300/FFE4C4/black?text=Tiramisu" style="width:100%; border-radius:20px;"><h3>Tiramisu</h3><p>Classic Italian, coffee infused.</p><span style="color:#d97706;">$12</span></div>
                        </div>
                    </div>
                </section>
                <section class="section" style="background:#fef9f1;">
                    <div class="container">
                        <h2 class="section-title">Ambiance & Service</h2>
                        <p style="text-align:center; max-width:700px; margin:0 auto;">Elegant dining experience, private events, and award-winning chefs.</p>
                    </div>
                </section>`;
                break;
            case 'portfolio':
                mainContent = `
                <section class="hero" style="background:#f1f5f9;">
                    <div class="container">
                        <h1 style="font-size:3rem;">${safeName}</h1>
                        <p style="font-size:1.2rem;">${safeTagline}</p>
                        <a href="#" class="btn">View Projects</a>
                    </div>
                </section>
                <section class="section">
                    <div class="container">
                        <h2 class="section-title">Recent Work</h2>
                        <div class="grid-3">
                            <div class="card"><img src="https://placehold.co/400x300/DDD/white?text=Project+Alpha" style="width:100%; border-radius:20px;"><h3>Brand Identity</h3><p>Minimalist design for fintech startup.</p></div>
                            <div class="card"><img src="https://placehold.co/400x300/DDD/white?text=Project+Beta" style="width:100%; border-radius:20px;"><h3>E‑commerce UI</h3><p>Modern shop interface with high conversion.</p></div>
                            <div class="card"><img src="https://placehold.co/400x300/DDD/white?text=Project+Gamma" style="width:100%; border-radius:20px;"><h3>Motion Graphics</h3><p>Animated explainer for creative agency.</p></div>
                        </div>
                    </div>
                </section>
                <section class="section" style="background:#f1f5f9;">
                    <div class="container">
                        <h2 class="section-title">Client Love</h2>
                        <div class="grid-3">
                            <div class="testimonial">“Exquisite attention to detail, a true artist.” — Client A</div>
                            <div class="testimonial">“Brought our vision to life beyond expectations.” — Client B</div>
                        </div>
                    </div>
                </section>`;
                break;
            case 'shop':
                mainContent = `
                <section class="hero" style="background: linear-gradient(120deg, #e0e7ff, #fae8ff);">
                    <div class="container">
                        <h1 style="font-size:3rem;">🛍️ ${safeName}</h1>
                        <p style="font-size:1.2rem;">${safeTagline}</p>
                        <a href="#" class="btn" style="background:#10b981;">Shop Now</a>
                    </div>
                </section>
                <section class="section">
                    <div class="container">
                        <h2 class="section-title">Bestsellers</h2>
                        <div class="grid-3">
                            <div class="card"><i class="fas fa-headphones" style="font-size:3rem; color:#10b981;"></i><h3>Wireless Headphones</h3><p>Noise cancelling, 40hr battery.</p><span style="font-weight:bold;">$89</span> <button class="btn" style="padding:8px 20px; margin-top:12px;">Buy</button></div>
                            <div class="card"><i class="fas fa-watch" style="font-size:3rem; color:#10b981;"></i><h3>Smart Watch</h3><p>Fitness tracker + notifications.</p><span style="font-weight:bold;">$149</span> <button class="btn" style="padding:8px 20px;">Buy</button></div>
                            <div class="card"><i class="fas fa-tshirt" style="font-size:3rem; color:#10b981;"></i><h3>Organic Cotton Tee</h3><p>Eco-friendly, premium fit.</p><span style="font-weight:bold;">$29</span> <button class="btn" style="padding:8px 20px;">Buy</button></div>
                        </div>
                    </div>
                </section>
                <section class="section" style="background:#f9fafb;">
                    <div class="container">
                        <h2 class="section-title">Free Shipping Worldwide</h2>
                        <p style="text-align:center;">On orders over $50 — limited time offer.</p>
                    </div>
                </section>`;
                break;
            case 'agency':
                mainContent = `
                <section class="hero">
                    <div class="container">
                        <h1 style="font-size:3.5rem;">${safeName}</h1>
                        <p style="font-size:1.3rem;">${safeTagline}</p>
                        <a href="#" class="btn">Start a Project</a>
                    </div>
                </section>
                <section class="section">
                    <div class="container">
                        <h2 class="section-title">Our Expertise</h2>
                        <div class="grid-3">
                            <div class="card"><i class="fas fa-paint-brush" style="font-size:2.5rem; color:${primaryColor};"></i><h3>Creative Design</h3><p>Branding, UI/UX, and visual storytelling.</p></div>
                            <div class="card"><i class="fas fa-chart-simple" style="font-size:2.5rem; color:${primaryColor};"></i><h3>Digital Strategy</h3><p>Data-driven campaigns that convert.</p></div>
                            <div class="card"><i class="fas fa-video" style="font-size:2.5rem; color:${primaryColor};"></i><h3>Video Production</h3><p>Engaging content for social & web.</p></div>
                        </div>
                    </div>
                </section>
                <section class="section" style="background:#f8fafc;">
                    <div class="container">
                        <h2 class="section-title">Trusted by Innovators</h2>
                        <div class="grid-3">
                            <div class="testimonial">“Agency of the year — they deliver beyond expectations.”</div>
                            <div class="testimonial">“Strategic, creative, and results-oriented.”</div>
                        </div>
                    </div>
                </section>`;
                break;
            case 'tech':
                mainContent = `
                <section class="hero" style="background: linear-gradient(135deg, #0f172a, #1e293b); color:white;">
                    <div class="container">
                        <h1 style="font-size:3rem;">${safeName}</h1>
                        <p style="font-size:1.2rem;">${safeTagline}</p>
                        <a href="#" class="btn" style="background:#2563eb;">Get Early Access</a>
                    </div>
                </section>
                <section class="section">
                    <div class="container">
                        <h2 class="section-title">Disruptive Solutions</h2>
                        <div class="grid-3">
                            <div class="card"><i class="fas fa-brain" style="font-size:2.5rem; color:${primaryColor};"></i><h3>AI Analytics</h3><p>Actionable insights from big data.</p></div>
                            <div class="card"><i class="fas fa-cloud-upload-alt" style="font-size:2.5rem; color:${primaryColor};"></i><h3>Cloud Infrastructure</h3><p>Scalable, secure, and cost-effective.</p></div>
                            <div class="card"><i class="fas fa-mobile-alt" style="font-size:2.5rem; color:${primaryColor};"></i><h3>Mobile-First</h3><p>Seamless experiences on any device.</p></div>
                        </div>
                    </div>
                </section>
                <section class="section" style="background:#f1f5f9;">
                    <div class="container">
                        <h2 class="section-title">Join the Revolution</h2>
                        <p style="text-align:center;">Be part of the next-gen tech movement.</p>
                    </div>
                </section>`;
                break;
            default:
                mainContent = `<section class="hero"><div class="container"><h1>${safeName}</h1><p>${safeTagline}</p></div></section>`;
        }

        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${safeName} | ProGen</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">
            ${style}
        </head>
        <body>
            <header>
                <div class="container" style="display:flex; justify-content:space-between; align-items:center; padding:20px 24px;">
                    <strong style="font-size:1.6rem; color:${primaryColor};">${safeName}</strong>
                    <nav>
                        <a href="#" style="margin:0 12px; text-decoration:none; color:#475569;">Home</a>
                        <a href="#" style="margin:0 12px; text-decoration:none; color:#475569;">About</a>
                        <a href="#" style="margin:0 12px; text-decoration:none; color:#475569;">Contact</a>
                    </nav>
                </div>
            </header>
            ${mainContent}
            <footer>
                <div class="container">
                    <p>© ${currentYear} ${safeName}. All rights reserved. | Powered by ProGen</p>
                    <div style="margin-top:12px;">
                        <a href="https://wa.me/254722972078" target="_blank"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                        <a href="tel:+254722972078"><i class="fas fa-phone-alt"></i> Call</a>
                        <a href="mailto:amoss.uhuru@gmail.com"><i class="fas fa-envelope"></i> Email</a>
                    </div>
                </div>
            </footer>
        </body>
        </html>`;
    }

    function updatePreviewAndStore() {
        const business = businessNameInput.value.trim() || "Your Brand";
        const tagline = taglineInput.value.trim() || "We craft digital success";
        const category = selectedCategoryInput.value;
        const color = primaryColorPicker.value;
        const fullHTML = generateWebsiteHTML(business, tagline, category, color);
        currentGeneratedHTML = fullHTML;
        const iframeDoc = previewIframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(fullHTML);
        iframeDoc.close();
    }

    function downloadHTML() {
        if (!currentGeneratedHTML) updatePreviewAndStore();
        const blob = new Blob([currentGeneratedHTML], { type: 'text/html' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        const slug = (businessNameInput.value.trim() || "website").replace(/\s+/g, '-').toLowerCase();
        link.href = url;
        link.download = `${slug}-progen.html`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    generateBtn.addEventListener('click', () => {
        updatePreviewAndStore();
        generateBtn.innerHTML = '<i class="fas fa-check-circle"></i> Generated!';
        setTimeout(() => generateBtn.innerHTML = '<i class="fas fa-magic"></i> Generate Website', 1500);
    });
    downloadBtn.addEventListener('click', downloadHTML);

    // Initialize
    updatePreviewAndStore();
    setActiveCategory('business');
});
