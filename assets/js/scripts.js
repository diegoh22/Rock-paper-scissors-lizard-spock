function getComputerChoice(){
    return Math.floor(Math.ramdom() * 5 + 1);
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
    1: 'ROCK',
    2: 'PAPER',
    3: 'SCISSORS',
    4: 'LIZARD',
    5: 'SPOCK'
};

let userChoiceID = '';

window.onload = () => {
    const output = document.querySelector('#output');
    
    const userOptions = document.querySelectorAll('.user-option');

    userOptions.forEach(el => el.addEventListener('click', event => {
        userChoiceID = event.target.id;
    }));
    
    const playButton = document.querySelector('#play');

    playButton.addEventListener('clik',() => {
        const computerChoiceID = getComputerChoice();
        const computerChoice =  OPTIONS[computerChoiceID];
        const computerChoiceElement = document.querySelector('#computer-choice');
        const userChoice = OPTIONS[userChoiceID];

        let result ='';
        
        computerChoiceElement.innerHTML = OPTIONS2EMOJI[computerChoiceID];

        switch (`${computerChoice}-${userChoice}`) {
             case `${ROCK}-${ROCK}`:
             case `${PAPER}-${PAPER}`:
             case `${SCISSORS}-${SCISSORS}`:
             case `${LIZARD}-${LIZARD}`:
             case `${SPOCK}-${SPOCK}`:

                 result = "TIE"
                 break;

            case `${ROCK}-${SCISSORS}`:
            case `${ROCK}-${LIZARD}`:
            case `${SCISSORS}-${PAPER}`:
            case `${SCISSORS}-${LIZARD}`:
            case `${PAPER}-${ROCK}`:
            case `${PAPER}-${SPOCK}`:
            case `${LIZARD}-${PAPER}`:
            case `${LIZARD}-${SPOCK}`:
            case `${SPOCK}-${ROCK}`:
            case `${SPOCK}-${SCISSORS}`:

                result = 'Computer Win'
                break;

            case `${ROCK}-${PAPER}`:
            case `${ROCK}-${SPOCK}`:
            case `${SCISSORS}-${ROCK}`:
            case `${SCISSORS}-${SPOCK}`:
            case `${PAPER}-${SCISSORS}`:
            case `${PAPER}-${LIZARD}`:
            case `${LIZARD}-${ROCK}`:
            case `${LIZARD}-${SCISSORS}`:
            case `${SPOCK}-${PAPER}`:
            case `${SPOCK}-${LIZARD}`:

                result = 'You Win'
                break;

            default:
            result = 'Someting Wrong. try again'

        }

        output.innerHTML = result;

    });
};