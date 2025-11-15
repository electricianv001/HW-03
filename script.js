// Constants
const API_URL = 'https://dog.ceo/api/breeds/image/random/20';
const ANIMATION_DELAY = 50;

// DOM Elements
const loadButton = document.querySelector('#loadButton');
const loader = document.querySelector('#loader');
const gallery = document.querySelector('#gallery');

// State
let isLoading = false;

/**
 * Shows loader and hides gallery
 */
function showLoader() {
  loader.classList.remove('loader_hidden');
  gallery.classList.add('grid_empty');
  loadButton.disabled = true;
}

/**
 * Hides loader and shows gallery
 */
function hideLoader() {
  loader.classList.add('loader_hidden');
  if (gallery.children.length > 0) {
    gallery.classList.remove('grid_empty');
  }
  loadButton.disabled = false;
}


function clearGallery() {
  gallery.innerHTML = '';
}

/**
 @param {string} url
 @returns {string} 
 */
function extractBreedName(url) {
  const match = url.match(/breeds\/([^\/]+)/);
  if (match) {
    return match[1].split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  }
  return 'Unknown Breed';
}

/**
 * @param {string} imageUrl - URL of the image
 * @param {number} index - Index for animation delay
 * @returns {HTMLElement} Card element
 */
function createGalleryItem(imageUrl, index) {
  const card = document.createElement('div');
  card.className = 'card';
  card.style.animationDelay = `${index * ANIMATION_DELAY}ms`;

  const image = document.createElement('img');
  image.className = 'card__img';
  image.src = imageUrl;
  image.alt = 'Dog photo';
  image.loading = 'lazy';

  const title = document.createElement('p');
  title.className = 'card__title';
  title.textContent = extractBreedName(imageUrl);

  card.appendChild(image);
  card.appendChild(title);

  return card;
}

/**
 * @param {string[]} imageUrls - Array of image URLs
 */
function renderImages(imageUrls) {
  const fragment = document.createDocumentFragment();

  imageUrls.forEach((imageUrl, index) => {
    const galleryItem = createGalleryItem(imageUrl, index);
    fragment.appendChild(galleryItem);
  });

  gallery.appendChild(fragment);
}

/**
 * @returns {Promise<string[]>} Array of image URLs
 */
async function fetchImagesAsync() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.status !== 'success') {
      throw new Error('API returned error status');
    }

    return data.message;
  } catch (error) {
    console.error('Error loading images:', error);
    alert('Failed to load images. Please try again.');
    throw error;
  } finally {
    console.log('Request completed');
  }
}

/**
 * Fetches images from API using .then().catch().finally() chains
 * @returns {Promise<string[]>} Array of image URLs
 */
function fetchImagesPromise() {
  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.status !== 'success') {
        throw new Error('API returned error status');
      }
      return data.message;
    })
    .catch(error => {
      console.error('Error loading images:', error);
      alert('Failed to load images. Please try again.');
      throw error;
    })
    .finally(() => {
      console.log('Request completed');
    });
}

/**
 * Handles button click event
 * @param {Event} event - Click event
 */
async function handleLoadButtonClick(event) {
  event.preventDefault();

  if (isLoading) {
    return;
  }

  isLoading = true;
  showLoader();
  clearGallery();

  try {
    // Using async/await approach
    const imageUrls = await fetchImagesAsync();

    // Alternative: Using .then() chain approach
    // const imageUrls = await fetchImagesPromise();

    renderImages(imageUrls);
  } catch (error) {
    console.error('Error in handler:', error);
  } finally {
    hideLoader();
    isLoading = false;
  }
}


function init() {
  loadButton.addEventListener('click', handleLoadButtonClick);
  console.log('Application initialized');
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
