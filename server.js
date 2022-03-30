const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());    

app.get('/:cep', async (req, res) => {
  const { cep } = req.params;

  try {
    const { data } = await axios(`https://ws.apicep.com/cep.json?code=${cep}`);

    const {code, city, district, address, state } = data;

    return res.json({code, city, district, address, state });
  } catch (err) {
    return res.status(400).json(err);
  }
});

app.listen(PORT, () => console.log(`Listening on port:${PORT}`));
