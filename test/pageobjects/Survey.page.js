class SurveyPage {
  /* ---- static controls (accessibility‑id = ~) ---- */
  get inputName()        { return $('~inputName'); }
  get inputSurname()     { return $('~inputSurname'); }
  get inputBirthDate()   { return $('~inputBirthDate'); }
  get pickerEducation()  { return $('~pickerEducation'); }
  get inputCity()        { return $('~inputCity'); }
  get pickerGender()     { return $('~pickerGender'); }

  get chkChatGPT()       { return $('~chkChatGPT'); }
  get chkBard()          { return $('~chkBard'); }
  get chkClaude()        { return $('~chkClaude'); }
  get chkCopilot()       { return $('~chkCopilot'); }

  get txtUseCase()       { return $('~inputUseCase'); }
  get btnSubmit()        { return $('~btnSubmit'); }
  get toast()            { return $('//android.widget.Toast'); }

  /* ---- dynamic helper ---- */
  defectInput(model) {
     //scroll into view *then* return the element
    const selector = `new UiScrollable(new UiSelector().scrollable(true))` +
                     `.scrollIntoView(new UiSelector().description("inputDefectsCons${model}"))`;
    return $(`android=${selector}`);
  }
   
  
 

  /* ---- reusable filler ---- */
  async fillStaticFields() {
    await this.inputName.setValue('Ada');
    await this.inputSurname.setValue('Lovelace');
    await this.inputBirthDate.setValue('2000-01-01');

    await this.pickerEducation.click();
    await $('android=new UiSelector().textContains("Bachelor")').click();

    await this.inputCity.setValue('Ankara');

    await this.pickerGender.click();
    await $('android=new UiSelector().textContains("Female")').click();
  }

  async waitForPageToLoad() {
    await this.inputName.waitForDisplayed({ timeout: 20000 });
  }
}

export default new SurveyPage();
