<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
    <BackToTop />
  </div>
</template>

<script>
  import Header from "./components/Header";
  import Footer from "./components/Footer";
  import BackToTop from "./components/BackToTop";
  export default {
    name: 'App',
    components: {
      Header, Footer, BackToTop
    },
    methods:{

    }
  }
</script>
