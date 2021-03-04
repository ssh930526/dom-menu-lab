//Menu data structure
var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];

// Task 1.0
const mainEl = document.querySelector("main");

// Task 1.1

mainEl.style.backgroundColor = "var(--main-bg)";

// Task 1.2

mainEl.innerHTML = "<h1>SEIR Rocks!</h1>";

// Task 1.3

mainEl.classList.add("flex-ctr");

// Task 2.0
const topMenuEl = document.getElementById("top-menu");

// Task 2.1
topMenuEl.style.height = "100%";

// Task 2.2
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Task 2.3
topMenuEl.classList.add("flex-around");

//Task 3.1

menuLinks.forEach(link => {
  let newA = document.createElement('a');
   newA.classList.add('href', link.href);
   newA.textContent = link.text;
  
   topMenuEl.appendChild(newA);

});





