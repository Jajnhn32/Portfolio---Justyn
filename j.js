window.addEventListener('resize', function() {
    const img = document.getElementById('myImage');
    const maxWidth = window.innerWidth * 0.8; // Adjust max width as needed
    img.style.width = Math.min(maxWidth, img.naturalWidth) + 'px';
  });