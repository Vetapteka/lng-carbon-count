export class SelectItem {
    constructor(label, options = []) {
        this.label = label;
        this.options = options ? options : [];
    }

    setValue(options) {
        this.options = options;
    }
}
