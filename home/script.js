// Smooth navigation and interactive elements
function navigateTo(section) {
    let targetId;
  
    switch (section) {
      case 'product':
        targetId = 'product-categories';
        break;
      case 'service':
        targetId = 'map-section';
        break;
      default:
        console.warn('Section not recognized');
        return;
    }
  
    // Scroll smoothly to the target section
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  
    // Highlight active link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });
    document.querySelector(`[data-section="${section}"]`).classList.add('active');
  }
  
  // Improved search functionality with debounce
  const searchInput = document.querySelector('.search-bar input');
  let searchTimeout;
  
  searchInput.addEventListener('keyup', function (event) {
    clearTimeout(searchTimeout);
  
    // Only search after user stops typing for 500ms
    searchTimeout = setTimeout(() => {
      if (event.key === 'Enter' || this.value) {
        // Call a placeholder search function (or replace with actual search functionality)
        searchFor(this.value);
      }
    }, 500);
  });
  
  function searchFor(query) {
    if (query.trim()) {
      alert(`Searching for: ${query}`);
      // Placeholder for future search integration, e.g., fetch results or filter displayed items
      // Example: fetchResults(query);
    }
  }
  
  // Placeholder for adding more interactive elements in future
  document.addEventListener('DOMContentLoaded', () => {
    // Event listeners or functionality to enhance user interaction
    console.log('Page fully loaded and interactive elements ready');
  });
  