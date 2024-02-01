const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll({include: Product})
    .then((Categories) => {
      res.json(Categories);
    })
    .catch((err) => {
      res.status(500).json({
        msg: "an unexpected error occurred",
        err,
      });
    });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findByPk(req.params.id, {include: Product})
    .then((singleCategory) => {
      res.json(singleCategory);
    })
    .catch((err) => {
      res.status(500).json({
        msg: 'an unexpected error occurred',
        err,
      });
    });
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name,
  })
    .then((newCategory) => {
      res.json(newCategory);
    })
    .catch((err) => {
      res.status(500).json({
        msg: "an unexpected error occurred!",
        err,
      });
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name:req.body.category_name
    },
    {
      where: {
        id:req.params.id
      }
    }
  ).then((updateCategory) => {
    if(updateCategory) {
      res.json(updateCategory);
    } else {
      res.status(404).json({msg: "category not found"});
    }
  })
  .catch((err) => {
    res.status(500).json({
      msg: 'an unexpected error occurred!',
      err,
    });
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where:{
        id:req.params.id
    }
}).then((deleteCategory) => {
    console.log('deleteCategory: ',deleteCategory)
    if (deleteCategory) {
      res.json(deleteCategory);
    } else {
      res.status(404).json({ msg: "category not found" });
    }
  })
  .catch((err) => {
    res.status(500).json({
      msg: "an unexpected error occurred!",
      err,
    });
  });
});

module.exports = router;
