import { createSSRApp } from "vue";
import 'vant/lib/index.css';
import * as Pinia from 'pinia';
import dayjs from "dayjs";
import { Lazyload } from 'vant';

import App from "./App.vue";
export function createApp() {
	const app = createSSRApp(App);
	app.use(Lazyload, {
		lazyComponent: true,
	})
	app.use(Pinia.createPinia());
	app.config.globalProperties.$gday=dayjs;
	return {
		app,
		Pinia
	};
}
