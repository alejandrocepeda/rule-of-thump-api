'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return Promise.all([
      queryInterface.bulkInsert('posts', [{
        id:1,
        title: 'Kanye West',
        date: '2020-06-02',
        like_count:0,
        dislike_count:0,
        category_id:1,
        image_url:'',
        description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.'
      }], {}),
      queryInterface.bulkInsert('posts', [{
        id:2,
        title: 'Mark Zuckerberg',
        date: '2020-06-02',
        like_count:0,
        dislike_count:0,
        category_id:1,
        image_url:'',
        description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.'
      }], {}),
      queryInterface.bulkInsert('posts', [{
        id:3,
        title: 'Cristina Fernandez',
        date: '2020-06-02',
        like_count:0,
        dislike_count:0,
        category_id:1,
        image_url:'',
        description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.'
      }], {}),
      queryInterface.bulkInsert('posts', [{
        id:4,
        title: 'Maria Yousafzai',
        date: '2020-06-02',
        like_count:0,
        dislike_count:0,
        category_id:1,
        image_url:'',
        description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.'
      }], {})
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('posts', null, {});
  }
};
