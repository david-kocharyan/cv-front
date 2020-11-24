<template>
    <section id="hero">
        <div class="hero-container">
            <h1>David Kocharyan</h1>
            <h2>I'm a Full Stack Web Developer from Armenia.</h2>
            <a v-scroll-to="'#about'" class="btn-scroll scrollto" title="Scroll To About Me">About Me</a>
            <a v-scroll-to="'#contact'" class="btn-scroll scrollto" title="Scroll To Contact Me">Contact Me</a>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Hero"
    }
</script>

<style scoped>

</style>