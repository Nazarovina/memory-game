/**
 * Колода карт. Класс отвечает за создание и тасование карт. Содержит список изображений карт.
 */
class Deck {
    #cardsImages = ["./cakes/cake1.png", "./cakes/cake2.png", "./cakes/cake3.png", "./cakes/cake4.png", "./cakes/cake5.png", "./cakes/cake6.png", "./cakes/cake7.png", "./cakes/cake8.png", "./cakes/cake9.png", "./cakes/cake10.png", "./cakes/cake11.png", "./cakes/cake12.png"];

    constructor() {
        this.cards = [];
        this.#cardsImages.forEach(image => {
            this.cards.push(new Card(image));
            this.cards.push(new Card(image));
        });
    }

    shuffle() {
        this.cards.sort(() => Math.random() - 0.5);
    }

    removeCard(card) {
        let index = this.cards.findIndex(item => item.imagePath == card.imagePath);
        if (index != -1) {
            this.cards.splice(index, 1);
            card.disconectFromDOM();
        }
    }
}
