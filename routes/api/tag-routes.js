const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({include: [Product]})
    .then((Tags) => {
      res.json(Tags);
    })
    .catch((err) => {
      res.status(500).json({
        msg: "an unexpected error occurred",
        err,
      });
    });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findByPk(req.params.id, {include: Product})
    .then((singleTag) => {
      res.json(singleTag);
    })
    .catch((err) => {
      res.status(500).json({
        msg: "an unexpected error occurred",
        err,
      });
    });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name,
  })
    .then((newTag) => {
      res.json(newTag);
    })
    .catch((err) => {
      res.status(500).json({
        msg: "an unexpected error occurred!",
        err,
      });
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_name:req.body.tag_name
    },
    {
      where: {
        id:req.params.id
      }
    }
  ).then((updateTag) => {
    if(updateTag) {
      res.json(updateTag);
    } else {
      res.status(404).json({msg: "tag not found"});
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
  // delete on tag by its `id` value
  Tag.destroy({
    where:{
        id:req.params.id
    }
  }).then((deleteTag) => {
    console.log('deleteTag: ',deleteTag)
    if (deleteTag) {
      res.json(deleteTag);
    } else {
      res.status(404).json({ msg: "tag not found" });
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
