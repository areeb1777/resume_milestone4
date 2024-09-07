// Function to listen for changes and update the resume data
function makeSectionEditable(sectionId: string) {
  const section = document.getElementById(sectionId);
  section?.addEventListener("input", () => {
    console.log(`${sectionId} updated:`, section.textContent); // Logs updated content in the console
    // You can add more logic here to store the updated content if needed
  });
}

// Initialize editable functionality for each section
function enableEditableResume() {
  makeSectionEditable("display-name");
  makeSectionEditable("display-email");
  makeSectionEditable("display-education");
  makeSectionEditable("display-work-experience");
  makeSectionEditable("display-skills");
}

// Call the function to enable editing after resume is generated
enableEditableResume();
