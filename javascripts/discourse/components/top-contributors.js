import Component from "@ember/component";

export default Component.extend({
  tagName: "",

  init() {
    this._super(...arguments);
    fetch(`/directory_items.json?period=yearly&order=likes_received`)
      .then((response) => response.json())
      .then((data) => {
        this.set("topContributors", data.directory_items.slice(0, 5));
      });
      document.addEventListener("DOMContentLoaded", (e) => {
        console.log(footerButtons)
        const footerButtons = document.querySelector("#topic-footer-buttons");
        if (footerButtons) {
          const postContent = document.querySelector(".row");
          console.log(footerButtons, postContent)
          postContent.appendChild(footerButtons);
        }
        
      })
  },
});