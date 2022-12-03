const axios = require("axios");

require("dotenv").config();
const uri = process.env.URI;

const seeDriversBySeason = async (req, res) => {
  try {
    const url = uri + `/${req.params.season}/drivers.json`;
    console.log(url);
    const response = await axios.get(url);
    console.log(response.data.MRData.DriverTable.Drivers.map());
    res.json({
      status: response.status,
      data: response.data.MRData.DriverTable.Drivers.map(
        (driver) =>
          driver.givenName + " " + driver.familyName + " url: " + driver.url
      ),
    });
  } catch (error) {
    res.json({ status: error.response.status, data: error.response.data });
  }
};

module.exports = { seeDriversBySeason };
