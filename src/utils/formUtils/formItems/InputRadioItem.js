export class InputRadioItem {
    constructor(label, chouses = []) {
        this.label = label;
        this.chouses = chouses ? chouses : [];
    }

    setValue(chouses) {
        this.chouses = chouses;
    }
}
