// Load the SDK and UUID
const AWS = require('aws-sdk');
const uuid = require('node-uuid');

class Upload {
    constructor(){
        // Create an S3 client
        this.s3 = new AWS.S3();

        // use a bucket and upload something into it
        const bucketName = 'vgg-aws-test' + uuid.v4();
        const keyName = 's3_storage/' + Date.now();

        const credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
        AWS.config.credentials = credentials;
    }

    uploadFile (data){
        const params = {Bucket: bucketName, Key: keyName, Body: data};
        this.s3.putObject(params, (err, data) => {
          if (err){
            console.log(err)
            return {success: false, message: 'error occured', data: err};
          }
          if (data) {
            console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
            return {success: true, message: 'successfully uploaded', data: data.Location};
          }
          return {success: false, message: 'failed to upload'};
        });
    }
}

module.exports = Upload;