/// <reference types="Cypress" />

import SurveyLocators from '../locators/SurveyLocators';

class SurveyFunctions {
  open_surveys_page() {
    cy.get(SurveyLocators.stngsBtn).click();
    cy.url().should('include', 'settings/general');
    cy.get(SurveyLocators.surveysBtn).click();
    cy.url().should('include', 'settings/surveys');
    //verify number of available surveys
    cy.get(SurveyLocators.surveysList + ' li').should('have.length.at.least', 27);
  }
  open_survey_creation_page_steps() {
    cy.get(SurveyLocators.addSurveyBtn).click();
    cy.url().should('include', '/surveys/create');
  }

  add_survey_details_steps() {
    cy.get(SurveyLocators.srvyNameField).type('Automated Survey');
    cy.get(SurveyLocators.srvyDscrptnField).type('Automated Description');
  }

  add_survey_fields_steps() {
    //Survey Main Title
    cy.get(SurveyLocators.mainTitleEdit).click();
    cy.get(SurveyLocators.mainTitleTxt).type(' - Automated');
    cy.get(SurveyLocators.saveBtn).click();

    //Survey Main Description
    cy.get(SurveyLocators.mainDscrptnEdit).click();
    cy.get(SurveyLocators.mainDscrptnTxt).type(' - Automated');
    cy.get(SurveyLocators.saveBtn).click();

    //click Add field button to open list of fields
    cy.get(SurveyLocators.addFieldBtn).click();

    //short text field
    cy.get(SurveyLocators.shortTxtBtn).click();
    cy.get(SurveyLocators.shortNameField).type(' - Automated');
    cy.get(SurveyLocators.saveBtn).click();

    //long text field
    cy.get(SurveyLocators.addFieldBtn).click();

    cy.get(SurveyLocators.longTxtBtn).click();
    cy.get(SurveyLocators.longNameField).type(' - Automated');
    cy.get(SurveyLocators.saveBtn).click();

    //decimal field
    cy.get(SurveyLocators.addFieldBtn).click();
    cy.get(SurveyLocators.decimalTxtBtn).click();
    cy.get(SurveyLocators.decimalNameField).type(' - Automated');
    cy.get(SurveyLocators.saveBtn).click();

    // integer field
    cy.get(SurveyLocators.addFieldBtn).click();
    cy.get(SurveyLocators.integerTxtBtn).click();
    cy.get(SurveyLocators.integerNameField).type(' - Automated');
    cy.get(SurveyLocators.saveBtn).click();

    //location field
    cy.get(SurveyLocators.addFieldBtn).click();
    cy.get(SurveyLocators.locationTxtBtn).click();
    cy.get(SurveyLocators.locationNameField).type(' - Automated');
    cy.get(SurveyLocators.saveBtn).click();

    //date field
    cy.get(SurveyLocators.addFieldBtn).click();
    cy.get(SurveyLocators.dateTxtBtn).click();
    cy.get(SurveyLocators.dateNameField).type(' - Automated');
    cy.get(SurveyLocators.saveBtn).click();

    //dateTime field
    cy.get(SurveyLocators.addFieldBtn).click();
    cy.get(SurveyLocators.dateTimeTxtBtn).click();
    cy.get(SurveyLocators.dateTimeNameField).type(' - Automated');
    cy.get(SurveyLocators.saveBtn).click();

    //select field
    cy.get(SurveyLocators.addFieldBtn).click();
    cy.get(SurveyLocators.selectTxtBtn).click();
    cy.get(SurveyLocators.selectNameField).type(' - Automated');
    //add select options
    cy.get(SurveyLocators.addOptionBtn).click();
    cy.get(SurveyLocators.selectOptionOneField).type('S1');
    cy.get(SurveyLocators.addOptionBtn).click();
    cy.get(SurveyLocators.selectOptionTwoField).type('S2');
    cy.get(SurveyLocators.addOptionBtn).click();
    cy.get(SurveyLocators.selectOptionThreeField).type('S3');

    cy.get(SurveyLocators.saveBtn).click();

    //radio field
    cy.get(SurveyLocators.addFieldBtn).click();
    cy.get(SurveyLocators.radioTxtBtn).click();
    cy.get(SurveyLocators.radioNameField).type(' - Automated');
    //add radio options
    cy.get(SurveyLocators.addOptionBtn).click();
    cy.get(SurveyLocators.selectOptionOneField).type('R1');
    cy.get(SurveyLocators.addOptionBtn).click();
    cy.get(SurveyLocators.selectOptionTwoField).type('R2');
    cy.get(SurveyLocators.addOptionBtn).click();
    cy.get(SurveyLocators.selectOptionThreeField).type('R3');
    cy.get(SurveyLocators.saveBtn).click();

    //checkbox field
    cy.get(SurveyLocators.addFieldBtn).click();
    cy.get(SurveyLocators.chckbxTxtBtn).click();
    cy.get(SurveyLocators.chckbxNameField).type(' - Automated');
    //add checkbox options
    cy.get(SurveyLocators.addOptionBtn).click();
    cy.get(SurveyLocators.selectOptionOneField).type('C1');
    cy.get(SurveyLocators.addOptionBtn).click();
    cy.get(SurveyLocators.selectOptionTwoField).type('C2');
    cy.get(SurveyLocators.addOptionBtn).click();
    cy.get(SurveyLocators.selectOptionThreeField).type('C3');
    cy.get(SurveyLocators.saveBtn).click();

    //related post field
    cy.get(SurveyLocators.addFieldBtn).click();
    cy.get(SurveyLocators.relatedPostTxtBtn).click();
    cy.get(SurveyLocators.relatedNameField).type(' - Automated');
    cy.get(SurveyLocators.saveBtn).click();

    //image field
    cy.get(SurveyLocators.addFieldBtn).click();
    cy.get(SurveyLocators.imageTxtBtn).click();
    cy.get(SurveyLocators.imageNameField).type(' - Automated');
    cy.get(SurveyLocators.saveBtn).click();

    //embed field
    cy.get(SurveyLocators.addFieldBtn).click();
    cy.get(SurveyLocators.embedVideoTxtBtn).click();
    cy.get(SurveyLocators.embedNameField).type(' - Automated');
    cy.get(SurveyLocators.saveBtn).click();

    //markdown field
    cy.get(SurveyLocators.addFieldBtn).click();
    cy.get(SurveyLocators.markdownTxtBtn).click();
    cy.get(SurveyLocators.markdownNameField).type(' - Automated');
    cy.get(SurveyLocators.saveBtn).click();

    //categories field
    // cy.contains(".mat-ripple.list-item.ng-star-inserted", "Categories").click();
  }

  complete_add_survey_steps() {
    cy.get(SurveyLocators.completeSurveyBtn).click();
  }

  delete_survey() {
    cy.get(SurveyLocators.bulkActionsBtn).click();
    cy.get(SurveyLocators.deleteSurveyBtn).should('be.visible');
    cy.get('#mat-checkbox-27').click();
    cy.get(SurveyLocators.deleteSurveyBtn).click();
    cy.get(SurveyLocators.deleteSrvyConfirmBtn).should('be.visible').click();
  }

  verify_survey_deleted() {
    //confirm deletion
    cy.get(SurveyLocators.surveyForDeletion).should('not.exist');
    cy.get(SurveyLocators.deleteSurveyBtn).should('be.visible');
  }
  verify_created_survey_exists() {
    cy.get(SurveyLocators.createdSurveyBtn).should('exist');
  }
}

export default SurveyFunctions;
