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

    // add top margin to the first element when on the homepage
    if (connectorNameToDisable === "after-topic-list-body" && document.querySelector(".topic-list-body")) {
      document.querySelector(".select-kit").classList.add("top-spacer");
      // offset towards the top when on some page??
    } else if (connectorNameToDisable === "above-timeline" && document.querySelector(".side-nav-wrapper")) {
      document.querySelector(".side-nav-wrapper").classList.add("top-offset-small");
      // offset towards the top on an individual topic page
    } else if (connectorNameToDisable === "after-topic-list-body" && document.querySelector(".post-stream")) {
      console.log("hi this condition is working")
      document.querySelector(".side-nav-wrapper").classList.add("top-offset-large");
    }

    const dropdown1 = document.querySelector(".dropdown1");
    const dropdownIcon1 = document.querySelector(".showDropdown1");
    let showDropdown1 = false;
    if (dropdown1 && dropdownIcon1) {
      dropdownIcon1.addEventListener('click', () => {
        showDropdown1 = !showDropdown1;
        if (showDropdown1) {
          dropdownIcon1.classList.add('dropdown-icon1-open');
          dropdown1.classList.add('dropdown1-open');
        } else {
          dropdownIcon1.classList.remove('dropdown-icon1-open');
          dropdown1.classList.remove('dropdown1-open');
        }
      });
    }

    const dropdown2 = document.querySelector(".dropdown2");
    const dropdownIcon2 = document.querySelector(".showDropdown2");
    let showDropdown2 = false;
    if (dropdown2 && dropdownIcon2) {
      dropdownIcon2.addEventListener('click', () => {
        showDropdown2 = !showDropdown2;
        if (showDropdown2) {
          dropdownIcon2.classList.add('dropdown-icon2-open');
          dropdown2.classList.add('dropdown2-open');
        } else {
          dropdownIcon2.classList.remove('dropdown-icon2-open');
          dropdown2.classList.remove('dropdown2-open');
        }
      });
    }

    const dropdown3 = document.querySelector(".dropdown3");
    const dropdownIcon3 = document.querySelector(".showDropdown3");
    let showDropdown3 = false;
    if (dropdown3 && dropdownIcon3) {
      dropdownIcon3.addEventListener('click', () => {
        showDropdown3 = !showDropdown3;
        if (showDropdown3) {
          dropdownIcon3.classList.add('dropdown-icon3-open');
          dropdown3.classList.add('dropdown3-open');
        } else {
          dropdownIcon3.classList.remove('dropdown-icon3-open');
          dropdown3.classList.remove('dropdown3-open');
        }
      });
    }

    const realQuestionBtn = document.querySelector('#create-topic');
    const container = document.querySelector('.side-nav-wrapper');
    if (realQuestionBtn && container) {
      const visibleQuestionBtn = container.querySelector('.question-btn');
      if (realQuestionBtn.disabled) {
        visibleQuestionBtn.disabled = true; 
       }
      visibleQuestionBtn.addEventListener('click', e => {
        // console.log(realQuestionBtn, container, visibleQuestionBtn);
        realQuestionBtn.click();
      })
    }
  });
})
