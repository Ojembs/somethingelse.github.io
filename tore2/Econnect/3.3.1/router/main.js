import {Router} from './router.js/index.js'

const router = new Router()
router.root = 'http://localhost/jsrouter'
router.add({name: 'home', path: '/index.htm', handler: ()=>console.log('handler to home')})
router.add({name: 'firstPage', path: '/firstPage.html', handler: ()=>console.log('handler to fisrtpage')})
router.add({name: 'secondPage', path: '/2ndPage.htm', handler: ()=>console.log('handler to secondpage')})

const activeRoutes = Array.from(document, querySelectorAll('[route]'))
activeRoutes.forEach((route) => route.addEventListener('click', (e) => {
    e.preventDefault()
    router.navigate(e.target.getAttribute('route'))
}, false))