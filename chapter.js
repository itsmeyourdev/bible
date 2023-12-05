/*chapter js*/
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');

    menuIcon.addEventListener('click', function () {
        menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
    });

    // Close the menu when a menu item is clicked
    menu.addEventListener('click', function () {
        menu.style.display = 'none';
    });
});

document.getElementById("menu-icon").addEventListener("click", function() {
    document.body.classList.toggle("responsive-nav-open");
  });
  document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.getElementById('menu-icon');
    var body = document.body;
  
    menuIcon.addEventListener('click', function () {
      body.classList.toggle('responsive-nav-open');
    });
  });
  /*chapter js*/