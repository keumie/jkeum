import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useForm } from "@formspree/react";

const Form = () => {
  const [state, handleSubmit] = useForm("mpzovdjo");

  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" spacing={3} xs={12}>
        <Grid item>
          <TextField
            id="email"
            name="email"
            label="Email"
            defaultValue=""
            type="email"
            required
          />
        </Grid>
        <Grid item>
          <TextField id="name" name="name" label="Name" type="text" required />
        </Grid>
        <Grid item>
          <TextField
            id="message"
            name="message"
            label="Message"
            multiline
            type="text"
            required
            rows={4}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
      {/* <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" required="" />
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" required="" />
      <label htmlFor="message">Message</label>
      <textarea
        rows="5"
        name="message"
        id="message"
        placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus."
        required=""
      />
      <button type="submit" disabled={state.submitting}>
        Send Email
      </button> */}
    </form>
  );
};

export default Form;
