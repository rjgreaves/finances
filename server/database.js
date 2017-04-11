const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/newsletters';
console.log('Got Uri...');

mongoose.Promise = require('bluebird');

console.log('Got Options...');
mongoose.connect(uri);
const db = mongoose.connection;

console.log('Created db...');

const NewsletterItem = require('./models/NewsletterItem');

db.once('open', () => {
  console.log('Connected');

  const newsletters = [
    {
      year: 2017,
      month: 4,
      name: 'Awareness Week',
      nextSubmissionDeadline: '2017-04-12',
      articles: [
        {
          description: 'Gurdwara - Parkinson’s Information morning',
          startDate: '2017-04-02',
          startTime: '10:00',
          endTime: '13:00',
        },
        {
          description: 'A display at Little Eaton Garden Centre. Any volunteers to share the day would help.',
          startDate: '2017-04-07',
          startTime: '11:00',
          endTime: '15:00',
          contactDetails: [
            {
              name: 'Peter Shaffery',
              emailAddress: 'pgs1937@hotmail.com',
              telephone: '01332 832777',
            },
          ],
        },
        {
          description: 'A Treats Tombola, with an Information stand is to be held on the Main Corridor of London Road Community Hospital. Please let Frank or Janet Smith know if you can help with cakes, buns or have items to donate.',
          startDate: '2017-04-07',
          contactDetails: [
            {
              name: 'Frank Smith',
            },
            {
              name: 'Janet Smith',
            },
          ],
        },
      ],
    },
  ];

  newsletters.forEach((item) => {
    console.log('Adding Newsletter...');
    const newsletterItem = new NewsletterItem(item);
    console.log(newsletterItem);

    const query = { name: item.name };

    NewsletterItem.find(
            query,
            (err, doc) => {
              if (err) {
                console.log(err);
              } else if (doc.length === 0) {
                newsletterItem.save((saveErr) => {
                  if (saveErr) {
                    console.log(saveErr);
                  } else {
                    console.log('Inserted Newsletter...');
                  }
                });
              } else {
                console.log(doc);
                console.log('Found Newsletter...');
              }
            }
        );
  });
});
