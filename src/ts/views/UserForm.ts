import { View } from './View';
import { User, UserProps } from '../models';

export class UserForm extends View<User, UserProps> {
    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.setName': this.onSetNameClick,
            'click:.setAge': this.onSetAgeClick,
            'click:.saveModel': this.onSaveClick
        };
    }

    onSetNameClick = (): void => {
        const input = this.parent.querySelector('input');

        // type guard
        if (input) {
            const name = input.value;
            this.model.set({ name });
        }
    };

    onSetAgeClick = (): void => {
        this.model.setRandomAge();
        this.render();
    };

    onSaveClick = (): void => {
        this.model.save();
    };

    template(): string {
        return `
            <div>
                <input placeholder="${this.model.get('name')}" />
                <button class="setName">Change Name</button>
                <button class="setAge">Set Random Age</button>
                <button class="saveModel">Save</button>
            </div>
        `;
    }
}
