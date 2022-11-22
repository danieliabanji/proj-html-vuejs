<template>
    <div>
        <FixedComponent class="position" />
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
import AdviceComponent from '../maincomponents/AdviceComponent.vue';
import ArticleComponent from '../maincomponents/ArticleComponent.vue';
import JumboApp from '../maincomponents/JumboApp.vue';
import TeamComponent from '../maincomponents/TeamComponent.vue';
import TypeWorkout from '../maincomponents/TypeWorkout.vue';
import BuyComponent from '../maincomponents/BuyComponent.vue';
import WebsiteComponent from '../maincomponents/WebsiteComponent.vue'
import VideoComponent from '../maincomponents/VideoComponent.vue';
import FixedComponent from '../maincomponents/FixedComponent.vue';

export default {
    name: "MainComponent",
    components: { JumboApp, TypeWorkout, AdviceComponent, TeamComponent, ArticleComponent, BuyComponent, WebsiteComponent, VideoComponent, FixedComponent },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
// .position {
//     // position: fixed;
//     // float: right;
// }
</style>