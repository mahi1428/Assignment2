
const images = [
    { src: "images/flowers-pink-large.jpg", thumb: "images/flowers-pink-small.jpg", caption: "Pink flowers" },
    { src: "images/flowers-purple-large.jpg", thumb: "images/flowers-purple-small.jpg", caption: "Purple flowers" },
    { src: "images/flowers-red-large.jpg", thumb: "images/flowers-red-small.jpg", caption: "Red flowers" },
    { src: "images/flowers-white-large.jpg", thumb: "images/flowers-white-small.jpg", caption: "White flowers" },
    { src: "images/flowers-yellow-large.jpg", thumb: "images/flowers-yellow-small.jpg", caption: "Yellow flowers" }
];

const thumbnailList = document.getElementById('thumbnailList');
const displayedPic = document.getElementById('displayedPic');
const figcaption = document.getElementById('figcaption');

// Dynamically build the thumbnail list
images.forEach((image, index) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = image.thumb;
    img.alt = image.caption;
    img.className = 'smallPic' + (index === 0 ? ' active' : ' inactive');
    img.addEventListener('click', function () {
        displayedPic.src = image.src;
        figcaption.textContent = image.caption;

        // Update the active/inactive state
        document.querySelectorAll('.smallPic').forEach(pic => {
            pic.classList.remove('active');
            pic.classList.add('inactive');
        });
        img.classList.add('active');
    });
    li.appendChild(img);
    thumbnailList.appendChild(li);
});
