import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from './../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage

describe('Orange HRM Tests', () => {

  const selectorsList = {
    
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
  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails('Babilei', 'José')
    myInfoPage.fillEmployeeDetails('1234', 'OtherId', 'Drivers Number', '2024-07-29')
    myInfoPage.fillStatus ()
    myInfoPage.saveForm()

  })
  
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredencialAlert)
  })
  })