mixins.home = {
    mounted() {
        this.menuColor = true;

        document.addEventListener('DOMContentLoaded', function () {
            new Draggabilly('#card-style', {
                containment: '#home-card'
            });
        });

        let background = this.$refs.homeBackground;
        let imgs = background.dataset.images.split(",");
        
        if (!imgs || !imgs.length) return ;

        let interval = background.dataset.interval;
        let transition = background.dataset.transition;

        let id = 0;

        const changeBackground = () => {
            let trans = `transition-${transition}`
            background.style.backgroundImage = `url('${imgs[id]}')`;
            background.classList.remove(trans);
            background.classList.add(trans);
            id = (id+1)%imgs.length;
        };

        changeBackground();

        if (imgs.length > 1) {
            setInterval(changeBackground, interval);
        }

        window.addEventListener("scroll", this.handleFixCard, true);
    },
    methods: {
        homeClick() {
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
        },
        handleFixCard() {
            let newScrollTop = document.documentElement.scrollTop;
            if (newScrollTop <= 600) this.cardFix = false;
            else this.cardFix = true;
        }
    },
};
