import Component from "@ember/component";

export default Component.extend({
  tagName: "",
  init() {
    this._super(...arguments);
    let importantLinks = settings.importantLinks
    console.log(importantLinks)
    // .split("|")
    // .filter(linkItem => !linkItem.includes("#"))
    // .map(linkItem => {
    //   let linkSplit = linkItem.split(",").trim();
    //   return {name: linkSplit[0], url: linkSplit[1]}
    // });
    // this.set("importantLinks", importantLinks);
  },
});