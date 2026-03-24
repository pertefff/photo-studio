import { Box, Button, CssBaseline, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, OutlinedInput, ThemeProvider, Tooltip, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import theme from "../theme";
import InputMask from "react-input-mask"
import CardHall from "./components/CardHall";
import config from "../config.json"
import { isArray, isNil } from "lodash";
import { validateName, validateEmail, validatePhone, validateDate } from "./validation"

const serverAPI = axios.create({
  baseURL: config.baseURL,
  headers: config.headers,
})

const Halls = () => {

  const defaultFormValue = {
    hallId: {},
    workers: [],
    name: '',
    phone: '',
    date: '',
    email: '',
  };

  const [form, setForm] = useState(defaultFormValue)
  const [hallsList, setHallsList] = useState([]);
  const [selectedHallId, setSelectedHallId] = useState();
  const [errorInput, setErrorInput] = useState({})
  const [workersList, setWorkersList] = useState([]);

  let prof = [];

  let side = true;
  function setSide() {
    side = !side;
  }

  let workersArray = form.workers;
  const chooseWorker = (name) => {
    if (workersArray.includes(name)) {
      workersArray = workersArray.filter(el => el !== name)
    } else {
      workersArray.push(name)
    }
    // workersArray[name] = !workersArray[name];
    setForm({ ...form, workers: workersArray })
    console.log(form)
  }

  const changeHandler = (event) => {
    let errorInputEvent = '';

    if (event.target.name === 'name') {
      errorInputEvent = validateName(event.target.value)
    }
    if (event.target.name === 'email') {
      errorInputEvent = validateEmail(event.target.value)
    }
    if (event.target.name === 'phone') {
      errorInputEvent = validatePhone(event.target.value)
    }
    if (event.target.name === 'date') {
      errorInputEvent = validateDate(event.target.value)
    }

    if (!(!!errorInputEvent)) setErrorInput({ ...errorInput, [event.target.name]: '' });
    else setErrorInput({ ...errorInput, [event.target.name]: errorInputEvent })

    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form)
  }

  useEffect(() => {
    const apiUrl = '/api/halls';
    serverAPI.get(apiUrl, {
      headers: config.headers,
    })
      .then((resp) => {
        const serverData = resp.data;
        console.log(`got serverdata `, { serverData })

        if (!isArray(serverData.halls)) {
          console.log('server response error, no halls property');
          return;
        }
        setHallsList(serverData.halls);

        if (serverData.halls.length > 0) {
          setSelectedHallId(0);
          setForm({ ...form, hallId: {title: serverData.halls[0]?.title, id: serverData.halls[0]?._id} })
        }
      })
      .catch((error) => { console.log("error ", error.message) });

  }, [])

  useEffect(() => {
    const apiUrl = '/api/about';
    serverAPI.get(apiUrl, {
      headers: config.headers,
    })
      .then((resp) => {
        const serverData = resp.data;
        console.log(`got serverdata `, { serverData })
        setWorkersList(serverData.about);
      })
      .catch((error) => { console.log("error ", error.message) });
  }, [])

  useEffect(() => {
    const hash = window.location.hash
    if (hash && document.getElementById(hash.substring(1))) {
      document.getElementById(hash.substring(1)).scrollIntoView(true)
    }
  })

  //относится к всплывающему окну

  const [dialogData, setDialogData] = React.useState();

  const handleClose = () => {
    setDialogData(null);
  };

  const submitForm = () => {
    for (let key in form) {
      if (form[key] === '') {
        setDialogData({
          title: "Ошибка",
          text: `Поле не может быть пустым`,
        });
        return
      }
    }

    for (let key in errorInput) {
      if (errorInput[key] !== '') {
        setDialogData({
          title: "Ошибка",
          text: `Ошибка ввода`,
        });
        return
      }
    }

    sendOrder();
  }

  const sendOrder = () => {
    try {
      serverAPI.post('/api/order', { ...form, hallId: form.hallId.id }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          console.log(response)
          setDialogData({
            title: "Зал забронирован!",
            text: `На почту придёт письмо с подтверждением.
                        Для отмены бронирования свяжитесь с нами
                        в соц. сетях или по телефону: +7(916)512-17-17`,
          });
          setForm(defaultFormValue)
        })
        .catch(error => console.log(error))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ margin: "0 7%", padding: { xs: "2% 0", md: "7% 0" } }}>
          {hallsList.map((hall, hallIndex) => {
            setSide()
            return (
              <React.Fragment key={hall._id}>
                <CardHall
                  name={hall.title}
                  description={hall.description}
                  image={hall.img}
                  cost={hall.cost}
                  leftSide={side}
                />
                <Box sx={{ display: "block", textAlign: { xs: "center", md: side ? "left" : "right" } }}>
                  <Button href="/halls#order" onClick={() => {
                    setSelectedHallId(hallIndex);
                    setForm({ ...form, hallId: {title: hall.title, id: hall._id} })
                  }}
                    sx={{
                      backgroundColor: { xs: theme.palette.primary.main, md: theme.palette.pink.main },
                      width: { xs: "100%", md: "auto" }
                    }}
                  >Забронировать</Button>
                </Box>
              </React.Fragment>
            )
          })}
        </Box>

        <Box sx={{ width: "100%", padding: "40px 7%", backgroundColor: theme.palette.pink.main }}>
          <Box id={"order"} component={"h1"} sx={{ marginTop: "0", color: theme.palette.primary.main }}>
            Бронирование
          </Box>
          <Typography sx={{ marginTop: "0", color: theme.palette.primary.main }}>
            Выберите зал, а затем заполните форму:
          </Typography>

          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "2%" }}>
                {workersList.map((worker) => {
                  let isVisible = true
                  if (prof.includes(worker.profession)) isVisible = false
                  else prof.push(worker.profession)
                  return (
                    <React.Fragment key={worker._id}>
                      {isVisible &&
                        <Button onClick={() => { chooseWorker(worker.profession) }} style={{
                          fontSize: "16px", fontWeight: "lighter", padding: "5px 8%",
                          backgroundColor: (workersArray.includes(worker.profession)) ? theme.palette.secondary.main : null,
                          color: (workersArray.includes(worker.profession)) ? theme.palette.primary.main : null,
                        }}>
                          {worker.profession}
                        </Button>}
                    </React.Fragment>
                  )
                })}
              </Box>

              <Box component="img" src={hallsList[selectedHallId]?.img} alt="ups" sx={{ width: "100%" }} />

              <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                {hallsList.map((hall, hallIndex) => {
                  return (
                    <React.Fragment key={hall._id}>
                      <Button onClick={() => {
                        setSelectedHallId(hallIndex);
                        setForm({ ...form, hallId: {title: hall.title, id: hall._id} })
                      }} style={{
                        fontSize: "16px", fontWeight: "lighter", padding: "5px 6%",
                        backgroundColor: hallIndex === selectedHallId ? theme.palette.secondary.main : null,
                        color: hallIndex === selectedHallId ? theme.palette.primary.main : null,
                      }}
                        name={hall.title}
                      > {hall.title}
                      </Button>
                    </React.Fragment>
                  )
                })}
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <form>
                <Tooltip title={errorInput.name} arrow placement="bottom-start">
                  <OutlinedInput
                    name="name"
                    placeholder="Введите имя"
                    fullWidth
                    onChange={changeHandler}
                    error={!!errorInput.name}
                    value={form.name}
                    sx={{ padding: "3px 0" }}
                  />
                </Tooltip>

                <InputMask
                  mask="+9(999)999-99-99"
                  maskChar={null}
                  value={form.phone}
                  onChange={changeHandler}
                >
                  {() =>
                    <Tooltip title={errorInput.phone} arrow placement="bottom-start">
                      <OutlinedInput
                        name="phone"
                        placeholder="Введите телефон"
                        error={!!errorInput.phone}
                        fullWidth
                        sx={{ padding: "3px 0" }}
                      />
                    </Tooltip>
                  }
                </InputMask>

                <Tooltip title={errorInput.date} arrow placement="bottom-start">
                  <OutlinedInput
                    type="date"
                    name="date"
                    fullWidth
                    onChange={changeHandler}
                    error={!!errorInput.date}
                    value={form.date}
                    sx={{ padding: "3px 0", color: (!!form.date) ? "black" : theme.palette.third.main }}
                  />
                </Tooltip>

                <Tooltip title={errorInput.email} arrow placement="bottom-start">
                  <OutlinedInput
                    name="email"
                    placeholder="Введите e-mail"
                    fullWidth
                    onChange={changeHandler}
                    error={!!errorInput.email}
                    value={form.email}
                    sx={{ padding: "3px 0" }}
                  />
                </Tooltip>

                <Button onClick={submitForm} fullWidth sx={{ padding: "10px 0" }}>Отправить</Button>

              </form>
            </Grid>
          </Grid>

        </Box>

        <Dialog
          open={!isNil(dialogData)}
          onClose={handleClose}
        >
          <DialogTitle id="alert-dialog-title" sx={{ color: theme.palette.primary.main }}>
            {dialogData?.title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {dialogData?.text}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              sx={{ fontSize: "16px", padding: '5px 0', margin: "0 auto" }}>
              Ок
            </Button>
          </DialogActions>
        </Dialog>

      </ThemeProvider>
    </>
  )
}

export default Halls;