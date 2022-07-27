import Component from "@ember/component";

export default Component.extend({
  tagName: "",
  showDropdown1: false,
  showDropdown2: false,
  init() {
    this._super(...arguments);
    fetch('/categories.json')
    .then(res => res.json())
    .then(res => res.category_list.categories)
    .then(data => data.map(category => {
      return {
        url: `/c/${category.slug}/${category.id}`,
        name: category.name
      };
    }))
    .then(data => {
      this.set("categories", data)
    });
  },
});