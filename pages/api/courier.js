import { CourierClient } from "@trycourier/courier";

export default async function handler(req, res) {

        const body = req.body;
        console.log("body:", body);

        if (!body.name || !body.email) {
            return res.json({ data: "Name or Email not found!" });
        }

const fdata = { name: body.name, email: body.email, message: body.msg, recipientName: "Aaron" }

const courier = CourierClient({
    authorizationToken: "pk_prod_Y467MXFCXD4XDTHNTWXHNK53P7J4",
  }); // get from the Courier UI
  const { messageId } = await courier.send({
    eventId: "312WRHPR07MTDGN61999XPS7EHX5", // get from the Courier UI
    recipientId: "250a09ea-3c45-48cf-83c9-5f213", // usually your system's User ID
    profile: {
      email: "aaron@itzerott.com",
      phone_number: "555-228-3890",
    },
    data: fdata, 
  });
  res.redirect('/')
    };