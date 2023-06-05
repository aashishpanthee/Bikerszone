const model = require("../models");

//add bike
const addRental = (req, res) => {
  const rent = {
    bikeId: req.body.bikeId,
    userId: req.userData.id,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    totalAmt: req.body.totalAmt,
    status: req.body.status,
  };
  model.rentals
    .create(rent)
    .then((Result) => {
      res.status(200).json({
        message: "bike added successfully",
        result: rent,
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
const allRentedBike = (req, res) => {
  model.rentals
    .findAll({
      attributes: {
        exclude: [
          "bikeId",
          "userId",
          "createdAt",
          "updatedAt",
          "startDate",
          "endDate",
          "totalAmt",
          "status",
        ],
      },
      include: [
        {
          model: model.users,
          as: "user",
          attributes:["name",
            "email",
            "isAdmin"],

          include: [
            {
              model: model.bikes,
              as: "rentedBikes",
              attributes: {
                exclude:[
                  "id",
                  "userId",
                  "createdAt",
                  "updatedAt",
                ],
              },
            },
          ],
        },
      ],
    })
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


const rentedBikeId = (req, res) => {
  model.rentals
    .findOne({
      where: { id: req.params.id },

      attributes: {
        exclude: [
          "bikeId",
          "userId",
          "createdAt",
          "updatedAt",
          "startDate",
          "endDate",
          "totalAmt",
          "status",
        ],
      },
      include: [
        {
          model: model.users,
          as: "user",
          attributes:["name",
            "email",
            "isAdmin"],

          include: [
            {
              model: model.bikes,
              as: "rentedBikes",
              attributes: {
                exclude:[
                  "id",
                  "userId",
                  "createdAt",
                  "updatedAt",
                ],
              },
            },
          ],
        },
      ],
    })
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




// //update bike
// const updateBike = (req, res) => {
//   model.bikes
//     .findOne({ where: { id: req.params.id } })
//     .then((exist) => {
//       if (exist) {
//         const editedBike = {
//           bikeName:req.body.bikeName,
//           bikeNo:req.body.bikeNo,
//           image:req.file ? req.file.path : null,
//           pricePerDay:req.body.pricePerDay,
//         };
//         model.bikes
//           .update(editedBike, { where: { id: req.params.id } })
//           .then((update) => {
//             res.status(200).json({
//               messege: "bike updated succcessfully!",
//               update: editedBike,
//             });
//           })
//           .catch((err) => {
//             res.status(500).json({
//               messege: "something went wrong!",
//               err,
//             });
//           });
//       } else {
//         res.status(401).json({
//           messege: "Bike not found",
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({
//         messege: "something went wrong",
//         err,
//       });
//     });
// };

module.exports = {
  addRental,
  allRentedBike,
  rentedBikeId
};
