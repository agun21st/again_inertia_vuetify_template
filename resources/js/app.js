import Vue from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue";
import { InertiaProgress } from "@inertiajs/progress";
import Vuetify from "vuetify";
import colors from "vuetify/es5/util/colors";
import "vuetify/dist/vuetify.min.css";

createInertiaApp({
    resolve: (name) => require(`./Pages/${name}`),
    setup({ el, App, props, plugin }) {
        Vue.use(plugin);
        Vue.use(Vuetify);

        new Vue({
            vuetify: new Vuetify({
                theme: {
                    dark: false,
                    themes: {
                        light: {
                            primary: colors.blue.darken2,
                            accent: colors.grey.darken3,
                            secondary: colors.amber.darken3,
                            info: colors.teal.lighten1,
                            warning: colors.amber.base,
                            error: colors.deepOrange.accent4,
                            success: colors.green.accent3,
                        },
                        dark: {
                            primary: colors.blue.darken2,
                            accent: colors.grey.darken3,
                            secondary: colors.amber.darken3,
                            info: colors.teal.lighten1,
                            warning: colors.amber.base,
                            error: colors.deepOrange.accent4,
                            success: colors.green.accent3,
                        },
                    },
                },
            }),
            render: (h) => h(App, props),
        }).$mount(el);
    },
});

InertiaProgress.init({
    // The delay after which the progress bar will
    // appear during navigation, in milliseconds.
    delay: 250,

    // The color of the progress bar.
    color: "#29d",

    // Whether to include the default NProgress styles.
    includeCSS: true,

    // Whether the NProgress spinner will be shown.
    showSpinner: true,
});