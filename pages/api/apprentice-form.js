const axios = require('axios');

export default function handler(req, res) {
    // Get data submitted in request's body.
    const key = `3ae50c0f76995ff73bdfd4ca581f71`;
    const form = JSON.parse(req.body);
    // console.log(body);
    let config = {
        method: 'post',
        url: `https://forms.itzerott.com/api/forms/submit/Apprenticeships?token=${key}`,
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