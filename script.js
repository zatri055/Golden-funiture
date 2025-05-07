 const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const priceSlider = document.getElementById('priceSlider');
    const priceValue = document.getElementById('priceValue');
    const productCards = document.querySelectorAll('.product-card');

    function filterProducts() {
      const search = searchInput.value.toLowerCase();
      const category = categoryFilter.value.toLowerCase();
      const maxPrice = parseInt(priceSlider.value);

      priceValue.textContent = maxPrice;

      productCards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        const productCategory = card.dataset.category.toLowerCase();
        const price = parseInt(card.dataset.price);

        const matchesSearch = name.includes(search);
        const matchesCategory = category === 'all' || productCategory === category;
        const matchesPrice = price <= maxPrice;

        card.style.display = (matchesSearch && matchesCategory && matchesPrice) ? 'block' : 'none';
      });
    }

    searchInput.addEventListener('input', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);
    priceSlider.addEventListener('input', filterProducts);

    filterProducts(); // Initial call
