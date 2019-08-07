import { UserList } from './views';
import { Collection, UserProps, User } from './models';

const users = User.buildUserCollection();
console.log(users);
users.on('change', () => {
    const root = document.getElementById('root');
    if (root) {
        new UserList(root, users).render();
    }
});

users.fetch();
