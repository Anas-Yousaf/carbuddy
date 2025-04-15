//animation of online
document.addEventListener("DOMContentLoaded", function() {
    const text = "Online.";
    const dynamicText = document.getElementById("dynamic-text");
    dynamicText.innerHTML = ""; // Clear the text initially

    let index = 0;
    

    function typeLetter() {
        if (index < text.length) {
            dynamicText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeLetter, 300); // Delay between each letter (150ms)
        } else {
            // Delay before resetting the animation
            setTimeout(() => {
                dynamicText.innerHTML = ""; // Clear the text
                index = 0; // Reset index
                typeLetter(); // Start again
            }, 2000); // Delay before restarting the typing effect (2000ms)
        }
    }

    typeLetter(); // Start typing effect
});


// customer review
const reviews = [
    "Great service and smooth car rentals!",
    "Very affordable prices and friendly staff.",
    "The car was in perfect condition, 100% recommend.",
    "Quick and easy booking process, will use again!"
];

let currentReview = 0;
const carImage = document.getElementById('car-image');
const reviewElement = document.getElementById('customer-review');
const bubbleCloud = document.getElementById('bubble-cloud');
const carContainer = document.querySelector('.car-container');

// Function to change review with animation
function changeReview() {
    // Hide bubble cloud and before/after elements
    bubbleCloud.style.opacity = '0';
    carContainer.classList.remove('show-before-after');

    // Move car off-screen to the left
    carImage.style.left = '-300%';

    // Wait for the car to exit, then change review and reset car's position to off-screen right
    setTimeout(() => {
        currentReview = (currentReview + 1) % reviews.length;
        reviewElement.textContent = reviews[currentReview];

        // Reset car to off-screen right before driving in again
        carImage.style.transition = 'none';  // Disable transition for instant position reset
        carImage.style.left = '300%'; // Reset to off-screen right

        // Use a slight delay to re-enable the transition and drive the car in from the right
        setTimeout(() => {
            carImage.style.transition = 'left 1s ease-in-out';
            carImage.style.left = '0'; // Car drives in
            
            // After car drives in, bubble cloud appears and before/after elements appear
            setTimeout(() => {
                bubbleCloud.style.opacity = '1';
                bubbleCloud.style.animation = 'bubbleAppear 0.8s ease-in-out';
                carContainer.classList.add('show-before-after');  // Show before/after elements
            }, 1000);  // Slight delay to sync with car entry
        }, 100);  // Small delay to reset car off-screen and prepare for the next entry
    }, 1000);  // Wait for car to drive out
}

// Automatically change review every 10 seconds
setInterval(changeReview, 10000);

// Initial animation trigger
setTimeout(() => {
    carImage.style.left = '0';  // Initial car drive-in from the right
    bubbleCloud.style.opacity = '1';  // Initial bubble show
    carContainer.classList.add('show-before-after');  // Show before/after elements on first load
}, 1000);



const blogs = [
    {
        title : "Road Trips Made Easy with Car Buddy",
        description : "Planning a road trip? Skip the hassle and enjoy the freedom with Car Buddy! Our wide range of vehicles ensures you find the perfect ride for your adventure. Affordable rates, flexible terms, and top-notch customer service—your dream journey starts here!",
        date : "12/4/2023",
        views : 890
    },
    {
        title : "Drive Your Way with Car Buddy",
        description : "Need a reliable car for a business meeting, weekend getaway, or daily errands? Car Buddy has you covered! Choose from our diverse fleet, and let us get you on the road quickly and conveniently. Experience comfort and reliability at your fingertips!",
        date : "3/9/2023",
        views : 900
    },
    {
        title : "Why Car Buddy is Your Best Travel Partner",
        description : "With Car Buddy, renting a car is no longer a chore. From budget-friendly options to luxury vehicles, we offer seamless bookings, transparent pricing, and round-the-clock support. Travel smarter, travel better—choose Car Buddy today!",
        date : "5/5/2024",
        views : 1200
    }
];

 const blogSection = document.querySelector('.blog-section');

 blogs.forEach ( (blog)=>{
     // Create a div element
 const blogCard = document.createElement('div');

 // Add the classes
blogCard.classList.add('col-md-3', 'blog-card');
 blogCard.innerHTML = `
<div class="blog-img">
            <small><i class="fa-regular fa-eye"> &nbsp; </i>${blog.views}</small>
            <img src="assets/images/main car 1 bg.png" alt="image">
          </div>
          <div class="blog-content-container">
            <div class="blog-title">
              <h4>${blog.title}</h4>
            </div>
            <div class="blog-content">
              ${blog.description}
            </div>
            <div class="blog-action">
              <button>Read More
                &nbsp;
                <i class="fa-solid fa-arrow-right"></i>
              </button>
              
              <small>${blog.date}</small>
            </div>
          </div>
 `;
 blogSection.append(blogCard);

 } );




 // Update copyright year automatically
document.getElementById('year').textContent = new Date().getFullYear();



// booking car detaiils

let currentSlide = 0;
const slides = document.querySelectorAll('.car-slide');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

let latestDetails = null;

