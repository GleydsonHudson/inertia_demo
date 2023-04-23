import {createApp, h} from 'vue';
import {createInertiaApp} from '@inertiajs/vue3';
import {InertiaProgress} from "@inertiajs/progress";
import Layout from "./Shared/Layout.vue";

InertiaProgress.init();

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.vue', {eager: true})
        let page = pages['./Pages/${name}.vue']
        page.default.layout = page.default.layout || Layout
        return page
    },
    setup({el, App, props, plugin}) {
        return createApp({render: () => h(App, props)})
            .use(plugin)
            .mount(el)
    },
});