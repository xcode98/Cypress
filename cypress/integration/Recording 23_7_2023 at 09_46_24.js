describe("Recording 23/7/2023 at 09:46:24", () => {
  it("tests Recording 23/7/2023 at 09:46:24", () => {
    cy.viewport(729, 970);
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    cy.get("form > div:nth-of-type(1) input").click();
    cy.get("form > div:nth-of-type(1) input").type("Admin");
    cy.get("form > div:nth-of-type(2) input").type("admin123{enter}");
    cy.get("div.oxd-topbar-header-userarea span").click();
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
    //cy.location("href").should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  });
});
