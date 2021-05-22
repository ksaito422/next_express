'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'テストA',
          age: 29,
          sex: 1,
          email: 'aaa@example.com',
          password: 'aaa-password',
          created_at: now,
          updated_at: now,
        },
        {
          name: 'テストB',
          age: 39,
          sex: 1,
          email: 'bbb@example.com',
          password: 'bbb-password',
          created_at: now,
          updated_at: now,
        },
        {
          name: 'テストC',
          age: 49,
          sex: 2,
          email: 'ccc@example.com',
          password: 'ccc-password',
          created_at: now,
          updated_at: now,
        },
        {
          name: 'テストD',
          age: 59,
          sex: 2,
          email: 'ddd@example.com',
          password: 'ddd-password',
          created_at: now,
          updated_at: now,
        },
        {
          name: 'テストE',
          age: 69,
          sex: 9,
          email: 'eee@example.com',
          password: 'eee-password',
          created_at: now,
          updated_at: now,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
