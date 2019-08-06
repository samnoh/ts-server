import axios, { AxiosResponse } from 'axios';

interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

export class User {
    constructor(private data: UserProps) {}

    get(propName: string): number | string {
        return this.data[propName];
    }

    set(update: UserProps): void {
        const updatedData = { ...this.data, ...update };
        this.data = updatedData;
    }

    async fetch(): Promise<void> {
        const data: UserProps = await axios
            .get(`http://localhost:5000/users/${this.get('id')}`)
            .then((res: AxiosResponse) => res.data);

        this.set(data);
    }

    async save(): Promise<void> {
        const id = this.get('id');

        if (id) {
            await axios.put(`http://localhost:5000/users/${id}`, this.data);
            return;
        }

        await axios.post(`http://localhost:5000/users/`, this.data); // id; auto-increment
    }
}
