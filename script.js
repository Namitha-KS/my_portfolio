// Show resume in iframe
function showResume() {
    const pdfViewer = document.getElementById('pdfViewer');
    pdfViewer.style.display = 'flex'; // Show and center the popup
}

// Close resume popup when clicking outside of iframe
document.addEventListener('click', function (event) {
    const pdfViewer = document.getElementById('pdfViewer');
    const iframe = pdfViewer.querySelector('iframe');

    // Check if click is outside the iframe
    if (pdfViewer.style.display === 'flex' && !iframe.contains(event.target)) {
        pdfViewer.style.display = 'none'; // Close the popup
    }
});
