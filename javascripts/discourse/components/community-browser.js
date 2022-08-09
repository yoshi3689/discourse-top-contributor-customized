import Component from "@ember/component";

export default Component.extend({
  tagName: "",
  init() {
    this._super(...arguments);
    // remove muted categories and the uncategorized which is the first item in the list
    this.set("categories", this.site.categories.filter(category => !category.isMuted).slice(1))
  },
});