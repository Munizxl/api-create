const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});