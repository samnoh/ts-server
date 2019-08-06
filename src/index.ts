import { User } from './Models';

const user = new User({ id: 1, name: 'hello', age: 0 });

user.on('save', () => {
    console.log(user);
});

user.save();
