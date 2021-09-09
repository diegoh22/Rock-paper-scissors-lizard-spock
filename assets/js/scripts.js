function getComputerChoice() {
    return Math.floor((Math.random() * 5) + 1);
}

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const LIZARD = 'LIZARD';
const SPOCK = 'SPOCK';
const OPTIONS = {
    1: ROCK,
    2: PAPER,
    3: SCISSORS,
    4: LIZARD,
    5: SPOCK
};
const OPTIONS2EMOJI = {
    1: '✊',
    2: '✋',
    3: '✂️',
    4: '🦎',
    5: '🖖'
};

let userChoiceID = '';

window.onload = () => {
    const userOptions = document.querySelectorAll('.user-option');

    userOptions.forEach(el => el.addEventListener('click', event => {
        userChoiceID = event.target.id;
    }));

    const playButton = document.querySelector('#play');

    playButton.addEventListener('click', () => {
        const computerChoiceID = getComputerChoice();
        const computerChoice = OPTIONS[computerChoiceID];
        const computerChoiceElement = document.querySelector('#computer-choice');
        const output = document.querySelector('#output');
        const userChoice = OPTIONS[userChoiceID];

        let result = '';

        computerChoiceElement.innerHTML = OPTIONS2EMOJI[computerChoiceID];

        switch (`${computerChoice}-${userChoice}`) {
            case `${ROCK}-${ROCK}`:
            case `${SCISSORS}-${SCISSORS}`:
            case `${PAPER}-${PAPER}`:
            case `${SPOCK}-${SPOCK}`:
            case `${LIZARD}-${LIZARD}`:
                result = 'TIE 👻'
                break;
            case `${ROCK}-${SCISSORS}`:
            case `${ROCK}-${LIZARD}`:
            case `${SCISSORS}-${PAPER}`:
            case `${SCISSORS}-${LIZARD}`:
            case `${PAPER}-${ROCK}`:
            case `${PAPER}-${SPOCK}`:
            case `${SPOCK}-${ROCK}`:
            case `${SPOCK}-${SCISSORS}`:
            case `${LIZARD}-${PAPER}`:
            case `${LIZARD}-${SPOCK}`:
                result = 'COMPUTER WIN 😔💔 🤖🥇'
                break;
            case `${ROCK}-${PAPER}`:
            case `${ROCK}-${SPOCK}`:
            case `${SCISSORS}-${ROCK}`:
            case `${SCISSORS}-${SPOCK}`:
            case `${PAPER}-${SCISSORS}`:
            case `${PAPER}-${LIZARD}`:
            case `${SPOCK}-${PAPER}`:
            case `${SPOCK}-${LIZARD}`:
            case `${LIZARD}-${ROCK}`:
            case `${LIZARD}-${SCISSORS}`:
                result = 'YOU WIN 😁🥇 🤖💔'
                break;
            default:
                result = 'SOMETHING WRONG. TRY AGAIN. 💀'
        }

        output.innerHTML = result;
    })
}