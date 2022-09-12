const e = {
    title: document.getElementsByTagName('title')[0],
    lightning: document.getElementsByClassName('lightning')[0],
    peopleImg: document.getElementById('people_img'),
    peopleLabel: document.getElementById('people_label'),
};

function coinFlip() {
    return Math.random() > 0.5;
}

const people = ['laurel', 'leah', 'erik', 'pablo', 'emily', 'josh', 'jay', 'michelle', 'jasmine'];
let counter = 0;

setInterval(function() {
    let text = 'howe';
    let randomized = '109';
    randomized = randomized.split('').sort(function(){return 0.5-Math.random()}).join('');
    randomized += ' ';
    for (let c of text) {
        randomized += coinFlip() ? c.toUpperCase() : c;
    }
    e.title.innerHTML = randomized;

    e.lightning.style.display = (e.lightning.style.display == 'block' ? 'none' : 'block');

    let person = people[counter];
    console.log(person);
    e.peopleImg.src = 'images/people/' + person + '.jpg';
    e.peopleLabel.textContent = person.toUpperCase();
    counter = (counter + 1) % people.length;
}, 150);


