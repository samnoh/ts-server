import { User } from './Models';

const collection = User.buildUserCollection();

collection.on('change', () => {
    console.log(collection);
});

collection.fetch();
