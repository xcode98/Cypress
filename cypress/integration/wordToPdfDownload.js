describe('Descarga de archivo en ilovepdf.com', () => {
  it('Debería descargar un archivo PDF', () => {
    const myFile = 'CV-GianSilva.pdf';
    const downloadPath = 'cypress/downloads'; // Directorio de descargas personalizado

    cy.visit("https://www.ilovepdf.com/es/pdf_a_word");
    
    cy.fixture(myFile, 'binary').then((fileContent) => {
        // Convertir el contenido del archivo en un Blob
        const blob = Cypress.Blob.binaryStringToBlob(fileContent);

        

        // Crear un nuevo objeto File para el archivo
        const testFile = new File([blob], myFile, { type: 'application/pdf' });
  
        // Adjuntar el archivo utilizando cy.get().attachFile()
        cy.get('input[type="file"]').attachFile({
          fileContent: testFile,
          fileName: myFile,
          mimeType: 'application/pdf',
          encoding: 'utf-8',
        });
  
        
        cy.wait(5000);
  
        cy.get('#processTask').click();
        cy.get('#processText').should('not.contain', 'Convirtiendo PDF a Word...', { timeout: 30000 });
        cy.url().should("contain", "/es/descarga")
        cy.downloadFile('', downloadPath);

  });
});
})