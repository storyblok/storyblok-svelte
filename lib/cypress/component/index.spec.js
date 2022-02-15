import App from "@storyblok/playground/Testing.svelte";
// import Teaser from "@storyblok/playground/Teaser.svelte";
import { mount } from "cypress-svelte-unit-test";

describe("@storyblok/svelte", () => {
  beforeEach(() => {
    cy.spy(window.console, "log").as("log");
    cy.spy(window.console, "error").as("error");
    delete window.storyblokRegisterEvent;
    // document.getElementById("storyblok-javascript-bridge")?.remove();
  });
  describe("JS Bridge", () => {
    it("loads per default on mount", () => {
      mount(App);
      cy.get("#storyblok-javascript-bridge").should("exist");
    });
    it("doesn't load if the bridge is disabled", () => {
      mount(App, {
        props: {
          bridge: false,
        },
      });
      cy.get("#storyblok-javascript-bridge").should("not.exist");
      cy.get("@error").should(
        "be.calledWithMatch",
        "Storyblok Bridge is disabled"
      );
    });
  });

  describe("useStoryblokApi", () => {
    it("should return an instance of the API if we use the API Plugin", () => {
      mount(App, {
        props: {
          accessToken: "pKHHk3IqorP1mrfe8fACOwtt",
        },
      });
      cy.get('[data-test="api"]').should("have.text", "true");
    });
    it("shouldn't return an instance of the API if no access token is provided", () => {
      mount(App);
      cy.get('[data-test="api"]').should("have.text", "false");
    });
    it("should return an error message when no access token is provided", () => {
      mount(App);
      cy.get("@log").should(
        "be.calledWithMatch",
        "You can't use useStoryblokApi"
      );
    });
  });

  // describe("StoryblokComponent", () => {
  //   it("Gets data-blok-c and data-blok-uid attributes", () => {
  //     mount(App, {
  //       props: {
  //         accessToken: "pKHHk3IqorP1mrfe8fACOwtt",
  //         components: {
  //           teaser: Teaser,
  //         },
  //         blok: {
  //           component: "teaser",
  //           headline: "Hello Svelte",
  //           _editable: `<!--#storyblok#{ "id": 12345, "uid": "fc34-uad1"}-->`,
  //         }
  //       },
  //     });
  //     cy.get('[data-test="editable"]')
  //       .should('exist')
  //   });
  // });
});

// StoryblokComponent

//   describe("v-editable directive", () => {
//     beforeEach(() => prepare());

//     it("Gets data-blok-c and data-blok-uid attributes", () => {
//       cy.get("[data-test=editable]")
//         .should("have.attr", "data-blok-c")
//         .and("equals", '{"id":12345,"uid":"fc34-uad1"}');

//       cy.get("[data-test=editable]")
//         .should("have.attr", "data-blok-uid")
//         .and("equals", "12345-fc34-uad1");
//     });

//     it("Adds 'storyblok__outline' class to the element", () => {
//       cy.get("[data-test=editable]").should("have.class", "storyblok__outline");
//     });
//   });
