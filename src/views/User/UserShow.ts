import { View } from '../lib';
import { User, UserProps } from '../../models';

export class UserShow extends View<User, UserProps> {
    template(): string {
        return `
        <div>
            <div>Id: ${this.model.get('id')}</div>
            <div>Name: ${this.model.get('name')}</div>
            <div>Age: ${this.model.get('age')}</div>
        </div>
        `;
    }
}
