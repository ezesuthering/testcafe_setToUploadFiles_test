import { Selector } from 'testcafe';

fixture(`Index page`)
.page('http://localhost:3000');

const testImageName = 'test_image.png';

test('TC 00001 - With Action', async t => {
    
    const withActionRouterLink = await new Selector('#withActionLink');
    const inputFile = await new Selector('#withActionInput');
    const submitButton = await new Selector('#withActionButton');
    const fileNameText = await new Selector('#withActionFileName');
    await t
            .click(withActionRouterLink)
            .setFilesToUpload(inputFile, './resources/' + testImageName)
            .click(submitButton)
            .expect(fileNameText.withText('Filename: ' + testImageName).exists).ok('File name is not correct');
  });

  test('TC 00002 - Without Action', async t => {

    const withoutActionRouterLink = await new Selector('#withoutActionLink');
    const hiddenInputFile = await new Selector('#withoutActionInput');
    const fileNameText = await new Selector('#withoutActionFileName');

    await t
            .click(withoutActionRouterLink)
            .setFilesToUpload(hiddenInputFile, './resources/' + testImageName)
            .expect(fileNameText.withText('Filename: ' + testImageName).exists).ok('File name is not correct');
  });