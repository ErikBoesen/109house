const e = {
    title: document.getElementsByTagName('title')[0],
};

function coinFlip() {
    return Math.random() > 0.5;
}

setInterval(function() {
    let text = 'howe';
    let randomized = '109';
    randomized = randomized.split('').sort(function(){return 0.5-Math.random()}).join('');
    randomized += ' ';
    for (let c of text) {
        randomized += coinFlip() ? c.toUpperCase() : c;
    }
    e.title.innerHTML = randomized;
}, 50);
