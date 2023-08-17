const axios = require('axios');

export default function handler(req, res) {
    // Get data submitted in request's body.
    const key = `60415b3a803172ba2c10875984238e`;
    let form = JSON.parse(req.body);

    let config = {
        method: 'post',
        url: `https://forms.itzerott.com/api/forms/submit/Hodgkinson_2023_Site?token=${key}`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: {

            form

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