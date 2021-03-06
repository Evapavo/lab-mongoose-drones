const Drone = require('../models/drone');

module.exports.index = (req, res, next) => {
  Drone.find({}).then((drones) => {
    res.render('drones/index', {
      drones: drones
    });
  });
};

module.exports.new = (req, res, next) => {
  res.render('drones/new');
};

module.exports.create = (req, res, next) => {
  const droneData = req.body;
  const newDrone = new Drone(droneData);
  newDrone.save().then((drone) => {
    res.redirect('/drones');
  })
};

// module.exports.new = (req, res, next) => {
//   res.render('products/form', {
//     product: new Product()
//   });
// };

// module.exports.create = (req, res, next) => {
//   const productData = req.body;

//   const newProduct = new Product(productData);

//   newProduct.save().then((product) => {
//     res.redirect('/products');
//   })
// };

// module.exports.show = (req, res, next) => {
//   Product.findById(req.params.id).then((product) => {
//     res.render('products/show', {
//       product: product
//     });
//   });
// };


// module.exports.edit = (req, res, next) => {
//   Product.findById(req.params.id).then((product) => {
//     res.render('products/form', {
//       product: product
//     });
//   });
// };

// module.exports.update = (req, res, next) => {
//   const productId = req.params.id;
//   const updates = {
//       name: req.body.name,
//       price: req.body.price,
//       imageUrl: req.body.imageUrl,
//       description: req.body.description
//   };

//   Product.findByIdAndUpdate(productId, updates).then((product) => {
//     res.redirect('/products');
//   });
// };

// module.exports.delete = (req, res, next) => {
//   const productId = req.params.id;

//   Product.findByIdAndRemove(productId).then((product) => {
//     return res.redirect('/products');
//   });
// };
