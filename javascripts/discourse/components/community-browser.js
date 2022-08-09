import Component from "@ember/component";

export default Component.extend({
  tagName: "",
  init() {
    this._super(...arguments);
    this.set("categories", this.site.categories.filter(category => !category.isMuted).slice(1))
  },
});