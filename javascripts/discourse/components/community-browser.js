import Component from "@ember/component";

export default Component.extend({
  tagName: "",
  init() {
    this._super(...arguments);
    // remove muted categories and the uncategorized which is the first item in the list
    this.set("categories", this.site.categories.filter(category => !category.isMuted).slice(1).map(c=>{
      let parentCategory = c.parentCategory ? `${c.parentCategory.slug}/` : "";
      return {...c, category_url: `/c/${parentCategory}${c.slug}/${c.id}`};
    }))
    this.set("subcategories", this.site.categories.filter(category => category.parentCategory).map(c=>{
      return {...c, category_url: `/c/${c.parentCategory.slug}${c.slug}/${c.id}`};
    }))
  },
});