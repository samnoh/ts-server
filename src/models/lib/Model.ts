import { AxiosPromise, AxiosResponse } from 'axios';

interface ModelAttributes<T> {
    set(value: T): void;
    get<K extends keyof T>(key: K): T[K];
    getAll(): T;
}

interface Sync<T> {
    fetch(id: number): AxiosPromise;
    save(data: T): AxiosPromise;
}

interface Events {
    on(eventName: string, callback: () => void): void;
    remove(eventName: string): void;
    trigger(eventName: string): void;
}

interface HasId {
    id?: number;
}

export class Model<T extends HasId> {
    constructor(
        private attributes: ModelAttributes<T>,
        private events: Events,
        private sync: Sync<T>
    ) {}

    // events
    on = this.events.on;

    remove = this.events.remove;

    trigger = this.events.trigger;

    // attributes
    get = this.attributes.get;

    set(update: T): void {
        this.attributes.set(update);
        this.events.trigger('change');
    }

    // sync
    fetch(): void {
        const id = this.get('id');

        if (typeof id !== 'number') throw new Error('Cannot fetch without an id');

        this.sync
            .fetch(id)
            .then((response: AxiosResponse): void => this.set(response.data))
            .catch(() => this.trigger('error'));
    }

    save(): void {
        this.sync
            .save(this.attributes.getAll())
            .then((response: AxiosResponse): void => this.trigger('save'))
            .catch(() => this.trigger('error'));
    }
}
