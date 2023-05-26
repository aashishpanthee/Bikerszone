const model = require("../models")

//add bike 
const addBike = (req, res) => {
    const bike = {
        bikeName:req.body.bikeName,
        bikeNo:req.body.bikeNo,
        image:req.file ? req.file.path : null,
        pricePerDay:req.body.pricePerDay
    };
    model.bikes.create(bike)
      .then((Result) => {
        res.status(200).json({
          message: "bike added successfully",
          result: bike,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Something went wrong",
          err,
        });
      });
  };
  //read all bike
const allBike = (req, res) => {
  model.bikes
    .findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({
        messege: "Something went wrong!!",
        error,
      });
    });
};

//read bike
const showBike = (req, res) => {
  model.bikes
    .findOne({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({
        messege: "Something went wrong!!",
        error,
      });
    });
};

//delete bike
const deleteBike = (req, res) => {
  model.bikes
    .destroy({ where: { id:req.params.id } })
    .then((result) => {
      if (result) {
        res.status(200).json({
          messege: `Bike  deleted`,
        });
      } else {
        res.status(404).json({
          messege: `Bike not found`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        messege: "Something went wrong",
      });
    });
};

//update bike
const updateBike = (req, res) => {
  model.bikes
    .findOne({ where: { id: req.params.id } })
    .then((exist) => {
      if (exist) {
        const editedBike = {
          bikeName:req.body.bikeName,
          bikeNo:req.body.bikeNo,
          image:req.file ? req.file.path : null,
          pricePerDay:req.body.pricePerDay,
        };
        model.bikes
          .update(editedBike, { where: { id: req.params.id } })
          .then((update) => {
            res.status(200).json({
              messege: "bike updated succcessfully!",
              update: editedBike,
            });
          })
          .catch((err) => {
            res.status(500).json({
              messege: "something went wrong!",
              err,
            });
          });
      } else {
        res.status(401).json({
          messege: "Bike not found",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        messege: "something went wrong",
        err,
      });
    });
};


  module.exports={
    addBike,allBike,showBike,deleteBike,updateBike
  }