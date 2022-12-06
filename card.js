/**
 * Описывают отдельную карту, которая может отображаться рубашкой вверх или изображением вверх.
 */
    class Card {
    #image;
    #element;
    #isFlipped = false;

    constructor(image) {
        this.#image = image;

        this.#element = document.createElement("div");
        this.#element.classList.add("card");
        this.#element.style.backgroundImage = `url('${this.coverPath}')`;
        this.#element.connectedCard = this; // в свойстве DOM объекта будет находится ссылка на экземпляр карты
    }

    get imagePath() {
        return `images/${this.#image}`;
    }

    get coverPath() {
        return './images/back_img.png';
    }

    get element() {
        return this.#element;
    }

    flip() {
        if (this.#isFlipped)
            this.#element.style.backgroundImage = `url('${this.coverPath}')`;
        else
            this.#element.style.backgroundImage = `url('${this.imagePath}')`;

        this.#isFlipped = !this.#isFlipped;
    }

    disconectFromDOM() {
        this.#element.connectedCard = null;
    }
}
