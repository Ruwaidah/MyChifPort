exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("images")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("images").insert([
        {
          id: 1,
          image:
            "https://res.cloudinary.com/donsjzduw/image/upload/v1578579527/kn0gzemksbkmnwknh6q1.png"
        },
        {
          id: 2,
          image:
            "https://res.cloudinary.com/donsjzduw/image/upload/v1578579527/kn0gzemksbkmnwknh6q1.png"
        },
        {
          id: 3,
          image:
            "https://res.cloudinary.com/donsjzduw/image/upload/v1578579527/kn0gzemksbkmnwknh6q1.png"
        }
      ]);
    });
};
