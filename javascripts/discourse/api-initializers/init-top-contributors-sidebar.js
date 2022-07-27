import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.8", (api) => {
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
      document.querySelector(".topic-list").classList.add("with-sidebar");
      const realQuestionBtn = document.querySelector('#create-topic');
      const container = document.querySelector('.side-nav-wrapper');
      if (realQuestionBtn && container) {
        const visibleQuestionBtn = container.querySelector('.question-btn');
        visibleQuestionBtn.addEventListener('click', e => {
          realQuestionBtn.click();
        })
      }

      const dropdown1 = document.querySelector(".dropdown1");
    const dropdownIcon1 = document.querySelector(".showDropdown1");
    dropdownIcon1.addEventListener('click', () => {
      this.set("showDropdown1",!this.showDropdown1);
      if (this.showDropdown1) {
        dropdownIcon1.classList.add('dropdown-icon1-open');
        dropdown1.classList.add('dropdown1-open');
      } else {
        dropdownIcon1.classList.remove('dropdown-icon1-open');
        dropdown1.classList.remove('dropdown1-open');
      }
    });

    const dropdown2 = document.querySelector(".dropdown2");
    const dropdownIcon2 = document.querySelector(".showDropdown2");
    dropdownIcon2.addEventListener('click', () => {
      this.set("showDropdown2" ,!this.showDropdown2);
      if (this.showDropdown2) {
        dropdownIcon2.classList.add('dropdown-icon2-open');
        dropdown2.classList.add('dropdown2-open');
      } else {
        dropdownIcon2.classList.remove('dropdown-icon2-open');
        dropdown2.classList.remove('dropdown2-open');
      }
    });
    });
  
})