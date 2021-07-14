import React, { useState } from "react";
import "../../css/AttendeePayment.css";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import image from "../../img/xxxx.png";
import InputAdornment from "@material-ui/core/InputAdornment";

import {
  Avatar,
  Grid,
  CssBaseline,
  Typography,
  Paper,
  TextField,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  paper: {
    margin: theme.spacing(0, 8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AttendeePayment() {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [radio1, setRadio1] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [code, setCode] = useState("");
  const [amount, setAmount] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = () => {
    const Payment = {
      name: name,
      email: email,
      radio1: radio1,
      number: number,
      date: date,
      code: code,
      amount: amount,
    };

    axios
      .post("http://localhost:5000/api/payment/insertPayment", Payment)
      .then((response) => {
        console.log(response.data);
        alert("Payment Details Added Successfully!");
      });
  };

  const onChangeName = (e) => {
    console.log(e.target.value);
    setName(e.target.value); //target is textbox and value is textbox value
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeRadio1 = (e) => {
    setRadio1(e.target.value);
  };

  const onChangeNumber = (e) => {
    setNumber(e.target.value);
    if (e.target.value.length > 19) {
      setIsError(true);
    }
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onChangeCode = (e) => {
    setCode(e.target.value);
  };

  const onChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="App">
      <br />
      <br />

      <center>
        <h2 className="header2">Attendee Payment Form</h2>
      </center>

      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Grid item xs={2} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <AccountCircleOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Attendee Payment Information
            </Typography>
            <br />
            <Typography variant="h7" gutterBottom>
              <b>Attendee Name *</b>
            </Typography>
            <TextField
              value={name}
              onChange={(e) => onChangeName(e)}
              placeholder="Enter name"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              autoFocus
            />
            <Typography variant="h7" gutterBottom>
              <b>Attendee Email address *</b>
            </Typography>
            <TextField
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => onChangeEmail(e)}
              id="email"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              autoFocus
              
            />
            <small id="emailHelp" class="form-text text-muted">
              {" "}
              We'll never share your email with anyone else.
            </small>
            <br />
            <Typography variant="h7" gutterBottom>
              <b>Event Type *</b>
            </Typography>

            <FormControl component="fieldset">
              <RadioGroup
                row
                aria-label="position"
                name="position"
                defaultValue="top"
              >
                <FormControlLabel
                  control={<Radio color="primary" />}
                  name="radio1"
                  value="Research Paper Presentation"
                  required
                  checked={radio1 === "Research Paper Presentation"}
                  onChange={(e) => onChangeRadio1(e)}
                  label="Research Paper"
                />
                <br />
                <FormControlLabel
                  control={<Radio color="primary" />}
                  name="radio1"
                  value="Workshop"
                  required
                  checked={radio1 === "Workshop"}
                  onChange={(e) => onChangeRadio1(e)}
                  label="Workshop Proposal"
                />
              </RadioGroup>
            </FormControl>
            <br />
            <Typography variant="h7" gutterBottom>
              <b>Payment Amount *</b>
            </Typography>
            <TextField
              value={amount}
              onChange={(e) => onChangeAmount(e)}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              autoFocus
              InputProps={{
                startAdornment: <InputAdornment position="start">
                   Rs.
                   </InputAdornment>,
              }}
            />
          </div>
        </Grid>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Grid
          item
          xs={12}
          sm={20}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <CreditCardIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Payment Details
            </Typography>
            <br />
            <Typography variant="h7" gutterBottom>
              <b>Card Number *</b>
            </Typography>
            <TextField
              value={number}
              error={isError}
              onChange={(e) => onChangeNumber(e)}
              placeholder="0000 0000 0000 0000"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              autoFocus
            />
            <Typography variant="h7" gutterBottom>
              <b>Expiry Date *</b>
            </Typography>
            <TextField
              value={date}
              onChange={(e) => onChangeDate(e)}
              placeholder="MM/YY"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              autoFocus
            />
            <Typography variant="h7" gutterBottom>
              <b>Security Code *</b>
            </Typography>
            <TextField
              value={code}
              onChange={(e) => onChangeCode(e)}
              placeholder="ooo"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => handleSubmit()}
            >
              Pay Now
            </Button>
            <img src={image} width="70%" height="50%" />
            <span> </span>{" "}
          </div>
        </Grid>
      </Grid>
      
    </div>
  );
}
