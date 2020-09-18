export { default as CarouselSlider } from '../../components/CarouselSlider.vue'
export { default as Category } from '../../components/Category.vue'
export { default as CelebrateCategoty } from '../../components/CelebrateCategoty.vue'
export { default as DailyDeals } from '../../components/DailyDeals.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Navigations } from '../../components/Navigations.vue'
export { default as Static } from '../../components/Static.vue'

export const LazyCarouselSlider = import('../../components/CarouselSlider.vue' /* webpackChunkName: "components/CarouselSlider" */).then(c => c.default || c)
export const LazyCategory = import('../../components/Category.vue' /* webpackChunkName: "components/Category" */).then(c => c.default || c)
export const LazyCelebrateCategoty = import('../../components/CelebrateCategoty.vue' /* webpackChunkName: "components/CelebrateCategoty" */).then(c => c.default || c)
export const LazyDailyDeals = import('../../components/DailyDeals.vue' /* webpackChunkName: "components/DailyDeals" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/Footer" */).then(c => c.default || c)
export const LazyNavigations = import('../../components/Navigations.vue' /* webpackChunkName: "components/Navigations" */).then(c => c.default || c)
export const LazyStatic = import('../../components/Static.vue' /* webpackChunkName: "components/Static" */).then(c => c.default || c)
