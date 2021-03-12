import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "@formspree/react";

const useStyles = makeStyles({
  text: {
    "& label.Mui-focused": {
      color: "orange",
      borderColor: "orange",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "orange",
      },
    },
  },
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
});

const Form = () => {
  const [state, handleSubmit] = useForm("mpzovdjo");
  const classes = useStyles();

  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <TextField
            className={classes.text}
            id="email"
            name="email"
            label="Email"
            defaultValue=""
            type="email"
            required
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.text}
            id="name"
            name="name"
            label="Name"
            type="text"
            required
            fullWidth
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            className={classes.text}
            id="message"
            name="message"
            label="Message"
            multiline
            type="text"
            required
            fullWidth
            rows={4}
            variant="outlined"
          />
        </Grid>
        <Grid item container justify="flex-end">
          <Button className={classes.button} variant="contained" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
