const pads = document.querySelectorAll(".board button");
const sounds = {
    kick: new Audio('/assets/sound/kick.mp3'),
    sub: new Audio('/assets/sound/sub.mp3'),
    snare: new Audio('/assets/sound/snare.mp3'),
    'hi-hat': new Audio('/assets/sound/hi-hat.mp3'),
    clap: new Audio('/assets/sound/clap.mp3'),
    reese: new Audio('/assets/sound/reese.mp3'),
    wobble: new Audio('/assets/sound/wobble.mp3'),
    pluck: new Audio('/assets/sound/pluck.mp3'),
    solo: new Audio('/assets/sound/solo.mp3'),
    chord: new Audio('/assets/sound/chord.mp3'),
};

pads.forEach(b=>{
    const audio = sounds[b.innerText.toLowerCase()];
    if (audio){
        b.addEventListener('click', ()=>{
            const sound = audio.cloneNode();
            sound.play();
        });
    }
});