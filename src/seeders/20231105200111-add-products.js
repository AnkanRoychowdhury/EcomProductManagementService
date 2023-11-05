'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Products', 
      [
        {
          "name": "Samsung Galaxy A31",
          "title": "Samsung Galaxy A31",
          "description": "The Samsung Galaxy A31 is a budget-friendly smartphone with a large display and a long-lasting battery.",
          "sku": "1234567890",
          "slug": "samsung-galaxy-a31"
        },
        {
          "name": "iPhone SE",
          "title": "iPhone SE",
          "description": "The iPhone SE is a compact smartphone with powerful performance and advanced camera capabilities.",
          "sku": "0987654321",
          "slug": "iphone-se"
        },
        {
          "name": "Google Pixel 4a",
          "title": "Google Pixel 4a",
          "description": "The Google Pixel 4a is a mid-range smartphone with a high-quality camera and pure Android experience.",
          "sku": "2468135790",
          "slug": "google-pixel-4a"
        },
        {
          "name": "OnePlus 8 Pro",
          "title": "OnePlus 8 Pro",
          "description": "The OnePlus 8 Pro is a flagship smartphone with a large display and fast charging technology.",
          "sku": "1357924680",
          "slug": "oneplus-8-pro"
        },
        {
          "name": "Xiaomi Redmi Note 9",
          "title": "Xiaomi Redmi Note 9",
          "description": "The Xiaomi Redmi Note 9 is a budget-friendly smartphone with a quad-camera setup and a large battery.",
          "sku": "3141592653",
          "slug": "xiaomi-redmi-note-9"
        },
        {
          "name": "Huawei P40 Pro",
          "title": "Huawei P40 Pro",
          "description": "The Huawei P40 Pro is a high-end smartphone with a curved display and a versatile camera system.",
          "sku": "2718281828",
          "slug": "huawei-p40-pro"
        },
        {
          "name": "Motorola Moto G Power",
          "title": "Motorola Moto G Power",
          "description": "The Motorola Moto G Power is a budget-friendly smartphone with a large battery capacity and a water-repellent design.",
          "sku": "1123581321",
          "slug": "motorola-moto-g-power"
        },
        {
          "name": "Nokia 7.2",
          "title": "Nokia 7.2",
          "description": "The Nokia 7.2 is a mid-range smartphone with a triple-camera setup and a durable design.",
          "sku": "9876543210",
          "slug": "nokia-7-2"
        },
        {
          "name": "Sony Xperia 1 II",
          "title": "Sony Xperia 1 II",
          "description": "The Sony Xperia 1 II is a flagship smartphone with a 4K OLED display and a professional-grade camera system.",
          "sku": "5678901234",
          "slug": "sony-xperia-1-ii"
        },
        {
          "name": "LG V60 ThinQ",
          "title": "LG V60 ThinQ",
          "description": "The LG V60 ThinQ is a dual-screen smartphone with a large battery and a powerful processor.",
          "sku": "4321098765",
          "slug": "lg-v60-thinq"
        },
        {
          "name": "Oppo Find X2 Pro",
          "title": "Oppo Find X2 Pro",
          "description": "The Oppo Find X2 Pro is a premium smartphone with a high-refresh-rate display and a versatile camera system.",
          "sku": "7890123456",
          "slug": "oppo-find-x2-pro"
        },
        {
          "name": "Realme 6 Pro",
          "title": "Realme 6 Pro",
          "description": "The Realme 6 Pro is a mid-range smartphone with a quad-camera setup and a fast charging technology.",
          "sku": "5432109876",
          "slug": "realme-6-pro"
        },
        {
          "name": "Vivo V19",
          "title": "Vivo V19",
          "description": "The Vivo V19 is a mid-range smartphone with a dual-camera setup and a large display.",
          "sku": "9012345678",
          "slug": "vivo-v19"
        },
        {
          "name": "Asus ROG Phone 3",
          "title": "Asus ROG Phone 3",
          "description": "The Asus ROG Phone 3 is a gaming smartphone with a high-refresh-rate display and a powerful processor.",
          "sku": "7654321098",
          "slug": "asus-rog-phone-3"
        },
        {
          "name": "BlackBerry Key2",
          "title": "BlackBerry Key2",
          "description": "The BlackBerry Key2 is a smartphone with a physical keyboard and a focus on productivity.",
          "sku": "2345678901",
          "slug": "blackberry-key2"
        },
        {
          "name": "HTC U12+",
          "title": "HTC U12+",
          "description": "The HTC U12+ is a flagship smartphone with a unique pressure-sensitive touch technology and a dual-camera setup.",
          "sku": "6789012345",
          "slug": "htc-u12-plus"
        },
        {
          "name": "Lenovo Legion Phone Duel",
          "title": "Lenovo Legion Phone Duel",
          "description": "The Lenovo Legion Phone Duel is a gaming smartphone with a dual-camera setup and a side-mounted pop-up selfie camera.",
          "sku": "3210987654",
          "slug": "lenovo-legion-phone-duel"
        },
        {
          "name": "ZTE Axon 11 5G",
          "title": "ZTE Axon 11 5G",
          "description": "The ZTE Axon 11 5G is a mid-range smartphone with support for 5G connectivity and a quad-camera setup.",
          "sku": "8901234567",
          "slug": "zte-axon-11-5g"
        },
        {
          "name": "TCL 10 Pro",
          "title": "TCL 10 Pro",
          "description": "The TCL 10 Pro is a mid-range smartphone with a curved AMOLED display and a quad-camera setup.",
          "sku": "4567890123",
          "slug": "tcl-10-pro"
        }
      ]
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
