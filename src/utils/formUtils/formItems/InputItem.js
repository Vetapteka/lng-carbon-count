export class InputItem {
    constructor(label, unit, value = '') {
        this.label = label;
        this.unit = unit;
        this.value = value;
    }

    setValue(value) {
        this.value = value;
    }
}
