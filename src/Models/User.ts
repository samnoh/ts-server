import axios, { AxiosResponse } from 'axios';

type Callback = () => void;

interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

export class User {
    events: { [key: string]: Callback[] } = {};

    constructor(private data: UserProps) {}

    get(propName: string): number | string {
        return this.data[propName];
    }

    set(update: UserProps): void {
        const updatedData = { ...this.data, ...update };
        this.data = updatedData;
    }

    on(eventName: string, callback: Callback): void {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    remove(eventName: string): void {
        delete this.events[eventName];
    }

    trigger(eventName: string): void {
        const handlers = this.events[eventName];

        if (!handlers || handlers.length === 0) {
            return;
        }

        handlers.forEach(callback => {
            callback();
        });
    }

    async fetch() {
        const res: AxiosResponse = await axios.get(`http://localhost:5000/users/${this.get('id')}`);
        this.set(res.data);
    }
}
