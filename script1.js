window.addEventListener('scroll', function() {
    var element = document.querySelector('.scroll-element');
    var position = element.getBoundingClientRect();
    console.log(position); // Logs the position object to the console

//checking whether fully visible
if (position.top < window.innerHeight && position.bottom >= 0)
    {element.classList.add('visible')

    }
}) 