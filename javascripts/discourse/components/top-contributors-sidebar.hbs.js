import Component from "@ember/component";
import discourseComputed, { observes } from "discourse-common/utils/decorators";

export default Component.extend({
  tagName: "",
  shouldQuestionBtnAppear: !window.location.pathname.includes("/t/"),
});