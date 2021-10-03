import { Selector, t } from 'testcafe';

fixture `Tokopedia Test`
    .page `https://www.tokopedia.com/`;

test('Test to Choose Option Value in DropDown List Pulsa Tokopedia', async t => {
    // Find Elements
    let elementFieldPhone = Selector('input[name="clientNumber"]')
    let elementDropDownList = Selector('button[type="button"][data-unify="Select"]');
    let elementDropDownOptions = Selector('ul[role="listbox"]').find('li[role="option"]');

    // Try to type phoneNumber
    await t.typeText(elementFieldPhone, "08123456789");
    
    // Try to click DropDown Element
    await t.click(elementDropDownList);

    // Try to select DropDown Value
    await t.click(elementDropDownOptions.withText("15.000 - Rp16.500"));

    // // Assert Value DropDown Equal to Previous Selected Option
    // await t.expect(elementDropDownList.value).eql("Both", "Value yg di set di DropDown itu tidak sesuai");  
});