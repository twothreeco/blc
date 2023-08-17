const axios = require('axios');

export default function handler(req, res) {
    // Get data submitted in request's body.
    //KEY AND FORM NEED CHECKING / SETTING UP FOR THIS ENDPOINT!
    const key = `60415b3a803172ba2c10875984238e`;
    const form = JSON.parse(req.body);
    // console.log(body);
    let config = {
        method: 'post',
        url: `https://forms.itzerott.com/api/forms/submit/HDGK?token=${key}`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            // "form": {
            form

            // }
        }
    }

    axios(config)
        .then((response) => {
            res.status(200).json(response.data);

        })
        .catch((error) => {
            console.log(error)
        })

}