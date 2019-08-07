import { CollectionView } from '../lib';
import { User, UserProps } from '../../models';
import { UserShow } from './UserShow';
import { UserEdit } from './UserEdit';

export class UserList extends CollectionView<User, UserProps> {
    renderItem(model: User, itemParent: Element): void {
        new UserEdit(itemParent, model).render();
        // new UserShow(itemParent, model).render();
    }
}
