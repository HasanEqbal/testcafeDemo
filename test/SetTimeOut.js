import { Selector } from "testcafe";

fixture("Speed test feature")
    .page("https://devexpress.github.io/testcafe/example/");

test("Set speed test", async t => {
    await t
        .setTestSpeed(0.01)
        .typeText('#developer-name', 'TAU')
        .click('#macos')
        .click('#submit-button');
});