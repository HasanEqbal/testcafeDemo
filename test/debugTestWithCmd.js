import { Selector } from 'testcafe';

const fileUpload = Selector('input#file-upload');
const uploadFileButton = Selector('input#file-submit.buttonss');

fixture("File Upload Fixture")
    .page("https://the-internet.herokuapp.com/upload");

    test("File Upload test",async t =>{
        await t
            .setFilesToUpload(fileUpload,"C://Users//haeqbal//Desktop//Oct30_2021.jpg")
            .clearUpload(fileUpload)
            .setFilesToUpload(fileUpload,'C://Users//haeqbal//Desktop//Oct30_2021.jpg')
            .click(uploadFileButton);
    });  