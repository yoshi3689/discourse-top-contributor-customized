import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  setupComponent(attrs, component) {
    component.set("hideSidebar", true);

    component.set("showDropdown1", false);
    component.set("showDropdown2", false);
    component.set("showDropdown3", false);

    document.querySelector(".topic-list").classList.add("with-sidebar");
      withPluginApi("0.11", (api) => {
        api.onPageChange(() => {
          if (settings.enable_top_contributors) {
            if (this.discoveryList) {
              if (this.isDestroyed || this.isDestroying) {
                return;
              }
              component.set("isDiscoveryList", true);

              fetch(`/directory_items.json?period=yearly&order=likes_received`)
                .then((response) => response.json())
                .then((data) => {
                  component.set("hideSidebar", false);
                  this.set("topContributors", data.directory_items.slice(0, 5));
                });
            } else {
              component.set("isDiscoveryList", false);
            }
          }

          fetch('/categories.json')
          .then(res => res.json())
          .then(res => res.category_list.categories)
          .then(data => data.map(category => {
              return {
                url: `/c/${category.slug}/${category.id}`,
                name: category.name
              };
            })
          )
          .then(data => {
            this.set("categories", data);
          });
          


          const dropdown1 = document.querySelector(".dropdown1");
          const dropdownIcon1 = document.querySelector(".showDropdown1");
          dropdownIcon1.addEventListener('click', () => {
            component.set("showDropdown1", !component.showDropdown1);
            if (component.showDropdown1) {
              dropdownIcon1.classList.add('dropdown-icon1-open');
              dropdown1.classList.add('dropdown1-open');
            } else {
              dropdownIcon1.classList.remove('dropdown-icon1-open');
              dropdown1.classList.remove('dropdown1-open');
            }
          });

          const dropdown2 = document.querySelector(".dropdown2");
          const dropdownIcon2 = document.querySelector(".showDropdown2");
          dropdownIcon2.addEventListener('click', () => {
            component.set("showDropdown2", !component.showDropdown2);
            if (component.showDropdown2) {
              dropdownIcon2.classList.add('dropdown-icon2-open');
              dropdown2.classList.add('dropdown2-open');
            } else {
              dropdownIcon2.classList.remove('dropdown-icon2-open');
              dropdown2.classList.remove('dropdown2-open');
            }
          });

          const realQuestionBtn = document.querySelector('#create-topic');
          const container = document.querySelector('.side-nav-wrapper');
          if (realQuestionBtn && container) {
            const visibleQuestionBtn = container.querySelector('.question-btn');
            visibleQuestionBtn.addEventListener('click', e => {
              realQuestionBtn.click();
            })
          }
        });
      });
  },
};
