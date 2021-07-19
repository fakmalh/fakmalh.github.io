window.addEventListener('scroll', () => {
    const contents = document.querySelectorAll('#about-me p')
    contents.forEach(content => {
        const contentPosition = content.getBoundingClientRect().top
        const screenPosition = window.innerHeight
        if (contentPosition < screenPosition - 50) {
            content.classList.add('active')
        } else {
            content.classList.remove('active')
        }
    });
})