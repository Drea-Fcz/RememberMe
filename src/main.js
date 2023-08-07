import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

import BaseCard from '@/components/UI/BaseCard.vue';
import BaseButton from '@/components/UI/BaseButton.vue';
import BaseDialog from '@/components/UI/BaseDialog.vue';
import StoredResources from '@/components/learning-resources/StoredResources.vue';

app.component('stored-resources', StoredResources);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);
app.mount('#app');
