// Preloads the images for the banner
function preloadBannerImages() {
    const bannerImages = ["images/banner1.jpg", "images/banner2.jpg", "images/banner3.jpg"];
    const preloaded = [];
    bannerImages.forEach((image) => {
        const img = new Image();
        img.src = image;
        preloaded.push(img);
    });
    return preloaded;
}

// Cycles through banner images every 3 seconds
function cycleBannerImages(preloaded) {
    let index = 0;
    const banner = document.getElementById("bannerImage");

    setInterval(() => {
        index = (index + 1) % preloaded.length;
        banner.src = preloaded[index].src;
    }, 3000);
}

// Called when the page loads
function onPageLoad() {
    const preloadedImages = preloadBannerImages();
    cycleBannerImages(preloadedImages);
}

window.onload = onPageLoad;
