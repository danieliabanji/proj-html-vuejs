<template>
    <div>
        <JumboApp />
    </div>
</template>

<script>
import { store } from '../store'
import JumboApp from './JumboApp.vue';

export default {
    name: "MainComponent",
    components: { JumboApp },
    data() {
        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>

</style>