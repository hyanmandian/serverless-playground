"use strict";

const PHOTOS = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    uri: "http://placehold.it/600/92c952",
    thumbnailUri: "http://placehold.it/150/92c952"
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    uri: "http://placehold.it/600/771796",
    thumbnailUri: "http://placehold.it/150/771796"
  },
  {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    uri: "http://placehold.it/600/24f355",
    thumbnailUri: "http://placehold.it/150/24f355"
  },
  {
    albumId: 1,
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    uri: "http://placehold.it/600/d32776",
    thumbnailUri: "http://placehold.it/150/d32776"
  },
  {
    albumId: 1,
    id: 5,
    title: "natus nisi omnis corporis facere molestiae rerum in",
    uri: "http://placehold.it/600/f66b97",
    thumbnailUri: "http://placehold.it/150/f66b97"
  },
  {
    albumId: 1,
    id: 6,
    title: "accusamus ea aliquid et amet sequi nemo",
    uri: "http://placehold.it/600/56a8c2",
    thumbnailUri: "http://placehold.it/150/56a8c2"
  },
  {
    albumId: 1,
    id: 7,
    title: "officia delectus consequatur vero aut veniam explicabo molestias",
    uri: "http://placehold.it/600/b0f7cc",
    thumbnailUri: "http://placehold.it/150/b0f7cc"
  },
  {
    albumId: 1,
    id: 8,
    title: "aut porro officiis laborum odit ea laudantium corporis",
    uri: "http://placehold.it/600/54176f",
    thumbnailUri: "http://placehold.it/150/54176f"
  },
  {
    albumId: 1,
    id: 9,
    title: "qui eius qui autem sed",
    uri: "http://placehold.it/600/51aa97",
    thumbnailUri: "http://placehold.it/150/51aa97"
  },
  {
    albumId: 1,
    id: 10,
    title: "beatae et provident et ut vel",
    uri: "http://placehold.it/600/810b14",
    thumbnailUri: "http://placehold.it/150/810b14"
  }
];

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

module.exports.find = (event, context, callback) => {
  const id = event.pathParameters.id;

  const response = {
    statusCode: 200,
    body: {
      links: {
        self: `/photos/${id}`
      },
      data: PHOTOS.find(photo => photo.id === id),
    }
  };

  callback(null, response);
};
