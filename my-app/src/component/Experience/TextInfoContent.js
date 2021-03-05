import React from "react";
import PropTypes from "prop-types";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const useDefaultStyles = makeStyles({ name: "TextInfoContent" });

const generateList = (desc, bodyProps, css) =>
  desc.map((text) => (
    <Grid container justify="flex-start" alignItems="flex-start" wrap="nowrap">
      <ArrowRightIcon />
      <Typography {...bodyProps} className={cx(css.body, bodyProps.className)}>
        {text}
      </Typography>
    </Grid>
  ));

const TextInfoContent = ({
  useStyles,
  overline,
  heading,
  title,
  desc,
  location,
  body,
  overlineProps,
  headingProps,
  titleProps,
  bodyProps,
  ...props
}) => {
  const css = useStyles(props);
  return (
    <>
      <Grid container justify="space-between" alignItems="center">
        <Typography
          component={"h4"}
          {...headingProps}
          className={cx(css.heading, headingProps.className)}
        >
          {heading}
        </Typography>
        <Typography
          component={"span"}
          {...overlineProps}
          className={cx(css.overline, overlineProps.className)}
        >
          {overline}
        </Typography>
      </Grid>
      <Grid container justify="space-between" alignItems="center">
        <Typography
          {...titleProps}
          className={cx(css.title, titleProps.className)}
        >
          {title}
        </Typography>
        <Typography className={css.overline}>{location}</Typography>
      </Grid>
      {generateList(desc, bodyProps, css)}
    </>
  );
};
TextInfoContent.propTypes = {
  overline: PropTypes.node,
  heading: PropTypes.node,
  body: PropTypes.node,
  overlineProps: PropTypes.shape({
    className: PropTypes.string,
  }),
  headingProps: PropTypes.shape({
    className: PropTypes.string,
  }),
  titleProps: PropTypes.shape({
    className: PropTypes.string,
  }),
  bodyProps: PropTypes.shape({
    className: PropTypes.string,
  }),
  useStyles: PropTypes.func,
};
TextInfoContent.defaultProps = {
  overline: null,
  heading: null,
  title: null,
  body: null,
  overlineProps: {},
  headingProps: {},
  titleProps: {},
  bodyProps: {},
  useStyles: useDefaultStyles,
};
export default TextInfoContent;
