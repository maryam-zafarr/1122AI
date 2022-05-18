const router = require("express").Router();
const Service = require("../models/Service");

//ADD NEW SERVICE
router.post("/addservice",  async(req,res)=> {
    const newService = new Service(req.body);

    try {
        const savedService = await newService.save();
        res.status(201).json(savedService);
    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE
router.put("/:id", async (req, res) => {
    try {
      const updatedService = await Service.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedService);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //DELETE
  router.delete("/:id", async (req, res) => {
    try {
      await Service.findByIdAndDelete(req.params.id);
      res.status(200).json("Service has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //GET Service
  router.get("/find/:id", async (req, res) => {
    try {
      const single_service = await Service.findById(req.params.id);
      res.status(200).json(single_service);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //GET ALL SERVICES
  router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qType = req.query.type;
    try {
      let services;

      if (qNew) {
        services = await Service.find().sort({ createdAt: -1 }).limit(1);
      } else if (qType) {
        services = await Service.find({
          types: {
            $in: [qType],
          },
        });
      } else {
        services = await Service.find();
      }

      res.status(200).json(services);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
