export class Attriutes<T> {
    constructor(private data: T) {}

    get<K extends keyof T>(key: K): T[K] {
        return this.data[key];
    }

    set(update: T): void {
        const updatedData = { ...this.data, ...update };
        this.data = updatedData;
    }
}
