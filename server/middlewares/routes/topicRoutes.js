var TopicItem = require("../../Models/TopicItem");
var tokenService = require("../../tokenService");
module.exports = {

    registerRoutes(app) {

        app.get('/api/topics', (req, res) => {
            TopicItem.find(
                {},
                function (err, docs) {
                    if (err) {
                        res.send(500);
                    }
                    res.send(docs);
                }
            );
        });

        app.get('/api/topics/:id/links', (req, res) => {
            TopicItem.findOne(
                { _id: req.params.id },
                { _id: 0, links: 1 },
                function (err, docs) {
                    if (err) res.sendStatus(500);
                    return res.send(docs.links);
                }
            )
        });

        app.post('/api/topics/:id/links', (req, res) => {

            var token = req.body.token || req.query.token || req.headers['x-access-token'];

            if (token) {
                tokenService.isAuthenticated(token, function (err, decoded) {
                    if (err) {
                        return res.json({ success: false, message: 'Failed to authenticate token.' });
                    } else {
                        console.log(decoded);
                        TopicItem.findOne(
                            { _id: req.params.id },
                            function (err, doc) {
                                if (err) return res.sendStatus(500);

                                let link = doc.links.find((docLink) => {
                                    return docLink.url === req.body.url
                                });
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
                                link = doc.links.find((docLink) => {
                                    return docLink.url === req.body.url
                                });

                                doc.save((err, doc) => {
                                    if (err) return res.status(500).send(err);

                                    console.log("Returning Link");
                                    console.log(link);
                                    return res.send(link);

                                })

                            }
                        )
                    }
                });

            } else {
                return res.status(403).send({
                    success: false,
                    message: 'No token provided.'
                });
            }

        });

    }

};