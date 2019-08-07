import { View } from '../lib';
import { User, UserProps } from '../../models';
import { UserShow } from './UserShow';
import { UserForm } from './UserForm';

export class UserEdit extends View<User, UserProps> {
    regionsMap(): { [key: string]: string } {
        return {
            userShow: '.userShow',
            userForm: '.userForm'
        };
    }

    template(): string {
        return `
        <div>
            <div class="userShow"></div>
            <div class="userForm"></div>
        </div>
        `;
    }

    onRender(): void {
        new UserShow(this.regions.userShow, this.model).render();
        new UserForm(this.regions.userForm, this.model).render();
    }
}
