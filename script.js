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

    // Category selection
    function setActiveCategory(category) {
        categoryCards.forEach(card => {
            const cat = card.getAttribute('data-category');
            if (cat === category) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
        selectedCategoryInput.value = category;
    }

    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const cat = card.getAttribute('data-category');
            setActiveCategory(cat);
        });
    });

    // Color picker display
    primaryColorPicker.addEventListener('input', (e) => {
        colorValueSpan.innerText = e.target.value;
    });

    // Generate HTML based on selections
    function generateWebsiteHTML(businessName, tagline, category, primaryColor) {
        const currentYear = new Date().getFullYear();
        const safeName = businessName || "Your Brand";
        const safeTagline = tagline || "Excellence & Creativity";
        
        const style = `
        <style>
            * { margin:0; padding:0; box-sizing:border-box; font-family: 'Inter', system-ui, -apple-system, sans-serif; }
            body { line-height:1.5; color:#1f2937; background:#fff; }
            .container { max-width:1200px; margin:0 auto; padding:0 24px; }
            .btn { display:inline-block; background:${primaryColor}; color:white; padding:12px 28px; border-radius:40px; text-decoration:none; font-weight:600; transition:0.2s; border:none; cursor:pointer; }
            .btn-outline { background:transparent; border:2px solid ${primaryColor}; color:${primaryColor}; }
            .btn-outline:hover { background:${primaryColor}; color:white; }
            header { background:#fff; box-shadow:0 4px 20px rgba(0,0,0,0.05); position:sticky; top:0; z-index:100; }
            .hero { background: linear-gradient(135deg, #f8fafc, #eef2ff); padding:80px 0; text-align:center; }
            .section { padding:70px 0; }
            .grid-3 { display:grid; grid-template-columns:repeat(auto-fit, minmax(280px,1fr)); gap:30px; margin-top:40px; }
            .card { background:#fff; border-radius:24px; padding:28px; box-shadow:0 10px 25px -5px rgba(0,0,0,0.05); transition:0.2s; border:1px solid #f0f0f0; }
            .card:hover { transform:translateY(-6px); box-shadow:0 20px 30px -12px rgba(0,0,0,0.1); }
            footer { background:#111827; color:#9ca3af; text-align:center; padding:32px 0; margin-top:40px; }
            @media (max-width:768px){ .hero { padding:50px 0; } .section { padding:40px 0; } }
        </style>
        `;
        
        let mainContent = '';
        if (category === 'business') {
            mainContent = `
            <section class="hero">
                <div class="container">
                    <h1 style="font-size:3rem; font-weight:800; background:linear-gradient(135deg, ${primaryColor}, #a855f7); -webkit-background-clip:text; background-clip:text; color:transparent;">${safeName}</h1>
                    <p style="font-size:1.3rem; color:#4b5563; margin:16px 0;">${safeTagline}</p>
                    <a href="#" class="btn">Get in touch →</a>
                </div>
            </section>
            <section class="section">
                <div class="container">
                    <h2 style="font-size:2rem; font-weight:700; text-align:center;">Our Services</h2>
                    <div class="grid-3">
                        <div class="card"><i class="fas fa-chart-line" style="font-size:2rem; color:${primaryColor}; margin-bottom:16px; display:inline-block;"></i><h3>Strategy</h3><p>Data-driven growth plans tailored to your market.</p></div>
                        <div class="card"><i class="fas fa-code" style="font-size:2rem; color:${primaryColor}; margin-bottom:16px;"></i><h3>Development</h3><p>Modern web apps and seamless experiences.</p></div>
                        <div class="card"><i class="fas fa-rocket" style="font-size:2rem; color:${primaryColor}; margin-bottom:16px;"></i><h3>Marketing</h3><p>Reach your audience with precision.</p></div>
                    </div>
                </div>
            </section>`;
        } 
        else if (category === 'restaurant') {
            mainContent = `
            <section class="hero" style="background: linear-gradient(135deg, #fff5eb, #ffe6d5);">
                <div class="container">
                    <h1 style="font-size:3rem; font-weight:800;">${safeName}</h1>
                    <p style="font-size:1.2rem; color:#b45309;">${safeTagline}</p>
                    <a href="#" class="btn" style="background:#d97706;">View Menu →</a>
                </div>
            </section>
            <section class="section">
                <div class="container">
                    <h2 style="font-size:2rem; text-align:center;">Signature Dishes</h2>
                    <div class="grid-3">
                        <div class="card"><img src="https://placehold.co/600x400/FFE4C4/black?text=Grilled+Steak" style="width:100%; border-radius:20px; margin-bottom:12px;"><h3>Grilled Ribeye</h3><p>Perfectly seasoned, served with garlic butter.</p><span style="color:#d97706; font-weight:bold;">$32</span></div>
                        <div class="card"><img src="https://placehold.co/600x400/FFE4C4/black?text=Seafood+Pasta" style="width:100%; border-radius:20px; margin-bottom:12px;"><h3>Seafood Linguine</h3><p>Fresh shrimp, scallops, and white wine sauce.</p><span style="color:#d97706;">$28</span></div>
                        <div class="card"><img src="https://placehold.co/600x400/FFE4C4/black?text=Tiramisu" style="width:100%; border-radius:20px; margin-bottom:12px;"><h3>Tiramisu</h3><p>Classic Italian dessert, coffee infused.</p><span style="color:#d97706;">$12</span></div>
                    </div>
                </div>
            </section>`;
        }
        else if (category === 'portfolio') {
            mainContent = `
            <section class="hero" style="background:#f3f4f6;">
                <div class="container">
                    <h1 style="font-size:3rem;">${safeName}</h1>
                    <p style="font-size:1.2rem;">${safeTagline}</p>
                    <a href="#" class="btn">View Projects</a>
                </div>
            </section>
            <section class="section">
                <div class="container">
                    <h2 style="font-size:2rem; text-align:center;">Recent Work</h2>
                    <div class="grid-3">
                        <div class="card"><img src="https://placehold.co/600x400/DDD/white?text=Project+Alpha" style="width:100%; border-radius:20px;"><h3>Brand Identity</h3><p>Minimalist design for fintech startup.</p></div>
                        <div class="card"><img src="https://placehold.co/600x400/DDD/white?text=Project+Beta" style="width:100%; border-radius:20px;"><h3>E‑commerce UI</h3><p>Modern shop interface with high conversion.</p></div>
                        <div class="card"><img src="https://placehold.co/600x400/DDD/white?text=Project+Gamma" style="width:100%; border-radius:20px;"><h3>Motion Graphics</h3><p>Animated explainer for creative agency.</p></div>
                    </div>
                </div>
            </section>`;
        }
        else if (category === 'shop') {
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
                    <h2 style="font-size:2rem; text-align:center;">Featured Products</h2>
                    <div class="grid-3">
                        <div class="card"><i class="fas fa-headphones" style="font-size:3rem; color:#10b981;"></i><h3>Wireless Headphones</h3><p>Noise cancelling, 40hr battery.</p><span style="font-weight:bold;">$89</span> <button class="btn" style="padding:6px 16px; margin-top:10px;">Buy</button></div>
                        <div class="card"><i class="fas fa-watch" style="font-size:3rem; color:#10b981;"></i><h3>Smart Watch</h3><p>Fitness tracker + notifications.</p><span style="font-weight:bold;">$149</span> <button class="btn" style="padding:6px 16px; margin-top:10px;">Buy</button></div>
                        <div class="card"><i class="fas fa-tshirt" style="font-size:3rem; color:#10b981;"></i><h3>Organic Cotton Tee</h3><p>Eco-friendly, premium fit.</p><span style="font-weight:bold;">$29</span> <button class="btn" style="padding:6px 16px; margin-top:10px;">Buy</button></div>
                    </div>
                </div>
            </section>`;
        }
        
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${safeName} | Premium Website</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">
            ${style}
        </head>
        <body>
            <header>
                <div class="container" style="display:flex; justify-content:space-between; align-items:center; padding:18px 24px;">
                    <strong style="font-size:1.5rem; color:${primaryColor};">${safeName}</strong>
                    <nav>
                        <a href="#" style="margin:0 12px; text-decoration:none; color:#4b5563;">Home</a>
                        <a href="#" style="margin:0 12px; text-decoration:none; color:#4b5563;">About</a>
                        <a href="#" style="margin:0 12px; text-decoration:none; color:#4b5563;">Contact</a>
                    </nav>
                </div>
            </header>
            ${mainContent}
            <footer>
                <div class="container">
                    <p>© ${currentYear} ${safeName}. All rights reserved. | contact@${safeName.toLowerCase().replace(/\s/g,'')}.com</p>
                    <p style="margin-top:12px;"><i class="fas fa-globe"></i> Professional website powered by ProGen</p>
                </div>
            </footer>
        </body>
        </html>`;
    }

    function updatePreviewAndStore() {
        const business = businessNameInput.value.trim() || "Your Brand";
        const tagline = taglineInput.value.trim() || "We build the future";
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
        if (!currentGeneratedHTML) {
            updatePreviewAndStore();
        }
        const blob = new Blob([currentGeneratedHTML], { type: 'text/html' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        const businessSlug = (businessNameInput.value.trim() || "website").replace(/\s+/g, '-').toLowerCase();
        link.href = url;
        link.download = `${businessSlug}-pro-site.html`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }

    generateBtn.addEventListener('click', () => {
        updatePreviewAndStore();
        generateBtn.innerHTML = '<i class="fas fa-check-circle"></i> Generated!';
        setTimeout(() => {
            generateBtn.innerHTML = '<i class="fas fa-magic"></i> Generate Website';
        }, 1500);
    });
    downloadBtn.addEventListener('click', downloadHTML);
    
    // Initial preview
    updatePreviewAndStore();
    setActiveCategory('business');
});
