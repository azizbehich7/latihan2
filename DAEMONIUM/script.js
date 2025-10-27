// Tambahkan efek scroll atau interaksi kecil
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.borderBottom = "1px solid #bbb";
  } else {
    navbar.style.borderBottom = "1px solid #ddd";
  }
});

const searchIcon = document.getElementById('search-icon');
const searchForm = document.querySelector('.search-form');

searchIcon.addEventListener('click', () => {
  searchForm.style.display = searchForm.style.display === 'none' ? 'block' : 'none';
  if (searchForm.style.display === 'block') {
    searchForm.querySelector('input').focus();
  }
});

// Menutup search saat klik di luar
document.addEventListener('click', (e) => {
  if (!searchForm.contains(e.target) && !searchIcon.contains(e.target)) {
    searchForm.style.display = 'none';
  }
});
