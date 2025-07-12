mixins.home = {
    mounted() {
        this.menuColor = true;

        document.addEventListener('DOMContentLoaded', function () {
            new Draggabilly('#card', {
                containment: 'body'
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
    }
}