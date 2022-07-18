import Component from "@ember/component";

export default Component.extend({
  tagName: "",

  init() {
    this._super(...arguments);
    console.log(this.content.category);
    this.set("category", this.content.category);
  },
});
