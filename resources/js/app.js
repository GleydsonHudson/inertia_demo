import {createApp, h} from 'vue';
import {createInertiaApp} from '@inertiajs/vue3';
import Layout from "./Shared/Layout.vue";
import {resolvePageComponent} from "laravel-vite-plugin/inertia-helpers";


createInertiaApp({
    resolve: async name => {
        const page = await resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob("./Pages/**/*.vue"));
        page.default.layout ??= Layout;
        return page;
    },
    // resolve: (name) => {
    //     const pages = import.meta.glob('./Pages/**/*.vue', {eager: true})
    //     let page = pages['./Pages/${name}.vue']
    //     page.default.layout = page.default.layout || Layout
    //     return page
    // },
    setup({el, App, props, plugin}) {
        return createApp({render: () => h(App, props)})
            .use(plugin)
            .mount(el)
    },
});