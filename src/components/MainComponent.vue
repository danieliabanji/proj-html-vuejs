<template>
    <div>
        <JumboApp />
        <TypeWorkout />
        <AdviceComponent />
        <TeamComponent />
        <ArticleComponent />
        <BuyComponent />
        <WebsiteComponent />
        <VideoComponent />
    </div>
</template>

<script>
import { store } from '../store'
import AdviceComponent from './AdviceComponent.vue';
import ArticleComponent from './ArticleComponent.vue';
import JumboApp from './JumboApp.vue';
import TeamComponent from './TeamComponent.vue';
import TypeWorkout from './TypeWorkout.vue';
import BuyComponent from './BuyComponent.vue';
import WebsiteComponent from './WebsiteComponent.vue'
import VideoComponent from './VideoComponent.vue';

export default {
    name: "MainComponent",
    components: { JumboApp, TypeWorkout, AdviceComponent, TeamComponent, ArticleComponent, BuyComponent, WebsiteComponent, VideoComponent },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>

</style>