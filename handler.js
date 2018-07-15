"use strict";

const PHOTOS = require("./data.json");

module.exports.all = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: {
      links: {
        self: "/photos"
      },
      data: PHOTOS
    }
  };

  callback(null, response);
};

module.exports.find = ({ pathParameters: { id } }, context, callback) => {
  const photo = PHOTOS.find(photo => photo.id === id);

  const response = {
    statusCode: photo ? 200 : 404,
    body: {
      links: {
        self: `/photos/${id}`
      },
      data: photo
    }
  };

  callback(null, response);
};
