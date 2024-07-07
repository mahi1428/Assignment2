
// Array of images with their source, thumbnail, and caption
const images = [
    { src: "images/flowers-pink-large.jpg", thumb: "images/flowers-pink-small.jpg", caption: "Pink flowers" },
    { src: "images/flowers-purple-large.jpg", thumb: "images/flowers-purple-small.jpg", caption: "Purple flowers" },
    { src: "images/flowers-red-large.jpg", thumb: "images/flowers-red-small.jpg", caption: "Red flowers" },
    { src: "images/flowers-white-large.jpg", thumb: "images/flowers-white-small.jpg", caption: "White flowers" },
    { src: "images/flowers-yellow-large.jpg", thumb: "images/flowers-yellow-small.jpg", caption: "Yellow flowers" }
];

// Get HTML elements from the DOM
const thumbnailList = document.getElementById('thumbnailList'); // UL element for thumbnails
const displayedPic = document.getElementById('displayedPic'); // Main image element
const figcaption = document.getElementById('figcaption'); // Caption element

// Dynamically build the thumbnail list
images.forEach((image, index) => {
    // Create a new list item for each thumbnail
    const li = document.createElement('li');

    // Create an image element for the thumbnail
    const img = document.createElement('img');
    img.src = image.thumb; // Set thumbnail image source
    img.alt = image.caption; // Set alt text for accessibility
    img.className = 'smallPic' + (index === 0 ? ' active' : ' inactive'); // Set initial class based on index

    // Add click event listener to thumbnail
    img.addEventListener('click', function () {
        // Update main displayed image and caption
        displayedPic.src = image.src;
        figcaption.textContent = image.caption;

        // Update active/inactive state of thumbnails
        document.querySelectorAll('.smallPic').forEach(pic => {
            pic.classList.remove('active'); // Remove active class from all thumbnails
            pic.classList.add('inactive'); // Add inactive class to all thumbnails
        });
        img.classList.add('active'); // Add active class to clicked thumbnail
    });

    // Append thumbnail image to the list item
    li.appendChild(img);

    // Append list item to the UL element
    thumbnailList.appendChild(li);
});

