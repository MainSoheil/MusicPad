const pads = document.querySelectorAll(".board button");
const link_prefix = './assets/sound/';
const sounds = {
    kick: new Audio(link_prefix + 'kick.mp3'),
    sub: new Audio(link_prefix + 'sub.mp3'),
    snare: new Audio(link_prefix + 'snare.mp3'),
    'hi-hat': new Audio(link_prefix + 'hi-hat.mp3'),
    clap: new Audio(link_prefix + 'clap.mp3'),
    reese: new Audio(link_prefix + 'reese.mp3'),
    wobble: new Audio(link_prefix + 'wobble.mp3'),
    pluck: new Audio(link_prefix + 'pluck.mp3'),
    solo: new Audio(link_prefix + 'solo.mp3'),
    chord: new Audio(link_prefix + 'chord.mp3'),
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