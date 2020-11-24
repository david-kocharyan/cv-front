<template>
    <main id="main">
        <Hero />
        <About />
        <Contact />
    </main>
</template>

<script>
    import Hero from "../components/home/Hero";
    import About from "../components/home/About";
    import Contact from "../components/home/Contact";
    export default {
        name: "Home",
        components: {
            Hero, About, Contact
        }
    }
</script>

<style scoped>

</style>