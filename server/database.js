const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1/finances';
console.log('Got Uri...');

mongoose.Promise = require('bluebird');

console.log('Got Options...');
mongoose.connect(uri);
const db = mongoose.connection;

console.log('Created db...');

const TopicItem = require('./models/TopicItem');

db.once('open', () => {
  console.log('Connected');

  const topics = [
    {
      name: 'libraries',
      description: 'links to useful open source libraries',
      links: [
        {
          description: 'The very library we are working with now',
          url: 'https://github.com/facebook/react',
          voteCount: 0,
          voters: [],
        },
        {
          description: 'Some old videos',
          url: 'http://tagtree.io',
          voteCount: 0,
          voters: [],
        },
      ],
    },
    {
      name: 'apps',
      description: 'links to new and exciting apps',
      links: [
        {
          description: 'An app to manage your finances',
          url: 'https://22seven.com',
          voteCount: 0,
          voters: [],
        },
      ],
    },
    {
      name: 'news',
      description: 'links to programming related news articles',
      links: [
        {
          description: 'Go find some news yourself!',
          url: 'https://google.com',
          voteCount: 0,
          voters: [],
        },

      ],
    },
  ];

  topics.forEach((item) => {
    console.log('Adding Topic...');
    const topicItem = new TopicItem(item);
    console.log(topicItem);

    const query = { name: item.name };

    TopicItem.find(
            query,
            (err, doc) => {
              if (err) {
                console.log(err);
              } else if (doc.length === 0) {
                topicItem.save(() => {
                  if (err) {
                    console.log(err);
                  } else {
                    console.log('Inserted Topic...');
                  }
                });
              } else {
                console.log(doc);
                console.log('Found Topic...');
              }
            }
        );
  });
});
