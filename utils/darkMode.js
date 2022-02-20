if (localStorage.getItem('adaoDarkMode') === 'true' || (!('adaoDarkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}