export class FormManager {
    constructor(items, valuesSetter) {
        this.items = items;
        this.valuesSetter = valuesSetter;
    }

    async fillItems() {
        await this.valuesSetter().then((values) => {
            values.forEach((value, index) => {
                this.items[index].setValue(value);
            });
        });
        return this.items;
    }
}