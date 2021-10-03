import { Selector } from 'testcafe';
const article = Selector('#article-content');

fixture `MyFixture`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Test to tick Support for testing on remote devices', async t => {
    // Find Element
    let element = Selector('#remote-testing');

    await t.click(element);
});

test('Test to typing text into field yourname', async t => {
    // Find Element
    let element = Selector('input[type="text"][name="name"]');

    await t
    // .expect(element).eql('', 'input is empty')
    .typeText(element,"Pandji Mulia Budiman")
    .expect(element.value).eql('Pandji Mulia Budiman', 'Input Tidak Sesuai');


});

test('Test to Choose Option Value in Dropdown List', async t => {
    // Find Element
    let element = Selector('#preferred-interface');
    let elementOption = element.find('option');

    await t
    .click(element)
    .click(elementOption.withText('Both'))
    .expect(element.value).eql('Both', "Salah Pilih");


});