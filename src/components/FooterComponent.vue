<template>
    <section>
        <div>
            footer
        </div>
    </section>
</template>

<script>
export default {
    name: 'FooterComponent'
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
@use '../assets/styles/partials/mixins' as *;

section {
    background-color: $codgray;
}
</style>