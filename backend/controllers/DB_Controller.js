const photo = require("../models/PhotoModel");

exports.getAllPhotos = (req, res, next) => {
  photo
    .find()
    .then((photo) => res.status(200).json(photo))
    .catch((err) => res.status(400).json({ err }));
};

exports.getOnePhoto = (req, res, next) => {
  photo
    .findOne({ _id: req.params.id })
    .then((photo) => res.status(200).json(photo))
    .catch((err) => res.status(400).json({ err }));
};

exports.createPhoto = (req, res, next) => {
  delete req.body._id;
  const newPhoto = new photo({
    ...req.body,
  });
  newPhoto
    .save()
    .then(() => res.status(201).json({ message: "Object Saved !" }))
    .catch((err) => res.status(400).json({ err }));
};

exports.deletePhoto = (req, res, next) => {
  photo
    .deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Object Deleted" }))
    .catch((err) => res.status(400).json({ err }));
};
