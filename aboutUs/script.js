// Function to handle accordion click
function handleAccordionClick(header) {
  const accordionItem = header.parentElement.parentElement;
  const accordionContent = header.parentElement.nextElementSibling;

  if (header.classList.contains("active")) {
    // If the clicked accordion is already active, do nothing
    return;
  }

  // Close all other accordion items
  document.querySelectorAll(".accordion-item").forEach((item) => {
    const itemHeader = item.querySelector(".accordion-header");
    const itemContent = item.querySelector(".accordion-content");

    if (item !== accordionItem) {
      itemHeader.classList.remove("active");
      itemContent.style.maxHeight = 0;
    }
  });

  // Activate the clicked item
  header.classList.add("active");
  accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
}

// Add event listeners to accordion headers and SVG icons
document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    handleAccordionClick(header);
  });

  const svgIcon = header.nextElementSibling;
  if (svgIcon) {
    svgIcon.addEventListener("click", () => {
      handleAccordionClick(header);
    });
  }
});

// Ensure that the initial open accordion content is correctly set
document.addEventListener("DOMContentLoaded", () => {
  const activeHeader = document.querySelector(".accordion-header.active");
  if (activeHeader) {
    const activeContent = activeHeader.parentElement.nextElementSibling;
    activeContent.style.maxHeight = activeContent.scrollHeight + "px";
  }
});
