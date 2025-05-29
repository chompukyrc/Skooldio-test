const { input } = require("@inquirer/prompts");

async function main() {
    let playerChip = 10;

    const cardsScore = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8,
        9, 10, 0, 0, 0,
    ];
    const cardsLabel = [
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

    let outCard = [];

    function genRandCard() {
        while (true) {
            const rand = Math.ceil(Math.random() * 1000) % 52;

            if (!outCard.includes(rand)) {
                outCard.push(rand);
                return rand;
            }
        }
    }

    while (true) {
        // reset outCard
        outCard = [];

        const answer = await input({ message: "Please put your bet" });

        if (answer > playerChip) {
            console.log(
                "You not enough chip, try again (please lower bet value.)"
            );
            continue;
        }

        const playerRand1 = genRandCard();
        const playerRand2 = genRandCard();
        const botRand1 = genRandCard();
        const botRand2 = genRandCard();
        // console.log(playerRand1, playerRand2, botRand1, botRand2);
        console.log(
            `You got ${cardsLabel[playerRand1]}, ${cardsLabel[playerRand2]}`
        );
        console.log(
            `The dealer got ${cardsLabel[botRand1]}, ${cardsLabel[botRand2]}`
        );
        if (
            cardsScore[playerRand1] + cardsScore[playerRand2] >
            cardsScore[botRand1] + cardsScore[botRand2]
        ) {
            console.log(`You won!!!, received ${answer} chips`);
            playerChip += answer;
        } else if (
            cardsScore[playerRand1] + cardsScore[playerRand2] ===
            cardsScore[botRand1] + cardsScore[botRand2]
        ) {
            console.log(`Tie, You neither win nor lose chips.`);
        } else {
            console.log(`You lose, lose ${answer} chips.`);
            playerChip -= answer;
        }

        // check player chip current balance
        if (playerChip <= 0) {
            console.log("You have 0 chip, cannot play more");
            break;
        }

        const isContinue = await input({
            message: "Wanna play more (Yes/No)?",
        });

        if (isContinue === "No") {
            console.log(`You got total ${playerChip} chips`);
            break;
        }
    }
}

main();

