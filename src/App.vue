<template>
  <HeaderComponent />
  <div>
    <MainComponent />
  </div>
  <FooterComponent />
</template>

<script>
import { store } from './store'
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import AOS from 'aos';
AOS.init({
  duration: 1000,
});

export default {
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent
  },
  data() {
    return {
      store
    }
  }
}
</script>


<style lang="scss" scoped>

</style>