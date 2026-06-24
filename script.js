 // --- Preloader Controller ---
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
            initializeCounters();
        });

        // --- Sticky Header Progress Meter ---
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            const winScroll = document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;

            document.getElementById('progress-bar').style.width = scrolled + '%';

            if (window.scrollY > 50) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }

            // Back to top indicator visibility status
            const b2t = document.getElementById('backToTop');
            if (window.scrollY > 400) { b2t.style.display = 'flex'; } else { b2t.style.display = 'none'; }
        });

        // --- Responsive Mobile Nav Toggle System ---
        function toggleMenu() {
            document.getElementById('nav-menu').classList.toggle('active');
        }
        // Smooth auto closing menu links setup loop
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('nav-menu').classList.remove('active');
            });
        });

        // --- Dark Theme Toggle Mechanism ---
        function toggleTheme() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
            const icon = document.querySelector('#theme-btn i');

            document.documentElement.setAttribute('data-theme', targetTheme);
            icon.className = targetTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
        document.body.classList.toggle("dark")


        // --- Live Interactive Menu Filter Engine ---
        function filterCategory(category) {
            // Update Active Buttons Layout State
            document.querySelectorAll('.filter-tag, .category-item').forEach(btn => btn.classList.remove('active'));
            event.currentTarget.classList.add('active');

            const cards = document.querySelectorAll('.menu-card');
            cards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 50);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        }

        // --- Live Realtime Search Functionality ---
        function searchMenu() {
            const query = document.getElementById('menu-search').value.toLowerCase();
            const cards = document.querySelectorAll('.menu-card');

            cards.forEach(card => {
                const title = card.querySelector('h3').innerText.toLowerCase();
                const desc = card.querySelector('p').innerText.toLowerCase();
                if (title.includes(query) || desc.includes(query)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // --- Add To Cart Feedback Toast Interactivity ---
        function triggerCartAnimation(button) {
            button.innerText = "Added ✓";
            button.style.background = "#388e3c";
            setTimeout(() => {
                button.innerText = "Order";
                button.style.background = "linear-gradient(135deg, var(--primary), #a37f3d)";
            }, 2000);
        }

        // --- Signature Dishes Presentation Loop Slider ---
        let slideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        setInterval(() => {
            slides[slideIndex].classList.remove('active');
            slideIndex = (slideIndex + 1) % slides.length;
            slides[slideIndex].classList.add('active');
        }, 5000);

        // --- Dynamic Counter Execution Core Engine ---
        function initializeCounters() {
            const counters = document.querySelectorAll('.counter');
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                const speed = target / 100;
                const updateCount = () => {
                    const current = +counter.innerText;
                    if (current < target) {
                        counter.innerText = Math.ceil(current + speed);
                        setTimeout(updateCount, 25);
                    } else {
                        counter.innerText = target.toLocaleString() + "+";
                    }
                };
                updateCount();
            });
        }

        // --- Infinite Testimonial Alternator Loop ---
        let testimonialIndex = 0;
        const testimonials = document.querySelectorAll('.testimonial-card');
        setInterval(() => {
            testimonials[testimonialIndex].classList.remove('active');
            testimonialIndex = (testimonialIndex + 1) % testimonials.length;
            testimonials[testimonialIndex].classList.add('active');
        }, 6000);

        // --- Custom Architecture Lightbox System Engine ---
        function openLightbox(element) {
            const src = element.querySelector('img').src;
            document.getElementById('lightbox-img').src = src;
            document.getElementById('lightbox').style.display = 'flex';
        }

        // --- Global Form Booking Submission Assert Handler ---
        function handleReservation(event) {
            event.preventDefault();
            alert('Your request has successfully registered inside the Shahi Imperial Logs system. Our concierge office will contact you via secure call momentarily.');
            event.target.reset();
        }

        // --- Scroll Utilities ---
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }





 let api = [{
    iykana:"north",
    image: "./image/imag1.webp",
    title :"hahi Paneer Makhani",
    detail:"Rich cottage cheese cubes tossed tenderly within thick caramelized cashew-tomato reductions.",
    price:"380", 
 },
 {
    iykana:"north",
    image:"./image/image2.jpg",
    title :"Peshawari Dal Makhani",
    detail:"Slowly structured black lentils stewed overnight over active clay-oven glowing charcoal nodes.",
    price:"340",
  
    
    
    
    
 },
 {
    iykana:"south",
    image:"./image/image3.png", 
    title :"Imperial Gold Paper Dosa",
    detail:"Ultra-crisp rice-lentil golden crepes aligned with aromatic spiced mash filling blocks.",
    price:"260",
    
   
      

 },
,{
    iykana:"fastfood",
    image:"./image/image4.jpg",
    title :"Tandoori Paneer Fusion Pizza",
    detail:"lay-fired modern flatbread topped with spicy cottage cheese kernels and organic greens.",
    price:"420",
}]

let a = document.getElementById("menu-container")
a.innerHTML = api.map((item)=>{
return`
<div class="menu-card" data-category="${item.iykana}">
                <div class="menu-img-wrap">
                    <img src="${item.image}"alt="Butter Paneer">
                    <div class="veg-badge"></div>
                </div>
                <div class="menu-info">
                    <h3>${item.title}</h3>
                    <p>${item.detail}</p>
                    <div class="menu-meta">
                        <span class="price">₹${item.price}</span>
                        <button class="btn btn-primary" onclick="triggerCartAnimation(this)">Order</button>
                    </div>
                </div>
            </div>

`
}).join("")


// //////=====about
// let about = [{
// img:"https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=800",
// hedig:"25+",
// title:"Years of Culinary Glory",
// title2:"Our Heritage Story"
// }
// ]


//   // /// === section
let section = [{
  class:"chef-card",
  img :"./image/image5.png",
  title : "Executive Head Chef",
  title2:"Grandmaster Ranveer Kapoor",
  detail : "Over 20 years managing royal palace heritage catering accounts globally."
},{
     class:"chef-card",
     img :"./image/image6.png",
     title:"Master Pastry & Bakery Artisan",
     title2:"Chef Ananya Sharma<",
     detail:"Specializes in crafting authentic, low-sugar luxury Indian confectionery."
}]
let Section = document.getElementById("card");
Section.innerHTML= section.map((itms)=>{
    return`<div class="${itms.class}">
                <div class="chef-img"><img src="${itms.img}"alt="Head Chef"></div>
                <div class="chef-details">
                    <span>${itms.title}</span>
                    <h3>${itms.title2}</h3>
                    <p>${itms.detail}</p>
                </div>
            </div>`
}).join("")
