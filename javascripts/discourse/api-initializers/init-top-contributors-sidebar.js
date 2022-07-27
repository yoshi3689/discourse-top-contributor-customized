import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.8", (api) => {
  document.querySelector(".topic-list").classList.add("with-sidebar");
    const connectorNameToDisable =
      window.location.pathname.includes("/t/") ?
      "after-topic-list-body" :
      "above-timeline";
    api.registerConnectorClass(connectorNameToDisable, "top-contributors-sidebar", {
      shouldRender() {
        return false;
      },
    });
    api.onPageChange(() => {
      const realQuestionBtn = document.querySelector('#create-topic');
      const container = document.querySelector('.side-nav-wrapper');
      if (realQuestionBtn && container) {
        const visibleQuestionBtn = container.querySelector('.question-btn');
        visibleQuestionBtn.addEventListener('click', e => {
          realQuestionBtn.click();
        })
      }
    });
  
})