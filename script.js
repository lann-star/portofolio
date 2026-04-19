// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  })
})

// Navbar shadow saat scroll
const navEl = document.querySelector('header')
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navEl.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)'
  } else {
    navEl.style.boxShadow = 'none'
  }
})

// Fade-in animation
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

// Dark mode toggle
const darkToggle = document.getElementById('darkToggle')
const body = document.body

if (localStorage.getItem('dark') === 'true') {
  body.classList.add('dark')
}

darkToggle.addEventListener('click', () => {
  body.classList.toggle('dark')
  localStorage.setItem('dark', body.classList.contains('dark'))
})

// Burger menu
const burger = document.getElementById('burger')
const mobileMenu = document.getElementById('mobileMenu')

burger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open')
})

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open')
  })
})