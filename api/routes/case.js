const router = require("express").Router();
const Case = require("../models/Case");

//ADD NEW CASE
router.post("/addcase",  async(req,res)=> {
    const newCase = new Case(req.body);

    try {
        const savedCase = await newCase.save();
        res.status(201).json(savedCase);
    } catch (err) {
        res.status(500).json(err);
    }   
});

//UPDATE
router.put("/:id", async (req, res) => {
    try {
      const updatedCase = await Case.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedCase);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //DELETE
  router.delete("/:id", async (req, res) => {
    try {
      await Case.findByIdAndDelete(req.params.id);
      res.status(200).json("Case has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //GET CASE
  router.get("/find/:id", async (req, res) => {
    try {
      const single_case = await Case.findById(req.params.id);
      res.status(200).json(single_case);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //GET ALL CASES
  router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qType = req.query.type;
    try {
      let cases;
  
      if (qNew) {
        cases = await Case.find().sort({ createdAt: -1 }).limit(1);
      } else if (qType) {
        cases = await Case.find({
          types: {
            $in: [qType],
          },
        });
      } else {
        cases = await Case.find();
      }
  
      res.status(200).json(cases);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;