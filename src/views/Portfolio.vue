<script src="../../../../Downloads/Laura/Laura/assets/js/main.js"></script>
<template>
    <main id="main">
        <section id="portfolio" class="portfolio">
            <div class="container">

                <div class="section-title">
                    <span>My Portfolio</span>
                    <h2>My Portfolio</h2>
                    <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
                </div>

                <magic-grid>
                    <Card />
                </magic-grid>
            </div>
        </section>
    </main>
</template>

<script>
    import Card from "../components/portfolio/Card";
    export default {
        name: "Portfolio",
        components:{
            Card
        }
    }
</script>

<style scoped>

</style>