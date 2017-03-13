var LinkItem = require("../../Models/LinkItem").LinkItem;

module.exports = {

    registerRoutes(app) {

        app.post('/api/links/:id/vote', (req, res) => {
            const link = LinkItem.find({ _id: req.params.id }).value();
            if (link.voters && link.voters.indexOf(req.body.email) > -1) {
                return res.send(403);
            }

            link.voters.push(req.body.email);
            link.voteCount += req.body.increment;
            return res.send(link);
        });

    }

}