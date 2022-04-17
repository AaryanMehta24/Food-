const cacheName = 'ecommerce'
const cacheAssets = [
    '/',
    'index.html',
    'css\bg.jpg',
    'img\delivery.png',
    'img\pizza.jpg',
    'img\logo1.png',
    'img\logo2.png',
    'img\logo3.png',
    'img\logo4.png',
    'css\client bg.jpg'
    
];
self.addEventListener('fetch', evt => {
    //console.log('fetch event:',evt)
    evt.respondWith(
        caches.match(evt.request).then(res => {
            return res || fetch(evt.request)
        })
    )
});