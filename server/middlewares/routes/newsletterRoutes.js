const NewsletterItem = require('../../models/NewsletterItem');
const tokenService = require('../../tokenService');

module.exports = {

  registerRoutes(app) {
    app.get('/api/newsletters', (req, res) => {
      tokenService.isAuthenticated(req, res, () =>
        NewsletterItem.find(
          {},
          (err, docs) => {
            if (err) {
              return res.send(500);
            }
            return res.send(docs);
          }
        )
      );
    });

    app.get('/api/newsletters/:id/links', (req, res) => {
      NewsletterItem.findOne(
        { _id: req.params.id },
        { _id: 0, links: 1 },
        (err, docs) => {
          if (err) res.sendStatus(500);
          return res.send(docs.links);
        }
      );
    });

    app.post('/api/newsletters/:id/links', (req, res) => {
      tokenService.isAuthenticated(req, res, () => {
        NewsletterItem.findOne(
          { _id: req.params.id },
          (err, doc) => { // eslint-disable-line consistent-return
            if (err) return res.sendStatus(500);

            let link = doc.links.find((docLink) => docLink.url === req.body.url);

            if (!link) {
              link = Object.assign({}, {
                url: req.body.url,
                description: req.body.description,
                voteCount: 0,
                voters: [],
              });
              doc.links.push(link);
            }

              // Get the link including it's _id
            link = doc.links.find((docLink) => docLink.url === req.body.url);

            doc.save((saveError) => {
              if (saveError) return res.status(500).send(err);

              return res.send(link);
            });
          });
      });
    });
  },

};
