let lastScrollPosition = 0
let ticking = false
let header: Element | null

export function enableScrollSpy() {
  disableScrollSpy()

  header = document.querySelector('.header-root')
  if (header == null) {
    return
  }

  handleScroll()

  document.addEventListener('scroll', handleScroll, false)
}

export function disableScrollSpy() {
  window.removeEventListener('scroll', handleScroll)

  // Refresh header if needed
  setTimeout(() => {
    handleScroll()
  }, 100)
}

function handleScroll() {
  lastScrollPosition = window.scrollY

  if (!ticking) {
    window.requestAnimationFrame(() => {
      // Scroll class
      if (lastScrollPosition > 0) {
        header?.classList.add('scrolled')
      } else {
        header?.classList.remove('scrolled')
      }

      ticking = false
    })
  }

  ticking = true
}
