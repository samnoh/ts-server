import { User } from '../models';

export class UserForm {
    constructor(public parent: Element, public model: User) {
        this.bindModel();
    }

    eventsMap(): { [key: string]: () => void } {
        return {
            'click:.setName': this.onSetNameClick,
            'click:.setAge': this.onSetAgeClick
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

    bindModel(): void {
        this.model.on('change', () => {
            this.render();
        });
    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();

        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(':');

            fragment.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            });
        }
    }

    template(): string {
        return `
            <div>
                <h1>User Form</h1>
                <div>User name: ${this.model.get('name')}</div>
                <div>User age: ${this.model.get('age')}</div>
                <input />
                <button class="setName">Change Name</button>
                <button class="setAge">Set Random Age</button>
            </div>
        `;
    }

    render(): void {
        this.parent.innerHTML = '';

        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content);
        this.parent.append(templateElement.content);
    }
}
