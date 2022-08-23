import Component from "@ember/component";
import User from "discourse/models/user";

export default Component.extend({
  tagName: "",
  // this block is called five times
  init() {
    this._super(...arguments);
    this.set("likes", this.data.likes_received);
    // using User model and username, fetch a user object
    User.findByUsername(this.data.user.username).then((user) => {
      this.set("user", user);
    });
  },
});
