import { shared } from '../units/a/shared.js'
console.log(shared)
const pages = [() => import('../units/a/page.js'), () => import('../units/b/page.js'), () => import('../units/b/other.js')]
for (const page of pages) page().then(m => console.log(m.default()))
