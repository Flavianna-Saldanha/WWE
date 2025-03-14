let log = new Log(document.querySelector('.log'));
let char = new Knight('Cody Rhodes');
let monster = new BigMonster('John Cena');

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
)

stage.start();