// import { User } from './Models';

// const collection = User.buildUserCollection();

// collection.on('change', () => {
//     console.log(collection);
// });

// collection.fetch();

import { UserForm } from './views';

const userForm = new UserForm(document.getElementById('root'));

userForm.render();
