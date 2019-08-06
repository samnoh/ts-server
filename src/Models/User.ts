import { AxiosResponse } from 'axios';

import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const rootUrl = 'http://localhost:5000/users';

export class User {
    public events: Eventing = new Eventing();
    public attributes: Attributes<UserProps>;
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

    constructor(attrs: UserProps) {
        this.attributes = new Attributes<UserProps>(attrs);
    }

    // events
    get on() {
        return this.events.on;
    }

    get remove() {
        return this.events.remove;
    }

    get trigger() {
        return this.events.trigger;
    }

    // attributes
    get get() {
        return this.attributes.get;
    }

    set(update: UserProps): void {
        this.attributes.set(update);
        this.events.trigger('change');
    }

    // sync
    fetch(): void {
        const id = this.attributes.get('id');
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
