// ==================================
// 1. Toggle humbugger menu;
// By default, the .link tag should 
// display none.
// ==================================

const link = document.getElementsByClassName('link')[0];
const hamburger = document.getElementsByClassName('hamburger')[0];

link.style.display = 'none';

hamburger.addEventListener('click', () => {
  if (link.style.display === 'none') {
    link.style.display = 'block';
  } else {
    link.style.display = 'none';
  }
});

function resetMenu () {
  if (window.innerWidth >= 900) {
    link.style.display = 'flex';
  } else if (window.innerWidth < 900) {
    link.style.display = 'none';
  }
}

resetMenu();
window.addEventListener('resize', resetMenu);


// ==================================
// 2. Display products based on 
// All, Men or Female categories.
// ==================================

const productTab = document.querySelector('input[name="tabset"]:checked');

const catalogue = document.querySelectorAll('.catalogue');


productTab.addEventListener('change', displayProducts);

function displayProducts() {
  // Get the selected tab value
  const selectedTab = productTab.value;

  // Loop through all the product items and display only those that match the selected tab value
  catalogue.forEach(product => {
    const productTag = product.querySelector('.tag').textContent;
    if (selectedTab === 'All' || selectedTab === productTag) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });

  // Display a message if the selected tab does not match any product categories
  const babiesTab = document.querySelector('input[value="Babies"]');
  if (selectedTab === 'Babies') {
    const message = document.createElement('p');
    message.textContent = 'There are no products in the Babies category.';
    message.style.color = 'red';
    const parent = babiesTab.parentNode;
    parent.insertBefore(message, parent.lastChild);
  } else {
    const message = document.querySelector('input[value="Babies"] + p');
    if (message) message.remove();
  }
}







// ==================================
// 3. Display products based on 
// search keywords in the input fields.
// ==================================

const search = document.querySelector('.search_product');
const products = document.querySelectorAll('.percard');

search.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();

  let matchedProducts = 0;

  products.forEach((product) => {
    const title = product.querySelector('p').textContent.toLowerCase();

    if (title.includes(searchTerm)) {
      product.style.display = '';
      matchedProducts++;
    } else {
      product.style.display = 'none';
    }
  });

  const message = document.querySelector('.message');
  if (matchedProducts === 0) {
    message.textContent = `No products matching "${searchTerm}" were found.`;
  } else {
    message.textContent = '';
  }
});
