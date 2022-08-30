import Component from "@ember/component";

export default Component.extend({
  tagName: "",
  init() {
    this._super(...arguments);
    let importantLinks = settings.important_links
    .split("|")
    .filter(linkItem => !linkItem.includes("#"))
    .map(linkItem => {
      console.log(linkItem)
      let linkSplit = linkItem.split(", ");
      return {name: linkSplit[0], url: linkSplit[1]}
    });
    this.set("importantLinks", importantLinks);
  },
});