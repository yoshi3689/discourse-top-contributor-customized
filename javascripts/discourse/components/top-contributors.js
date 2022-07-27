import Component from "@ember/component";

export default Component.extend({
  tagName: "",

  init() {
    if (settings.enable_top_contributors) {
      if (this.discoveryList) {
        if (this.isDestroyed || this.isDestroying) {
          return;
        }
        fetch(`/directory_items.json?period=yearly&order=likes_received`)
          .then((response) => response.json())
          .then((data) => {
            this.set("topContributors", data.directory_items.slice(0, 5));
          });
      } 
    }
  },
});
