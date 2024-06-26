

document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scroll
    const links = document.querySelectorAll('nav a, .cta a, .hero a');

    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        } else {
            console.error(`Element with ID ${targetId} not found.`);
        }
    }
})

document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggleBtn');
    const sideNav = document.getElementById('sideNav');
    const mainContent = document.querySelector('.main-content');

    toggleBtn.addEventListener('click', function () {
        if (sideNav.style.width === '250px') {
            sideNav.style.width = '0';
            if (mainContent) {
                mainContent.style.marginLeft = '0';
            }
        } else {
            sideNav.style.width = '250px';
            if (mainContent) {
                mainContent.style.marginLeft = '250px';
            }
        }
    });

    // Smooth Scroll
    const links = document.querySelectorAll('.side-nav a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
                sideNav.style.width = '0';
                if (mainContent) {
                    mainContent.style.marginLeft = '0';
                }
            } else {
                console.error(`Element with ID ${targetId} not found.`);
            }
        });
    });
});

//Form validation
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        // const message = document.getElementById('message').value;
        const pwd = document.getElementById("pass").value;
        const cpwd = document.getElementById("cpass").value
        if (!name || !email || !pwd) {
            alert('Please fill in all fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        if (pwd != cpwd) {
            alert('Password incorrect');
            return;
        }
        alert('Form submitted successfully!');
        form.reset();
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


var popupform = document.querySelector(".form-container");
var popupoverlay = document.querySelector(".overlay");


function show() {
    popupform.style.display = "block";
    popupoverlay.style.display = "block";
}
function cancel(event) {
    event.preventDefault();
    popupoverlay.style.display = "none"
    popupform.style.display = "none"
}

