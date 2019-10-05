if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
     navigator.serviceWorker.register('src/js/sw.js').then( () => {
      console.log('Service Worker Registered')
     })
   })
}

 