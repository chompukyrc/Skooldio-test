const { input } = require("@inquirer/prompts");

class Deck {
    constructor() {
        this.cardsScore = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
            10, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0, 0, 1, 2, 3, 4, 5,
            6, 7, 8, 9, 10, 0, 0, 0,
        ];
        this.cardsLabel = [
            "Clubs-1",
            "Clubs-2",
            "Clubs-3",
            "Clubs-4",
            "Clubs-5",
            "Clubs-6",
            "Clubs-7",
            "Clubs-8",
            "Clubs-9",
            "Clubs-10",
            "Clubs-Jack",
            "Clubs-Queen",
            "Clubs-King",
            "Diamonds-1",
            "Diamonds-2",
            "Diamonds-3",
            "Diamonds-4",
            "Diamonds-5",
            "Diamonds-6",
            "Diamonds-7",
            "Diamonds-8",
            "Diamonds-9",
            "Diamonds-10",
            "Diamonds-Jack",
            "Diamonds-Queen",
            "Diamonds-King",
            "Hearts-1",
            "Hearts-2",
            "Hearts-3",
            "Hearts-4",
            "Hearts-5",
            "Hearts-6",
            "Hearts-7",
            "Hearts-8",
            "Hearts-9",
            "Hearts-10",
            "Hearts-Jack",
            "Hearts-Queen",
            "Hearts-King",
            "Spades-1",
            "Spades-2",
            "Spades-3",
            "Spades-4",
            "Spades-5",
            "Spades-6",
            "Spades-7",
            "Spades-8",
            "Spades-9",
            "Spades-10",
            "Spades-Jack",
            "Spades-Queen",
            "Spades-King",
        ];

        this.availableCard = [...Array(52).keys()];
    }

    drawCard() {
        while (true) {
            const rand =
                Math.ceil(Math.random() * 1000) % this.availableCard.length;
            this.availableCard.splice(rand, 1);
            return {
                card: this.cardsLabel[this.availableCard[rand]],
                score: this.cardsScore[this.availableCard[rand]],
            };
        }
    }
}

class Player {
    constructor(name, chip) {
        this.name = name;
        this.chip = chip;
        this.cards = [];
    }

    // draw 2 card from available deck
    drawCards(deck) {
        this.cards = [];

        this.cards.push(deck.drawCard());
        this.cards.push(deck.drawCard());

        return this.cards;
    }

    getCardSum() {
        return this.cards[0].score + this.cards[1].score;
    }

    // Compare points with dealer
    vs(dealer) {
        const playerSum = this.getCardSum();
        const dealerSum = dealer.getCardSum();

        console.log(
            `${this.name} ${this.cards[0].card}, ${this.cards[1].card} (sum: ${playerSum})`
        );
        console.log(
            `${dealer.name} ${dealer.cards[0].card}, ${dealer.cards[1].card} (sum: ${dealerSum})`
        );

        // 1 = win, 0 = tie, -1 = lose
        return playerSum > dealerSum ? 1 : playerSum === dealerSum ? 0 : -1;
    }
}

async function main() {
    // 1 initial player
    const player = new Player("Player", 10);
    // 2 init dealer
    const dealer = new Player("Dealer", 10);

    // 3 while
    while (true) {
        // 3.1 Input bet
        let bet = await input({ message: "Please input your bet" });
        bet = parseInt(bet);

        // 3.2 Check is chip enough?
        if (bet > player.chip) {
            console.log(
                "You not enough chip, try again (please lower bet value.)"
            );
            continue;
        }

        // 3.3 init Deck
        const deck = new Deck();

        // 3.4 draw for player
        player.drawCards(deck);
        // 3.5 draw for dealer
        dealer.drawCards(deck);

        // 3.6 compare
        const result = player.vs(dealer);
        if (result === 1) {
            console.log(`You won!!!, received ${bet} chips`);
            player.chip += bet;
        } else if (result === 0) {
            console.log(`Tie, You neither win nor lose chips.`);
        } else {
            console.log(`You lose, lose ${bet} chips.`);
            player.chip -= bet;
        }

        // 3.7 Ask play more
        // check player chip current balance
        console.log("Your current chips is ", player.chip);

        if (player.chip <= 0) {
            console.log("You have 0 chip, cannot play more");
            break;
        }

        const isContinue = await input({
            message: "Wanna play more (Yes/No)?",
        });

        if (isContinue === "No") {
            console.log(`You got total ${player.chip} chips`);
            break;
        }
    }
}

main();

