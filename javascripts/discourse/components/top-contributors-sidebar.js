import Component from "@ember/component";
import { inject as service } from "@ember/service";
import { defaultHomepage } from "discourse/lib/utilities";
import { and, bool } from "@ember/object/computed";
import discourseComputed, { observes } from "discourse-common/utils/decorators";

export default Component.extend({
  router: service(),
  tagName: "",

  @discourseComputed("router.currentRouteName")
  displayForRoute(currentRouteName) {
    const showOn = settings.show_on;
    if (showOn === "homepage") {
      return currentRouteName === `discovery.${defaultHomepage()}`;
    } else if (showOn === "top_menu") {
      return this.siteSettings.top_menu
        .split("|")
        .any((m) => `discovery.${m}` === currentRouteName);
    } else {
      return (
        currentRouteName !== "full-page-search" &&
        !currentRouteName.startsWith("admin.")
      );
    }
  },

  // check if the user is on a single topic page based on a route name provided by Discourse
  @discourseComputed("router.currentRouteName")
  isOnSingleTopic(currentRouteName) {
    return currentRouteName.includes("topic");
  },

  shouldDisplay: bool("displayForRoute"),

  // hide the question button on a single topic page
  shouldHideQBtn: bool("isOnSingleTopic"),

  // Setting a class on <html> from a component is not great
  // but we need it for backwards compatibility
  @observes("shouldDisplay")
  displayChanged() {
    document.documentElement.classList.toggle(
      "display-search-banner",
      this.shouldDisplay
    );
  },
  @observes("shouldHideQBtn")
  routeChanged() {
    if (this.shouldHideQBtn) {
      const wrapper = document.querySelector(".side-nav-wrapper");
      if (wrapper) {
        wrapper.classList.add("onTopicPage");
      } else {
        wrapper.classList.remove("onTopicPage");
      }
    }
  },
  didInsertElement() {
    this.displayChanged();
  },

  didDestroyElement() {
    document.documentElement.classList.remove("display-search-banner");
  },
});
