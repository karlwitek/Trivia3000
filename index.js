const express = require('express');
const pool = require('./public/db');
const path = require('path');
const port = 3000;

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

async function checkUsername(username) {
  const nameQuery = 'SELECT id FROM players WHERE username = $1';
  try {
    const result = await pool.query(nameQuery, [username]);
    if (result.rows[0]) {
      return 1;
    } else {
      return 0;
    }
  } catch (err) {
    console.log(err);
  }
};

async function checkPassword(password) {
  const passQuery = 'SELECT id FROM players WHERE userpassword = $1';
  try {
    const result = await pool.query(passQuery, [password]);
    if (result.rows[0]) {
      return 1;
    } else {
      return 0;
    }
  } catch (err) {
    console.log(err);
  }
};

async function createNewUser(username, password) {
  const insertQuery = 'INSERT INTO players(username, userpassword) VALUES($1, $2) RETURNING *';
  const values = [username, password];

  try {
    const result = await pool.query(insertQuery, values);
    return result.rows[0];
  } catch(err) {
    console.log(err);
  }
};

async function getCurrentUser(username, password) {
  const query = 'SELECT * FROM players WHERE username = $1 AND userpassword = $2';
  const values = [username, password];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch(err) {
    console.log(err);
  }
};

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.post('/data', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const btnSelected = req.body.btnSelected;

  const usernameExists = await checkUsername(username);
  const passwordExists = await checkPassword(password);

  
  if (btnSelected == "sign-up") {
    if ((!usernameExists) && (!passwordExists)) {
      try {
        const newUserObj = await createNewUser(username, password);
        res.send(newUserObj);
      } catch (err) {
        console.log(err);
      }
    
    } else if ((!usernameExists) && (passwordExists)) {
      res.send({ msg: 'pe-su' });// passwordExists-SignUp
    } else if ((usernameExists) && (!passwordExists)) {
      res.send({ msg: 'ue-su' });// usernameExists-SignUp
    } else if ((usernameExists) && (passwordExists)) {
      res.send({ msg: 'be-su' });// both exist-SignUp
    } else {
      res.send({ msg: 'error in sign-up' });
    }
  } else if (btnSelected == "sign-in") {
      if ((usernameExists) && (passwordExists)) {
        try {
          const currentUserObj = await getCurrentUser(username, password);
          res.send(currentUserObj);
        } catch(err) {
          console.log(err);
        }
      } else if ((usernameExists) && (!passwordExists)) {
        res.send({ msg: 'np-si'});// password-not-found
      } else if ((!usernameExists) && (passwordExists)) {
        res.send({ msg: 'nu-si'});// username-not-found
      } else if ((!usernameExists) && (!passwordExists)) {
        res.send({ msg: 'np-nu-si' });// neither found
      } else {
        res.send({ msg: 'error in sign-in'});
      }
  } else {
    res.send({ msg: 'button skipped'});
  }
});

app.put('/data', async (req, res) => {
  const id = req.body.id;
  const ct = req.body.correct;
  const ict = req.body.incorrect;
  const ngp = req.body.numgamesplayed;
  const tg = req.body.totalguesses;

  const query = `UPDATE players SET correct = ${ct}, incorrect = ${ict}, 
                 numgamesplayed = ${ngp}, totalguesses = ${tg} WHERE id = ${id} 
                 RETURNING *`;

  try {
    const result = await pool.query(query);
    res.send(result.rows[0]);
  } catch(err) {
    console.log(err);
  }
});

app.get('/data', async (req, res) => {
  const query = 'SELECT * FROM players';
  try {
    const result = await pool.query(query);
    res.send(result.rows);
  } catch(err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Trivia game app listening on port ${port}!`);
});

