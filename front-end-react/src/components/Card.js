import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    // maxHeight: 345,
    // height: 245,
    width: 245,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Box

    >
      <Card className={classes.root}       boxShadow={3}
      bgcolor="background.paper"
      m={1}
      p={1}>
        <div
          style={{
            height: 200,
            width: 200,
            margin: "0 auto",
            marginTop: "3%",
            maxHeight: "50%",
            maxWidth: "50%",
          }}
        >
          <img
            src={props.image}
            alt=""
            style={{ maxHeight: "75%", maxWidth: "75%" }}
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.titles}({props.symbol})
          </Typography>
          <br />
          
          <Typography variant="body2" color="textSecondary" component="p">
            <details>
              <summary>Learn More</summary>
              {props.description}
            </details>
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" color="primary" onClick={props.apiCallFav}>
            Favorite
          </Button>
          <Button size="small" color="primary" href={props.website} target="_blank" rel="noopener noreferrer">
            Company Website
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
