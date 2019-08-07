import { UserList } from './views';
import { User } from './models';

const users = User.buildUserCollection();

users.on('change', () => {
    const root = document.getElementById('root');

    if (root) {
        new UserList(root, users).render();
    }
});

users.fetch();
