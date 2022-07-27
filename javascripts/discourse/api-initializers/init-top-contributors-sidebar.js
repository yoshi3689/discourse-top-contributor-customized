import {
  apiInitializer
} from "discourse/lib/api";

export default apiInitializer("0.8", (api) => {
  api.onPageChange(() => {
    const connectorNameToDisable =
    window.location.pathname.includes("/t/") ?
    "after-topic-list-body" :
    "above-timeline";
  api.registerConnectorClass(connectorNameToDisable, "top-contributors-sidebar", {
    shouldRender() {
      return false;
    },
  });
  
    const topicList = document.querySelector(".topic-list")
    if (topicList) {
      topicList.classList.add("with-sidebar");
    }

    const realQuestionBtn = document.querySelector('#create-topic');
    const container = document.querySelector('.side-nav-wrapper');
    if (realQuestionBtn && container) {
      const visibleQuestionBtn = container.querySelector('.question-btn');
      visibleQuestionBtn.addEventListener('click', e => {
        realQuestionBtn.click();
      })
    }

    document.addEventListener("DOMContentLoaded", (e) => {
      console.log(e);
      const footerButtons = document.querySelector("#topic-footer-buttons");
      const postContent = document.querySelector(".posts");
      console.log(footerButtons, postContent)
      postContent.appendChild(footerButtons);
    })

    // if (window.location.pathname.includes("/t/")) {
      
    // }
  });

})