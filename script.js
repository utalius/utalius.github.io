// Sayfa tamamen yüklendiğinde çalışacak kodlar
window.onload = function () {
    // Sayfa yüklendikten sonra buraya JavaScript kodlarını ekleyebilirsiniz.
    
    // Örnek: Navbar düğmeleri için tıklama olayları
    var menuItems = document.querySelectorAll('.menu li');
    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', function () {
            // Tıklanan menü öğesine göre sayfayı kaydırabilir veya başka bir işlem yapabilirsiniz.
        });
    }
    
    // Örnek: Form gönderme işlemi
    var contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Formun gönderimini işlemek için AJAX veya başka bir yöntem kullanabilirsiniz.
    });
    
    // Daha fazla etkileşim eklemek için burada JavaScript kodları yazabilirsiniz.
};
