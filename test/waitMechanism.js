import { Selector } from 'testcafe';

fixture `My fixture`
    .page `https://devexpress.github.io/testcafe/example`;

const nameInput    = Selector('#developer-name');
const submitButton = Selector('#submit-button');

test('Actions Test', async t => {
    await t
        .typeText(nameInput, 'Peter Parker') // Waits for `#developer-name`
        .click(submitButton);                // Waits for '#submit-button'
});

test('Selection Test', async t => {

    // Waits for '#developer-name' to appear in the DOM.
    const nameInputElement = await nameInput();
});