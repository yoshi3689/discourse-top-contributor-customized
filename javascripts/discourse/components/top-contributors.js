import Component from "@ember/component";

export default Component.extend({
  tagName: "",

  init() {
    this._super(...arguments);
    // fetch top contributors using discourse API
    fetch(`/directory_items.json?period=yearly&order=likes_received`)
      .then((response) => response.json())
      .then((data) => {
        this.set("topContributors", data.directory_items.slice(0, 5));
      });
  },
  shouldQuestionBtnAppear: !window.location.pathname.includes("/t/"),
});