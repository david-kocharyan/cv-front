<template>
    <header id="header" class="fixed-top d-flex justify-content-center align-items-center" v-bind:class="[isSticky ? stickyClass : '']">

        <!--mobile navigation-->
        <button type="button" @click="mobileOpen" class="mobile-nav-toggle d-lg-none">
            <span v-show="!isOpen"><i class="fas fa-bars"></i></span>
            <span v-show="isOpen"><i class="fas fa-times"></i></span>
        </button>
        <div class="mobile-nav d-lg-none" v-bind:class="[isOpen ? 'mobile-nav-active' : '']">
            <ul>
                <li @click="mobileOpen" :class="{'active': $route.name === 'Home'}"><router-link to="/">Home</router-link></li>
                <li @click="mobileOpen" :class="{'active': $route.name === 'Resume'}"><router-link to="/resume">Resume</router-link></li>
                <li @click="mobileOpen" :class="{'active': $route.name === 'Portfolio'}"><router-link to="/portfolio">Portfolio</router-link></li>
            </ul>
        </div>
        <div class="mobile-nav-overly" v-bind:class="[isOpen ? 'overly-block': '']"></div>
        <!--end mobile navigation-->

        <!--navigation-->
        <nav class="nav-menu d-none d-lg-block">
            <ul>
                <li :class="{'active': $route.name === 'Home'}"><router-link to="/">Home</router-link></li>
                <li :class="{'active': $route.name === 'Resume'}"><router-link to="/resume">Resume</router-link></li>
                <li :class="{'active': $route.name === 'Portfolio'}"><router-link to="/portfolio">Portfolio</router-link></li>
            </ul>
        </nav>
        <!--end navigation-->

    </header>
</template>

<script>
    export default {
        name: "Header",
        data() {
          return {
              isSticky: false,
              stickyClass: 'header-scrolled',
              scrollPosition: 0,
              isOpen: false
          }
        },
        created () {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods:{
            handleScroll() {
                this.scrollPosition = window.scrollY
                if (this.scrollPosition >= 100) {
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            },
            mobileOpen(){
                this.isOpen = !this.isOpen;
            }
        },
        watch: {
            isOpen: function () {
                document.body.style.overflow = this.isOpen ? 'hidden' : ''
            }
        }
    }
</script>

<style scoped>

</style>