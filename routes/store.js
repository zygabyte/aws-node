const express = require('express');
const multer = require('multer');

const UploadUtil = require('../utilities/upload');
const router = express.Router();
const upload = multer();

router.post('/upload', upload.single('s3_storage'), (req, res) => {
    const file = req.file;
    const uploadtilities = new UploadUtil();

    const uploadResult = uploadtilities.uploadFile(file);

    if (uploadResult.success)
        return res.status(200).send(uploadResult);

    res.status(501).send(uploadResult);
});


module.exports = router;