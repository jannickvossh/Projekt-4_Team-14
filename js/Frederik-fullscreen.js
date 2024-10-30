document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('.card__image'); // Hent alle videoer med klassen .card__image

    // Funktion til at skifte mellem 'contain' og 'cover' samt fjerne/tilføje klassen
    function handleFullscreenChange() {
        videos.forEach(function(video) {
            if (document.fullscreenElement === video) {
                video.style.objectFit = 'contain'; // Ændr til 'contain' i fullscreen
                video.classList.remove('card__image-position'); // Fjern klassen i fullscreen
            } else {
                video.style.objectFit = 'cover'; // Skift tilbage til 'cover', når fullscreen afsluttes
                video.classList.add('card__image-position'); // Tilføj klassen igen uden for fullscreen
            }
        });
    }

    // Lyt efter, om fullscreen aktiveres eller deaktiveres
    document.addEventListener('fullscreenchange', handleFullscreenChange);
});
