import { User } from './Models';

const user = new User({ name: 'test', age: 50 });

user.save();
