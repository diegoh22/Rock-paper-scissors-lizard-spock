function getComputerChoice(){
    return Math.floor(Math.ramdom() * 5 + 1);
}

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const LIZARD = 'LIZARD';
const SPOCK = 'SPOCK';
const options = {
    1: ROCK,
    2: PAPER,
    3: SCISSORS,
    4: LIZARD,
    5: SPOCK,
};
const option2logo = {
    1: 'rock',
    2: 'paper',
    3: 'scissors',
    4: 'lizard',
    5: 'spock',
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
        const ComputerChoiceID = getComputerChoice();
        const ComputerChoice =  options[ComputerChoiceID];
        const computerChoiceElement = document.querySelector('#computer-choice');
        const userChoice = options(userChoiceID);

        let result ='';
        
        computerChoiceElement.innerHTML = option2logo [ComputerChoiceID];

        switch (`${ComputerChoice}-${userChoice}`) {
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