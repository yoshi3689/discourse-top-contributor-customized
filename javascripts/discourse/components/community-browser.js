import Component from "@ember/component";

export default Component.extend({
  tagName: "",
  init() {
    this._super(...arguments);
    // remove muted categories and the uncategorized which is the first item in the list
    this.set("categories", this.site.categories.filter(category => !category.isMuted && !category.parentCategory).slice(1).map(c=>{
      let parentCategory = c.parentCategory ? `${c.parentCategory.slug}/` : "";
      return {...c, category_url: `/c/${parentCategory}${c.slug}/${c.id}`};
    }))
  },
});