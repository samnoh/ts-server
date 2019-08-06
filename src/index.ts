import { User } from './Models';

const user = new User({ id: 1 });

user.fetch();

setTimeout(() => {
    console.log(user);
}, 100);
