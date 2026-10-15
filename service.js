// 1. Define your gallery data source
const images = [
  { src: 'img/cloud-solutions.jpg', alt: 'Cloud Solutions Logo' },
  { src: 'img/cybersecurity.jpg', alt: 'Cybersecurity Photo' },
  { src: 'img/software-development.jpg', alt: 'Software Development' },
  { src: 'img/it-infrastructure.jpeg', alt: 'IT Infrastructure' }
];

const galleryGrid = document.getElementById('galleryGrid');
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const closeBtn = document.getElementById('closeBtn');

// 2. Dynamically render images into the DOM
function initGallery() {
  const fragment = document.createDocumentFragment();
  
  images.forEach(image => {
    const imgEl = document.createElement('img');
    imgEl.src = image.src;
    imgEl.alt = image.alt;
    imgEl.classList.add('gallery-item');
    fragment.appendChild(imgEl);
  });
  
  galleryGrid.appendChild(fragment);
}

// 3. Open Lightbox using Event Delegation
galleryGrid.addEventListener('click', (e) => {
  if (e.target.classList.contains('gallery-item')) {
    lightboxModal.style.display = 'flex';
    lightboxImg.src = e.target.src;
    lightboxImg.alt = e.target.alt;
    lightboxCaption.textContent = e.target.alt;
  }
});

// 4. Close Lightbox Event Handlers
function closeLightbox() {
  lightboxModal.style.display = 'none';
}

closeBtn.addEventListener('click', closeLightbox);

// Close if user clicks outside the image container
lightboxModal.addEventListener('click', (e) => {
  if (e.target === lightboxModal) {
    closeLightbox();
  }
});

// Close via keyboard Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightboxModal.style.display === 'flex') {
    closeLightbox();
  }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', initGallery);