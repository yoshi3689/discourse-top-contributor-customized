import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  setupComponent(attrs, component) {
    component.set("hideSidebar", true);
    let dropdownSwitch1 = false;
    let dropdownSwitch2 = false;
    let dropdownSwitch3 = false;

    component.set("showDropdown1", dropdownSwitch1);
    component.set("showDropdown2", dropdownSwitch2);
    component.set("showDropdown3", dropdownSwitch3);

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
          const dropdownIcon1 = document.querySelector(".showDropdown1");
          dropdownIcon1.addEventListener('click', () => {
            component.set("showDropdown1", !dropdownSwitch1);
          })
        });
      });
  },
};
