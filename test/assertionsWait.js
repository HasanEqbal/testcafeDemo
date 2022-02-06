fixture `My fixture`
    .page `https://devexpress.github.io/testcafe/example`;

const nameInput = Selector('#developer-name');
const populate  = Selector('#populate');

test('My test', async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click(populate)

        // Waits for the '#developer-name'
        // element to appear in DOM.
        .expect(nameInput.exists).ok()

        // Keeps trying to obtain nameInput.value
        // until it equals 'Peter Parker'
        // or the timeout passes.
        .expect(nameInput.value).eql('Peter Parker');
});