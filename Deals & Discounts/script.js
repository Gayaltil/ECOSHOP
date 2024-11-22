// JavaScript to filter deals based on category and discount percentage

function filterDeals() {
    const category = document.getElementById('category').value;
    const discount = parseInt(document.getElementById('discount').value) || 0;
    
    const dealItems = document.querySelectorAll('.deal-item');
    
    dealItems.forEach(deal => {
        const dealCategory = deal.getAttribute('data-category');
        const dealDiscount = parseInt(deal.getAttribute('data-discount'));
        
        // Show the deal if it matches the category and discount filter
        if ((category === 'all' || dealCategory === category) && dealDiscount >= discount) {
            deal.style.display = 'block';
        } else {
            deal.style.display = 'none';
        }
    });
}
