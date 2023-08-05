document.addEventListener("DOMContentLoaded", function() {
    // Get all images inside figure.wp-block-image.size-large
    const images = document.querySelectorAll('figure.wp-block-image.size-large img');
  
    // Attach a click event listener to each image
    images.forEach(function(image) {
      image.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        event.stopPropagation(); // Stop the event from propagating to the anchor tag
  
        // Create a lightbox container
        const lightbox = document.createElement("div");
        lightbox.id = "lightbox-overlay";
  
        // Create a container to hold the image and caption
        const contentContainer = document.createElement("div");
        contentContainer.className = "content-container";
  
        // Create an image element inside the content container
        const lightboxImage = document.createElement("img");
  
        // Wait for the image to load before setting its source
        lightboxImage.addEventListener("load", function() {
          // After the image loads, add it to the lightbox container
          contentContainer.appendChild(lightboxImage);
  
          // Check if alt text exists, otherwise set the caption text to an empty string
          const captionText = image.alt ? image.alt : '';
  
          // Create a caption element
          const caption = document.createElement("p");
          caption.innerText = captionText;
  
          // Append the caption below the image in the content container
          contentContainer.appendChild(caption);
        });
  
        // Set the source of the image
        lightboxImage.src = image.src;
  
        // Append the content container to the lightbox
        lightbox.appendChild(contentContainer);
  
        // Append the lightbox to the document body
        document.body.appendChild(lightbox);
  
        // Remove the lightbox when clicked
        lightbox.addEventListener("click", function() {
          document.body.removeChild(lightbox);
        });
      });
    });
  });
  