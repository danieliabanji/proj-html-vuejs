<template>
    <div>
        <JumboApp />
        <TypeWorkout />
    </div>
</template>

<script>
import { store } from '../store'
import JumboApp from './JumboApp.vue';
import TypeWorkout from './TypeWorkout.vue'

export default {
    name: "MainComponent",
    components: { JumboApp, TypeWorkout },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>

</style>