const validUser = {
  email: 'admin@admin.com',
  password: 'secret_admin',
};

const invalidEmail = {
  email: '123.com',
  password: 'secret_admin',
};

const invalidPassword = {
  email: 'admin@admin.com',
  password: '123456',
};

const users = [validUser];

export const userMock = {
  id: 1,
  email: 'admin@admin.com',
  username: 'Admin',
  role: 'admin',
  password: 'secret_admin',
}

export {
  validUser,
  users,
  invalidEmail,
  invalidPassword,
}; 