function openBookingModal(name, price, image) {
    document.getElementById('car-name-input').value = name;
    document.getElementById('car-price-input').value = price;
    document.getElementById('car-image-input').value = image;
    document.getElementById('bookingModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('bookingModal').style.display = 'none';
}

function closePdfModal() {
    document.getElementById('pdfModal').style.display = 'none';
}

// Add this function to generate QR codes
function generateQRCode(text, elementId, size = 128) {
    const qr = qrcode(0, 'L');
    qr.addData(text);
    qr.make();
    const qrImg = qr.createImgTag(4, 0);
    const qrContainer = document.getElementById(elementId);
    qrContainer.innerHTML = qrImg;
    const img = qrContainer.querySelector('img');
    img.style.width = `${size}px`;
    img.style.height = `${size}px`;
    img.style.display = 'block';
    img.style.margin = '0 auto';
}

// Update the booking form submission handler
document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const carName = document.getElementById('car-name-input').value;
    const carPrice = parseFloat(document.getElementById('car-price-input').value);
    const carImage = document.getElementById('car-image-input').value;
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const pickupDateRaw = document.getElementById('pickup-date').value;
    const pickupTime = document.getElementById('pickup-time').value;
    const duration = parseInt(document.getElementById('duration').value);
    const specialRequests = document.getElementById('special-requests').value;

    const totalPrice = carPrice * duration;

    const formattedDate = new Date(pickupDateRaw).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    latestDetails = {
        carName,
        carPrice,
        carImage,
        fullName,
        email,
        phone,
        pickupDate: formattedDate,
        pickupTime,
        duration,
        totalPrice,
        specialRequests
    };

    // Generate booking reference
    const bookingRef = 'CB-' + Math.random().toString(36).substr(2, 8).toUpperCase();
    latestDetails.bookingRef = bookingRef;

    // Create QR code data string
    const qrData = `CarBuddy Booking\nRef: ${bookingRef}\nCar: ${carName}\nCustomer: ${fullName}\nPickup: ${formattedDate} at ${pickupTime}\nTotal: $${totalPrice}`;

    const content = `
        <div style="text-align: center;">
            <img src="assets/images/logo  1.jpeg" alt="CarBuddy" style="max-width: 100px;" />
            <h2 style="color: #5990B6;">CarBuddy - Booking Invoice</h2>
        </div>
        <hr />
        <div style="display: flex; justify-content: space-between;">
            <div>
                <p><strong>Booking Reference:</strong> ${bookingRef}</p>
                <p><strong>Car:</strong> ${carName}</p>
                <p><strong>Rate:</strong> $${carPrice}/day</p>
                <p><strong>Rental Duration:</strong> ${duration} day(s)</p>
                <p><strong>Total Price:</strong> $${totalPrice}</p>
            </div>
            <div id="qr-code-container"></div>
        </div>
        <hr />
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Pickup Date:</strong> ${formattedDate}</p>
        <p><strong>Pickup Time:</strong> ${pickupTime}</p>
        ${specialRequests ? `<p><strong>Special Requests:</strong> ${specialRequests}</p>` : ''}
    `;

    document.getElementById('pdf-content').innerHTML = content;
    document.getElementById('pdfModal').style.display = 'block';
    
    // Generate and display QR code
    generateQRCode(qrData, 'qr-code-container', 100);
    
    closeModal();
});

// Update the PDF generation function to include QR code
async function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const d = latestDetails;
    if (!d) return alert("Missing details");

    const logo = 'assets/images/logo  1.jpeg';
    const img = new Image();
    img.src = logo;

    img.onload = async () => {
        // Add logo
        doc.addImage(img, 'PNG', 80, 10, 50, 20);
        
        // Add title
        doc.setFontSize(18);
        doc.setTextColor(89, 144, 182);
        doc.text('CarBuddy - Booking Invoice', 105, 40, { align: 'center' });

        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);

        let y = 55;
        doc.text(`Booking Reference: ${d.bookingRef}`, 20, y);
        doc.text(`Car: ${d.carName}`, 20, y += 10);
        doc.text(`Rate: $${d.carPrice}/day`, 20, y += 10);
        doc.text(`Duration: ${d.duration} day(s)`, 20, y += 10);
        doc.text(`Total Price: $${d.totalPrice}`, 20, y += 10);

        // Generate QR code for PDF
        const qr = qrcode(0, 'L');
        const qrData = `CarBuddy Booking\nRef: ${d.bookingRef}\nCar: ${d.carName}\nCustomer: ${d.fullName}\nPickup: ${d.pickupDate} at ${d.pickupTime}\nTotal: $${d.totalPrice}`;
        qr.addData(qrData);
        qr.make();
        const qrImgData = qr.createDataURL(4, 0);
        
        // Add QR code to PDF (positioned to the right of the details)
        doc.addImage(qrImgData, 'PNG', 140, y - 40, 40, 40);

        y += 10;
        doc.line(20, y, 190, y);
        y += 10;

        doc.text(`Name: ${d.fullName}`, 20, y);
        doc.text(`Email: ${d.email}`, 20, y += 10);
        doc.text(`Phone: ${d.phone}`, 20, y += 10);
        doc.text(`Pickup Date: ${d.pickupDate}`, 20, y += 10);
        doc.text(`Pickup Time: ${d.pickupTime}`, 20, y += 10);
        if (d.specialRequests) {
            doc.text(`Special Requests: ${d.specialRequests}`, 20, y += 10);
        }

        y += 15;
        doc.setFontSize(10);
        doc.setTextColor(100);
        doc.text("Terms & Conditions", 20, y);
        doc.setFontSize(9);
        const terms = [
            "• Booking is subject to availability.",
            "• Cancellations within 24 hours may incur charges.",
            "• ID verification is required during pickup.",
            "• Present this QR code at pickup for verification."
        ];
        terms.forEach((line, i) => {
            doc.text(line, 20, y + 6 + (i * 6));
        });

        doc.setFontSize(10);
        doc.text("Thank you for choosing CarBuddy!", 105, 285, { align: 'center' });

        doc.save(`CarBuddy_${d.bookingRef}_Invoice.pdf`);
    };
}



// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Close mobile menu if open
        const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasNavbar'));
        if (offcanvas) offcanvas.hide();
        
        // Scroll to the target element
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
  
  // Scroll to top button functionality
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  });
  
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });