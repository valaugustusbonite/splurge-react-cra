import { Uploader } from 'uploader'


export const uploader = new Uploader({
  apiKey: "free"
});

export const chooseFile = () => {
  uploader.open({ multi: true }).then(files => {
    if (files.length === 0) {
      console.log('No files selected.')
    } else {
      console.log('Files uploaded:');
      console.log(files.map(f => f.fileUrl));
    }
  }).catch(err => {
    console.error(err);
  });
}
