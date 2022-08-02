import Component from "@ember/component";

export default Component.extend({
  tagName: "",
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

    const dropdown1 = document.querySelector(".dropdown1");
    const dropdownIcon1 = document.querySelector(".showDropdown1");
    let showDropdown1 = false;
    if (dropdown1 && dropdownIcon1) {
      dropdownIcon1.addEventListener('click', () => {
        showDropdown1 = !showDropdown1;
        if (showDropdown1) {
          dropdownIcon1.classList.add('dropdown-icon1-open');
          dropdown1.classList.add('dropdown1-open');
        } else {
          dropdownIcon1.classList.remove('dropdown-icon1-open');
          dropdown1.classList.remove('dropdown1-open');
        }
      });
    }

    const dropdown2 = document.querySelector(".dropdown2");
    const dropdownIcon2 = document.querySelector(".showDropdown2");
    let showDropdown2 = false;
    if (dropdown2 && dropdownIcon2) {
      dropdownIcon2.addEventListener('click', () => {
        showDropdown2 = !showDropdown2;
        if (showDropdown2) {
          dropdownIcon2.classList.add('dropdown-icon2-open');
          dropdown2.classList.add('dropdown2-open');
        } else {
          dropdownIcon2.classList.remove('dropdown-icon2-open');
          dropdown2.classList.remove('dropdown2-open');
        }
      });
    }
    
  },
});