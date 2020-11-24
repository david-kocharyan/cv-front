<template>
    <div>
        <a href="javascript:void(0)" @click="backToTop" ref="top" class="back-to-top">
            <span>
                <i class="fas fa-chevron-up"></i>
            </span>
        </a>
    </div>
</template>

<script>
    export default {
        name: "BackToTop",
        data() {
          return{
              scrollPosition: 0,
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
                if (this.scrollPosition >= 250) {
                    this.$refs.top.style.display = "block"
                } else {
                    this.$refs.top.style.display = "none"
                }
            },
            backToTop() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                })
            }
        }
    }
</script>

<style scoped>
    .back-to-top {
        position: fixed;
        display: none;
        right: 15px;
        bottom: 15px;
        z-index: 99999;
    }

    .back-to-top span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        width: 40px;
        height: 40px;
        border-radius: 4px;
        background: #ffb727;
        color: #fff;
        transition: all 0.4s;
    }

    .back-to-top i:hover {
        background: #ffc550;
        color: #fff;
    }
</style>