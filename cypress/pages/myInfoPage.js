class MyInfoPage {
  selectorsList() {
    const selectors = {
      firstNameField: "[name='firstName']",
      lastNameField: "[name='lastName']",
      genericField: ".oxd-input--active",
      dateField: "[placeholder='yyyy-dd-mm']",
      dateCloseButton: '.--close',
      submitButton: "[type='submit']",
      nationalityButton: "[clear='false']",
      changeNationalityField: ":nth-child(5) > span",
      maritalStatusButtton: "[clear='false']",
      changeMaritalStatusField: '.oxd-select-dropdown > :nth-child(3)',

    }
    return selectors
  }
  fillPersonalDetails(firstName, lastName) {
    cy.get(this.selectorsList().firstNameField).clear().type(firstName)
    cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    
  }
  fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, expyreDate) {
    cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
    cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
    cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
    cy.get(this.selectorsList().genericField).eq(6).clear().type(expyreDate)
    cy.get(this.selectorsList().dateCloseButton).click()

    
  }
  
  saveForm() {
    cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  }

  fillStatus() {
    cy.get(this.selectorsList().nationalityButton).eq(0).click()
    cy.get(this.selectorsList().changeNationalityField).click()
    cy.get(this.selectorsList().maritalStatusButtton).eq(1).click()
    cy.get(this.selectorsList().changeMaritalStatusField).click()
  }
}

export default MyInfoPage