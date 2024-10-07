const form = document.querySelector('form');
const productContainer = document.querySelector('.Display-products');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const productName = document.getElementById('p-name').value;
  const productPrice = document.getElementById('p-price').value;
  const productDescription = document.getElementById('p-description').value;

  // Create a new product element
  const productElement = document.createElement('div');
  productElement.classList.add('item');
  productElement.innerHTML = `
    <p>${productName}</p>
    <p>Price: ${productPrice}</p>
    <p>${productDescription}</p>
  `;

  // Append the product element to the container
  productContainer.appendChild(productElement);
});