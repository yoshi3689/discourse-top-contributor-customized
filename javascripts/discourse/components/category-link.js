import Component from "@ember/component";

export default Component.extend({
  tagName: "",

  init() {

    this._super(...arguments);
    fetch('/categories.json')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      return data.map(category => {
        return {
          url: `c/${category.slug}/${category.id}`,
          name: category.name
        };
      })
    })
    .then(data => {
      console.log(data);
      this.set("categories", data);
    });
    
  },
});


