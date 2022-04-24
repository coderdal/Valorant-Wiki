import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blueGrey } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import ReactAudioPlayer from "react-audio-player";

import styles from "./Agents.module.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function AgentCard({
  displayName,
  fullPortrait,
  role,
  roleDesc,
  roleIco,
  smallImage,
  abilities,
  voice,
}) {
  const ability = abilities.map((item, index) => {

    return (
      <div className="ability" key={index}>
        <Typography variant="h6">{item.slot}:</Typography>
        <Typography variant="subtitle2">{item.displayName}:</Typography>
        <Typography paragraph>{item.description}</Typography>
        <hr />
      </div>
    );
  });

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.itemAgent}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blueGrey[500] }} aria-label="recipe">
              <img src={roleIco} style={{ width: "25px" }} alt="role" />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={displayName}
          subheader={role}
        />
        <CardMedia
          component="img"
          height="350"
          image={fullPortrait}
          alt={displayName}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {roleDesc}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <img src={smallImage} style={{ width: "60px" }} alt="face" />

            <br />

            <Typography variant="h5">{displayName}</Typography>

            <hr />

            <br />
            <Typography variant="h6">{role}</Typography>
            <Typography paragraph>{roleDesc}</Typography>

            <br />
            <hr />

            {ability}

            <hr />
            <br />
            <Typography variant="h6">Voice :</Typography>
            <ReactAudioPlayer src={voice} controls />
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
