class Tweet {
  constructor(
    sender,
    content,
    link = "no link provided",
    likes,
    retweets,
    replies,
    replyCount
  ) {
    this.sender = sender;
    this.content = content;
    this.link = link;
    this.likes = 0;
    this.retweets = 0;
    this.replies = [];
    this.replyCount = 0;
  }
  like() {
    this.likes = this.likes + 1;
  }
  retweet() {
    this.retweets = this.retweets + 1;
  }
  reply(reply) {
    this.replies.push(reply);
    this.replyCount = this.replies.length;
  }
}

module.exports = Tweet;
