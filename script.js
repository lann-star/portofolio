// 1. Smooth scroll navbar
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    target.scrollIntoView({ behavior: 'smooth' })
  })
})

// 2. Navbar shadow saat scroll
const nav = document.querySelector('nav')
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)'
    nav.style.background = 'white'
  } else {
    nav.style.boxShadow = 'none'
    nav.style.background = 'transparent'
  }
})

// 3. Animasi fade-in saat section masuk layar
const sections = document.querySelectorAll('section')

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1'
      entry.target.style.transform = 'translateY(0)'
    }
  })
}, { threshold: 0.1 })

sections.forEach(section => {
  section.style.opacity = '0'
  section.style.transform = 'translateY(30px)'
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
  observer.observe(section)
})

// Typing animation
const words = ['Web Developer', 'Frontend Engineer', 'Problem Solver', 'Lifelong Learner']
let wordIndex = 0
let charIndex = 0
let isDeleting = false
const typingEl = document.getElementById('typing')

function type() {
  const currentWord = words[wordIndex]

  if (isDeleting) {
    typingEl.textContent = currentWord.substring(0, charIndex - 1)
    charIndex--
  } else {
    typingEl.textContent = currentWord.substring(0, charIndex + 1)
    charIndex++
  }

  if (!isDeleting && charIndex === currentWord.length) {
    setTimeout(() => isDeleting = true, 1500)
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    wordIndex = (wordIndex + 1) % words.length
  }

  setTimeout(type, isDeleting ? 60 : 100)
}

type()