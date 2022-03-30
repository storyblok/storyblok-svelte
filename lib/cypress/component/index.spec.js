import App from "../../Testing.svelte";
import Teaser from "@storyblok/playground/Teaser.svelte";
import { mount } from "cypress-svelte-unit-test";

describe("@storyblok/svelte", () => {
  beforeEach(() => {
    cy.spy(window.console, "log").as("log");
    cy.spy(window.console, "error").as("error");
    delete window.storyblokRegisterEvent;
    document.getElementById("storyblok-javascript-bridge")?.remove();
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

  describe("getStoryblokApi", () => {
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
        "You can't use getStoryblokApi"
      );
    });
  });

  describe("StoryblokComponent", () => {
    it("Should render the StoryblokComponent if the blok is passed", () => {
      mount(App, {
        props: {
          blok: {
            component: "teaser",
            headline: "Hello Svelte",
            _editable: `<!--#storyblok#{ "id": 12345, "uid": "fc34-uad1"}-->`,
          },
          components: {
            teaser: Teaser,
          },
        },
      });
      cy.get('[data-test="teaser"]').should("exist");
      cy.get("[data-test=teaser]")
        .should("have.attr", "data-blok-c")
        .and("equals", '{"id":12345,"uid":"fc34-uad1"}');
      cy.get("[data-test=teaser]")
        .should("have.attr", "data-blok-uid")
        .and("equals", "12345-fc34-uad1");
      cy.get("[data-test=teaser]").should("have.class", "storyblok__outline");
    });
    it("Should log an error if the blok is not loaded", () => {
      mount(App, {
        props: {
          components: {
            teaser: Teaser,
          },
        },
      });
      cy.get('[data-test="teaser"]').should("not.exist");
      cy.get("@error").should("be.calledWithMatch", "Please provide a 'blok'");
    });
    it("Should log an error if the component is not loaded", () => {
      mount(App, {
        props: {
          blok: {
            component: "teaser",
            headline: "Hello Svelte",
            _editable: `<!--#storyblok#{ "id": 12345, "uid": "fc34-uad1"}-->`,
          },
        },
      });
      cy.get('[data-test="teaser"]').should("not.exist");
      cy.get("@error").should(
        "be.calledWithMatch",
        "You didn't load the teaser"
      );
    });
  });
});
