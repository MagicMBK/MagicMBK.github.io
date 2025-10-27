<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>L'Arrosticino Itinerante - L'autentico sapore d'Abruzzo, dove vuoi tu!</title>
    
    <!-- Google Fonts: Playfair Display (titoli) e Lato (testo) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
    
    <!-- Font Awesome per le icone -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">

    <style>
        /* --- Impostazioni Generali e Variabili --- */
        :root {
            --primary-color: #c0392b; /* Rosso peperoncino/arrosticino */
            --secondary-color: #f4f1de; /* Crema/panna */
            --dark-color: #2c3e50; /* Grigio scuro per testo */
            --light-color: #ecf0f1;
            --font-heading: 'Playfair Display', serif;
            --font-body: 'Lato', sans-serif;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: var(--font-body);
            color: var(--dark-color);
            line-height: 1.6;
            background-color: #fff;
        }

        h1, h2, h3 {
            font-family: var(--font-heading);
            color: var(--primary-color);
            margin-bottom: 20px;
        }

        h1 { font-size: 3.5rem; }
        h2 { font-size: 2.5rem; text-align: center; margin-bottom: 40px; }
        h3 { font-size: 1.8rem; }

        .container {
            max-width: 1100px;
            margin: 0 auto;
            padding: 0 20px;
        }

        section {
            padding: 80px 0;
        }

        .section-light {
            background-color: var(--secondary-color);
        }

        .section-dark {
            background-color: #fff;
        }
        
        /* --- Navigazione --- */
        .navbar {
            background: rgba(44, 62, 80, 0.95);
            color: #fff;
            padding: 15px 30px;
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 1000;
            transition: all 0.3s ease-in-out;
        }

        .navbar .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .navbar .logo {
            font-family: var(--font-heading);
            font-size: 1.5rem;
            color: var(--secondary-color);
            text-decoration: none;
        }

        .navbar .logo i {
            color: var(--primary-color);
        }

        .navbar .nav-links {
            display: flex;
            list-style: none;
        }

        .navbar .nav-links a {
            color: #fff;
            text-decoration: none;
            margin-left: 25px;
            font-weight: 400;
            transition: color 0.3s;
        }

        .navbar .nav-links a:hover {
            color: var(--primary-color);
        }
        
        /* --- Menu Mobile --- */
        .navbar .menu-toggle {
            display: none;
            font-size: 1.5rem;
            cursor: pointer;
        }

        /* --- Hero Section --- */
        .hero {
            background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2') no-repeat center center/cover;
            height: 100vh;
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 0 20px;
        }

        .hero h1 {
            color: #fff;
            font-size: 4rem;
            margin-bottom: 10px;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.7);
        }

        .hero p {
            font-size: 1.4rem;
            max-width: 600px;
            margin-bottom: 30px;
        }

        .btn {
            display: inline-block;
            padding: 12px 30px;
            background-color: var(--primary-color);
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            font-weight: 700;
            transition: background-color 0.3s;
        }

        .btn:hover {
            background-color: #a93226;
        }

        /* --- Sezioni Contenuto --- */
        .grid-2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: center;
        }
        
        .text-content p {
            margin-bottom: 20px;
        }
        
        .text-content ul {
            list-style: none;
        }

        .text-content ul li {
            margin-bottom: 10px;
            padding-left: 25px;
            position: relative;
        }
        
        .text-content ul li::before {
            content: '\f00c'; /* Icona spunta di Font Awesome */
            font-family: 'Font Awesome 6 Free';
            font-weight: 900;
            color: var(--primary-color);
            position: absolute;
            left: 0;
        }

        .image-content img {
            width: 100%;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        /* --- Sezione Menu --- */
        .menu-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }
        
        .menu-item {
            background: #fff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            text-align: center;
            transition: transform 0.3s;
        }

        .menu-item:hover {
            transform: translateY(-10px);
        }

        .menu-item img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .menu-item-content {
            padding: 20px;
        }

        .menu-item-content h3 {
            color: var(--dark-color);
            margin-bottom: 10px;
        }

        .price {
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--primary-color);
        }

        /* --- Sezione Innovazione --- */
        .workflow {
            text-align: center;
        }
        .workflow-steps {
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-top: 40px;
            flex-wrap: wrap;
        }
        .step {
            flex-basis: 200px;
            margin: 20px;
        }
        .step i {
            font-size: 3rem;
            color: var(--primary-color);
            margin-bottom: 15px;
        }
        .step h3 {
            font-size: 1.2rem;
        }
        
        /* --- Sezione Dove Siamo --- */
        .map-container {
            margin-top: 40px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            border-radius: 10px;
            overflow: hidden;
        }
        .map-container iframe {
            width: 100%;
            height: 400px;
            border: 0;
        }
        
        .social-feed {
            margin-top: 40px;
        }
        .social-feed h3 {
            text-align: center;
            margin-bottom: 20px;
        }
        /* Qui andrebbe il widget di Instagram. Mettiamo un placeholder. */
        .social-feed-placeholder {
            background-color: var(--light-color);
            padding: 40px;
            text-align: center;
            border-radius: 10px;
            border: 2px dashed #ccc;
        }

        /* --- Sezione Contatti --- */
        .contact-form .container {
            max-width: 700px;
        }
        .contact-form .form-group {
            margin-bottom: 20px;
        }
        .contact-form label {
            display: block;
            margin-bottom: 5px;
        }
        .contact-form input,
        .contact-form textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .contact-form textarea {
            height: 150px;
        }

        /* --- Footer --- */
        .footer {
            background: var(--dark-color);
            color: #fff;
            text-align: center;
            padding: 30px 0;
        }
        .footer .social-links a {
            color: #fff;
            font-size: 1.5rem;
            margin: 0 10px;
            transition: color 0.3s;
        }
        .footer .social-links a:hover {
            color: var(--primary-color);
        }

        /* --- Responsive Design --- */
        @media(max-width: 768px) {
            h1 { font-size: 2.5rem; }
            h2 { font-size: 2rem; }
            .hero { height: 80vh; }
            .hero h1 { font-size: 3rem; }
            .navbar .nav-links { display: none; }
            .navbar .menu-toggle { display: block; }
            .navbar .nav-links {
                position: absolute;
                top: 60px;
                left: 0;
                width: 100%;
                background: rgba(44, 62, 80, 0.95);
                flex-direction: column;
                padding: 20px 0;
            }
            .navbar .nav-links.active {
                display: flex;
            }
            .navbar .nav-links a {
                margin: 10px 0;
            }
            .grid-2 {
                grid-template-columns: 1fr;
                text-align: center;
            }
            .workflow-steps {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>

    <!-- Navigazione -->
    <nav class="navbar">
        <div class="container">
            <a href="#hero" class="logo"><i class="fas fa-fire"></i> L'Arrosticino Itinerante</a>
            <ul class="nav-links">
                <li><a href="#concept">Il Concetto</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#innovation">Innovazione</a></li>
                <li><a href="#where">Dove Siamo</a></li>
                <li><a href="#contact">Contatti</a></li>
            </ul>
            <div class="menu-toggle" id="mobile-menu">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <header id="hero" class="hero">
        <h1>L'Arrosticino Itinerante</h1>
        <L'autentica esperienza di strada abruzzese, direttamente a te. Veloci, buoni, indimenticabili.</p>
        <a href="#where" class="btn">Scopri Dove Trovarci</a>
    </header>

    <main>
        <!-- Sezione Il Concetto -->
        <section id="concept" class="section-light">
            <div class="container">
                <div class="grid-2">
                    <div class="text-content">
                        <h2>Tradizione in Movimento</h2>
                        <p>Portiamo l'autentico sapore degli arrosticini abruzzesi direttamente nel cuore della tua città. Non è solo street food, è un pezzo di tradizione che viaggia su due ruote.</p>
                        <p>La nostra missione è offrire un'esperienza gastronomica memorabile, veloce e di alta qualità, diventando il punto di riferimento per tutti gli amanti della carne alla griglia.</p>
                        <ul>
                            <li>Prodotto di nicchia e di altissima qualità</li>
                            <li>Efficienza operativa per un servizio lampo</li>
                            <li>Flessibilità totale: eventi, uffici, mercati</li>
                        </ul>
                    </div>
                    <div class="image-content">
                        <img src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="I due food truck dell'Arrosticino Itinerante">
                    </div>
                </div>
            </div>
        </section>

        <!-- Sezione Menu -->
        <section id="menu" class="section-dark">
            <div class="container">
                <h2>Assapora la Tradizione</h2>
                <div class="menu-grid">
                    <div class="menu-item">
                        <img src="https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Arrosticini di carne">
                        <div class="menu-item-content">
                            <h3>Arrosticini Classici</h3>
                            <p>La vera specialità abruzzese. Carne ovina selezionata, infilata a mano e cotta alla perfezione sulla nostra griglia "canala".</p>
                            <p class="price">€1.00 - €1.30 cad.</p>
                        </div>
                    </div>
                    <div class="menu-item">
                        <img src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Menu combo con arrosticini e birra">
                        <div class="menu-item-content">
                            <h3>Menu Combo</h3>
                            <p>La scelta perfetta per una pausa pranzo o una cena sfiziosa. 10 arrosticini, pane casereccio bruschettato e una bibita a scelta.</p>
                            <p class="price">€13.00 - €15.00</p>
                        </div>
                    </div>
                    <div class="menu-item">
                        <img src="https://images.pexels.com/photos/1267300/pexels-photo-1267300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Birra artigianale">
                        <div class="menu-item-content">
                            <h3>Bevande</h3>
                            <p>Per accompagnare il tuo sapore preferito: birre artigianali abruzzesi, un bicchiere di Montepulciano d'Abruzzo o le migliori bibite analcoliche.</p>
                            <p class="price">Disponibili al nostro truck-bar!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Sezione Innovazione -->
        <section id="innovation" class="section-light">
            <div class="container workflow">
                <h2>Il Nostro Sistema: Veloce e Intelligente</h2>
                <p>Abbiamo rivoluzionato lo street food per eliminare le attese e darti il massimo del gusto in minimo tempo. Il nostro segreto? Un team di due veicoli che lavorano in perfetta sincronia.</p>
                <div class="workflow-steps">
                    <div class="step">
                        <i class="fas fa-utensils"></i>
                        <h3>1. Scegli</h3>
                        <p>Ordina al Truck Cucina, dove le griglie sono sempre accese.</p>
                    </div>
                    <div class="step">
                        <i class="fas fa-cash-register"></i>
                        <h3>2. Paga</h3>
                        <p>Vai all'Ape Cassa, paga e ritira subito le tue bevande. Niente code!</p>
                    </div>
                    <div class="step">
                        <i class="fas fa-fire-burner"></i>
                        <h3>3. Gusta</h3>
                        <p>Torna al Truck Cucina con lo scontrino: i tuoi arrosticini sono caldi e pronti per te.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Sezione Dove Siamo -->
        <section id="where" class="section-dark">
            <div class="container">
                <h2>Ci Trovi Qui... e Ovunque!</h2>
                <p style="text-align: center;">Siamo un itinerante! Seguici sui social per scoprire la nostra posizione giornaliera o trovarci ai prossimi eventi.</p>
                
                <div class="map-container">
                    <!-- Sostituisci con l'URL della tua mappa Google Maps incorporata -->
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44105.13574474387!2d9.663739!3d45.695374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478d7e423d0a14a1%3A0x19126a8837f0d8c!2sBergamo%2C%20Italy!5e0!3m2!1sen!2sus!4v1678886400000!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

                <div class="social-feed">
                    <h3>Seguici su Instagram!</h3>
                    <!-- Qui puoi incorporare un widget come LightWidget per mostrare il tuo feed Instagram -->
                    <div class="social-feed-placeholder">
                        <i class="fab fa-instagram fa-3x"></i>
                        <p>Il nostro feed Instagram con le posizioni, le foto più golose e le promozioni!</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Sezione Contatti -->
        <section id="contact" class="section-light">
            <div class="container contact-form">
                <h2>Organizza il Tuo Evento con Noi</h2>
                <p style="text-align: center;">Matrimoni, feste private, eventi aziendali. Portiamo l'autentico sapore d'Abruzzo dove vuoi tu. Compila il form per richiedere un preventivo.</p>
                <form>
                    <div class="form-group">
                        <label for="name">Il tuo Nome</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">La tua Email</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Dettagli dell'Evento</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit" class="btn">Invia Richiesta</button>
                </form>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="social-links">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fas fa-envelope"></i></a>
            </div>
            <p>&copy; 2024 L'Arrosticino Itinerante. Tutti i diritti riservati. P.IVA [Da Inserire]</p>
        </div>
    </footer>

    <!-- JavaScript per il menu mobile -->
    <script>
        const mobileMenu = document.getElementById('mobile-menu');
        const navLinks = document.querySelector('.navbar .nav-links');

        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenu.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // Chiudi il menu mobile quando si clicca su un link
        document.querySelectorAll('.navbar .nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenu.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            });
        });
    </script>

</body>
</html>
