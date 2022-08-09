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
    console.log(connectorNameToDisable === "after-topic-list-body", document.querySelector(".post-stream"));
    if (connectorNameToDisable === "after-topic-list-body") {
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

    const realQuestionBtn = document.querySelector('#create-topic');
    const container = document.querySelector('.side-nav-wrapper');
    if (realQuestionBtn && container) {
      const visibleQuestionBtn = container.querySelector('.question-btn');
      visibleQuestionBtn.addEventListener('click', e => {
        // console.log(realQuestionBtn, container, visibleQuestionBtn);
        realQuestionBtn.click();
      })
    }
  });
})

// import {
//   withPluginApi
// } from "discourse/lib/plugin-api";

// export default {
//   setupComponent(attrs, component) {
//     component.set("hideSidebar", true);
//     component.set("showDropdown1", false);
//     component.set("showDropdown2", false);

//     withPluginApi("0.11", (api) => {
//       api.onPageChange(() => {
//         const connectorNameToDisable =
//           window.location.pathname.includes("/t/") ?
//           "after-topic-list-body" :
//           "above-timeline";
//         api.registerConnectorClass(connectorNameToDisable, "top-contributors-sidebar", {
//           shouldRender() {
//             return false;
//           },
//         });

//         const topicList = document.querySelector(".topic-list")
//         if (topicList) {
//           topicList.classList.add("with-sidebar");
//         }

//         // add top margin to the first element when on the homepage
//         if (connectorNameToDisable === "after-topic-list-body") {
//           document.querySelector(".select-kit").classList.add("top-spacer");
//         } else if (connectorNameToDisable === "above-timeline" && document.querySelector(".side-nav-wrapper")) {
//           document.querySelector(".side-nav-wrapper").classList.add("top-offset");
//         }


//         const dropdown1 = document.querySelector(".dropdown1");
//         const dropdownIcon1 = document.querySelector(".showDropdown1");
//         dropdownIcon1.addEventListener('click', () => {
//           component.set("showDropdown1", !component.showDropdown1);
//           if (component.showDropdown1) {
//             dropdownIcon1.classList.add('dropdown-icon1-open');
//             dropdown1.classList.add('dropdown1-open');
//           } else {
//             dropdownIcon1.classList.remove('dropdown-icon1-open');
//             dropdown1.classList.remove('dropdown1-open');
//           }
//         });

//         const dropdown2 = document.querySelector(".dropdown2");
//         const dropdownIcon2 = document.querySelector(".showDropdown2");
//         dropdownIcon2.addEventListener('click', () => {
//           component.set("showDropdown2", !component.showDropdown2);
//           if (component.showDropdown2) {
//             dropdownIcon2.classList.add('dropdown-icon2-open');
//             dropdown2.classList.add('dropdown2-open');
//           } else {
//             dropdownIcon2.classList.remove('dropdown-icon2-open');
//             dropdown2.classList.remove('dropdown2-open');
//           }
//         });

//         const realQuestionBtn = document.querySelector('#create-topic');
//         const container = document.querySelector('.side-nav-wrapper');
//         if (realQuestionBtn && container) {
//           const visibleQuestionBtn = container.querySelector('.question-btn');
//           visibleQuestionBtn.addEventListener('click', e => {
//             realQuestionBtn.click();
//           })
//         }

//       });
//     });
//   },
// };