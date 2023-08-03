
    const open = document.querySelectorAll(".open-video")
    const close = document.querySelector(".close-video")
    const modal = document.querySelector(".v-modal")
    const content = document.querySelector(".v-modal-content")

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    var loader = document.getElementById('loader');

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '100%',
            width: '100%',
            videoId: '',
            playerVars: {
                autoplay: 1,
                loop: 1,
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            },
        });
    }

    function onPlayerReady(event) {
        open.forEach(el => {
            el.addEventListener("click", () => {
                modal.classList.add("show");
                loader.style.display = 'block';
                content.style.display = 'none';
                player.loadVideoById(el.id);
                document.body.style.overflow = "hidden";
            });
        });
    }

    close.addEventListener("click", () => {
        modal.classList.remove("show");
        player.stopVideo();
        document.body.style.overflow = "auto";
    });

    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING || event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) {
            loader.style.display = 'none';
            content.style.display = 'block';

        }

        if (event.data === YT.PlayerState.ENDED) {
            player.playVideo();
        }
    }

    document.addEventListener('click', (e) => {
        let clickedElement = e.target;
        let isModalVisible = modal.classList.contains('show');
        let isClickInsideModal = content.contains(clickedElement);
        let isClickInsideOpenElements = false;

        open.forEach(el => {
            if (el.contains(clickedElement)) {
                isClickInsideOpenElements = true;
                return;
            }
        });

        if (isModalVisible && !isClickInsideModal && !isClickInsideOpenElements) {
            modal.classList.remove("show");
            player.stopVideo();
            document.body.style.overflow = "auto";
        }
    });


