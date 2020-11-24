<template>
    <main id="main">
        <Education />
        <Skill />
    </main>
</template>

<script>
    import Education from "../components/resume/Education";
    import Skill from "../components/resume/Skill";
    export default {
        name: "Resume",
        components:{
            Education, Skill
        }
    }
</script>

<style scoped>

</style>