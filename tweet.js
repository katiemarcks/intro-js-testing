class Tweet {
  constructor(sender, content, link = "no link provided") {
    this.sender = sender;
    this.content = content;
    this.link = link;
  }
}

module.exports = Tweet;
