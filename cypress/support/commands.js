 Cypress.Commands.add('SignIn', () => { 

        const username = Cypress.env('userData').username
        const password = Cypress.env('userData').password
    
        cy.session("Login",()=>{
            cy.visit("/")
            cy.url().should("contain","orangehrm")
            cy.get("[name='username']").type(username)
            cy.get("[name='password']").type(password)
            cy.get("[type='submit']").click()
            
            //cy.document()its('cookie').should('contain', 'orangehrm')
            //cy.getCookie('orangehrm').should('exist')


        })
    
})
Cypress.Commands.add('downloadFile', { prevSubject: 'element' }, (subject, downloadUrl, downloadPath) => {
    return cy.wrap(subject, { log: false }).then((subject) => {
      return cy.task('downloadFile', { downloadUrl, downloadPath, method: 'GET' }).then(() => subject);
    });
});