const mixins = {};
const app = Vue.createApp({
    mixins: Object.values(mixins),
    data() {
        return {
            loading: true,
            hiddenMenu: false,
            showMenu: true,
            menuColor: true,
            foldCard: false,
            scrollTop: 0,
            renderers: [],
        };
    },
    created() {
        window.addEventListener("load", () => {
            this.loading = false;
        });
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll, true);
        this.render();
        this.handleCard();
    },
    methods: {
        render() {
            for (let i of this.renderers) i();
        },

        handleScroll() {
            let wrap = this.$refs.homePostsWarp;
            let newScrollTop = document.documentElement.scrollTop;
            if (this.scrollTop < newScrollTop) {
                this.hiddenMenu = true;
                this.showMenu = false;
            } else {
                this.hiddenMenu = false;
            }
            if (wrap) {
                if (newScrollTop <= window.innerHeight - 100) {
                    this.menuColor = true;
                } else {
                    this.menuColor = false;
                }
                if (newScrollTop <= 400) {
                    wrap.style.top = "-"+newScrollTop/5+"px";
                } else {
                    wrap.style.top = "-80px";
                }
            }
            this.scrollTop = newScrollTop;
        },

        handleCard() {
           new Draggabilly("#home-card #card", {});
        }
    },
});

app.mount("#layout");