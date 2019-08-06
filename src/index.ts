import { User } from './Models';

const user = new User({ name: 'mac', age: 20 });
user.on('change', () => {
    alert(1);
});
user.on('change1', () => {
    alert(2);
});
user.remove('change');
user.trigger('change');

console.log(user);
