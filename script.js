// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(reg => {
        console.log('Service Worker Registered');

        // Request Push Notification Permission
        if ('Notification' in window && Notification.permission !== 'granted') {
          Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
              console.log('Push Notifications Allowed ✅');
            }
          });
        }
      })
      .catch(err => console.log('Service Worker failed:', err));
  });
}
