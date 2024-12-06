// Preload all images in the gallery
function preloadGalleryImages() {
    const images = [
        "images/event.jpg",
        "images/working.jpg",
        "images/silhouette.jpg"
    ];
    images.forEach((image) => {
        const img = new Image();
        img.src = image;
    });
}

// Add rollover functionality to gallery thumbnails
function addRolloverEffect() {
    const thumbnails = [
        { id: "event", src: "images/event.jpg" },
        { id: "working", src: "images/working.jpg" },
        { id: "silhouette", src: "images/silhouette.jpg" }
    ];

    thumbnails.forEach((thumb) => {
        const element = document.getElementById(thumb.id);

        if (element) {
            element.addEventListener("mouseover", () => {
                element.style.transform = "scale(1.1)";
                element.style.transition = "transform 0.3s";
            });
            element.addEventListener("mouseout", () => {
                element.style.transform = "scale(1)";
            });

            // Add click event for lightbox effect
            element.addEventListener("click", () => openLightbox(thumb.src));
        } else {
            console.warn(`Element with ID "${thumb.id}" not found.`);
        }
    });
}

// Open the lightbox with the specified image
function openLightbox(imageSrc) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");

    lightboxImage.src = imageSrc;
    lightbox.style.display = "flex"; // Show the lightbox
}

// Close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.style.display = "none"; // Hide the lightbox
}

// Initialize page
function onPageLoad() {
    preloadGalleryImages();
    addRolloverEffect();
}

window.onload = onPageLoad;
