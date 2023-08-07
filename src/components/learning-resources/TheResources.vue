<template>
  <base-card>
    <base-button
      @click='setSelectedTab("stored-resources")'
      :mode='storedResButtonMode'
    >
      Stored Resources
    </base-button>
    <base-button
      @click='setSelectedTab("add-resource")'
      :mode='addResButtonMode'
    >
      Add Resources
    </base-button>
  </base-card>
  <keep-alive>
    <component :is='selectedTab'></component>
  </keep-alive>
</template>
<script>

import AddResource from '@/components/learning-resources/AddResource.vue';
import StoredResources from '@/components/learning-resources/StoredResources.vue';

export default {
  components: {
    AddResource,
    StoredResources
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource:  this.removeResource
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    }
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official VueJS documentation',
          link: 'https://v2.vuejs.org/'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'TLearn to google',
          link: 'https://google.com/'
        }
      ]
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
    removeResource(resId) {
      const resIndex = this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(resIndex, 1);
    }
  }
};
</script>
