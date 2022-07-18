import Component from "@ember/component";

export default Component.extend({
  tagName: "",

  init() {
    this._super(...arguments);
    console.log(this.data.category);
    this.set("category", this.data.category);
  },
});
