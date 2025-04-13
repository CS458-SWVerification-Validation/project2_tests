import { expect } from 'expect-webdriverio';
import SurveyPage from '../pageobjects/Survey.page.js';
const PACKAGE = 'com.anonymous.frontend';
const SURVEY_ACTIVITY = '.MainActivity';      // adjust if different



describe('AI Survey – 5 key test cases', () => {

  before(async () => {
     //Assumes the app is already on the Survey page and logged in.
    const currentActivity = await driver.getCurrentActivity();
    console.log("Current Activity:", currentActivity);
    await SurveyPage.waitForPageToLoad();
  });


  afterEach(async () => {
    // Ensure we return to portrait orientation after each test.
    await driver.setOrientation('PORTRAIT');
  });

  

  /**
   * TC‑02: Submit button gating (City empty)
   */

  it('TC‑02 Submit button gating (City empty)', async () => {
    await SurveyPage.fillStaticFields();
    await SurveyPage.inputCity.clearValue();

    // Expect the submit button to be disabled when the City field is empty.
    await expect(SurveyPage.btnSubmit).not.toBeEnabled();
  });

  /**
   * TC‑03: Future birth-date boundary (using text input)
   */

  it('TC‑03 Birth-date boundary (future date)', async () => {
    // Set Name and Surname
    await SurveyPage.inputName.setValue('John');
    await SurveyPage.inputSurname.setValue('Doe');

    // Calculate tomorrow's date in YYYY-MM-DD format
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = ('0' + (tomorrow.getMonth() + 1)).slice(-2);
    const dd = ('0' + tomorrow.getDate()).slice(-2);
    const tomorrowStr = `${yyyy}-${mm}-${dd}`;

    // Set birth date text input to tomorrow's date
    await SurveyPage.inputBirthDate.setValue(tomorrowStr);

    // Expect the submit button to be disabled if the birth date is in the future.
    await expect(SurveyPage.btnSubmit).not.toBeEnabled();
  });

  /**
   * TC‑04: Dynamic AI‑model defect inputs
   */

  it('TC‑04 Dynamic AI‑model defect inputs', async () => {
    await SurveyPage.fillStaticFields();
    await SurveyPage.chkChatGPT.click();
    await SurveyPage.chkBard.click();

    const chatgptDefect = SurveyPage.defectInput('ChatGPT');
    const bardDefect = SurveyPage.defectInput('Bard');
    //const chatgptDefect = await SurveyPage.defectInput('ChatGPT').element();
    //await chatgptDefect.waitForDisplayed({ timeout: 8000 });
    await expect(chatgptDefect).toBeDisplayed();
    await expect(bardDefect).toBeDisplayed();

    await chatgptDefect.setValue('Sometimes hallucinates');

    // Optional: Toggle off Bard and expect its defect input to disappear.
    await SurveyPage.chkBard.click();
    await expect(bardDefect).not.toBeDisplayed();
  });

  /**
   * TC‑05: default birthday field appears
   */

  
  it('TC‑05 Birth Date field has default placeholder text', async () => {
    await SurveyPage.waitForPageToLoad();
  
    // Get the birth date field value
    const birthDateValue = await SurveyPage.inputBirthDate.getText();
  
    // It should contain the default placeholder
    expect(birthDateValue).toContain('2000');
  });
  
  /**
   * TC‑01: Happy-path submission
   */

  it('TC‑01 Happy path submission', async () => {
    await SurveyPage.fillStaticFields();
    await SurveyPage.chkChatGPT.click();
    await SurveyPage.txtUseCase.setValue('Planning holiday routes');
    await SurveyPage.btnSubmit.click();
  });
  
});
