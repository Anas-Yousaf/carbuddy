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