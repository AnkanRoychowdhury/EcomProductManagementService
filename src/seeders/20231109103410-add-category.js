'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Categories', 
      [
        {
          "name": "Electronics",
          "slug": "electronics",
          "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
          "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {
          "name": "Clothing",
          "slug": "clothing",
          "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
          "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {
          "name": "Home & Kitchen",
          "slug": "home-kitchen",
          "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
          "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {
          "name": "Beauty & Personal Care",
          "slug": "beauty-personal-care",
          "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
          "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {
          "name": "Toys & Games",
          "slug": "toys-games",
          "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
          "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {
          "name": "Books",
          "slug": "books",
          "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
          "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {
          "name": "Sports & Outdoors",
          "slug": "sports-outdoors",
          "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
          "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {
          "name": "Health & Household",
          "slug": "health-household",
          "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
          "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {
          "name": "Automotive",
          "slug": "automotive",
          "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
          "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {
          "name": "Baby",
          "slug": "baby",
          "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
          "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {
          "name": "Tools & Home Improvement",
          "slug": "tools-home-improvement",
          "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
          "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {
          "name": "Pet Supplies",
          "slug": "pet-supplies",
          "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
          "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {
          "name": "Office Products",
          "slug": "office-products",
          "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
          "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {
          "name": "Grocery & Gourmet Food",
          "slug": "grocery-gourmet-food",
          "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
          "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {
          "name": "Industrial & Scientific",
          "slug": "industrial-scientific",
          "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
          "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {
          "name": "Arts, Crafts & Sewing",
          "slug": "arts-crafts-sewing",
          "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
          "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {
          "name": "Movies & TV",
          "slug": "movies-tv",
          "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
          "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {
          "name": "Patio, Lawn & Garden",
          "slug": "patio-lawn-garden",
          "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
          "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {
          "name": "Software",
          "slug": "software",
          "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
          "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {
          "name": "Music",
          "slug": "music",
          "createdAt": Sequelize.literal('CURRENT_TIMESTAMP'),
          "updatedAt": Sequelize.literal('CURRENT_TIMESTAMP')
        }
      ]
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
