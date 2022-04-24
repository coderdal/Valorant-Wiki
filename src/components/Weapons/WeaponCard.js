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
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import styles from "./Weapons.module.css";

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

export default function WeaponCard({
  name,
  image,
  prettyImg,
  category,
  cost,
  headShoot,
  bodyShoot,
  legShoot,
  fireRate,
  magazineSize,
  equipTime,
  reloadTime,
  runSpeed,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.itemAgent}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              <img src={image} style={{ width: "35px" }} alt={name} />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={<Typography variant="h6">{name}</Typography>}
        />
        <div className={styles.displayImg}>
          <CardMedia component="img" height="350" image={image} alt={name} />
        </div>
        <CardContent></CardContent>
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
            <br />
            <img src={prettyImg} style={{ width: "85%" }} alt={name} />

            <br />
            <br />
            <br />

            <Typography variant="h5">General</Typography>

            <hr />
            <br />

            <Typography variant="h5">{name}</Typography>
            <br />
            <Typography variant="h6">Category: {category}</Typography>
            <Typography variant="h6">Cost: {cost}$</Typography>

            <br />

            <Typography variant="h5">Power - Stats</Typography>

            <hr />
            <br />

            <Typography variant="h6">HeadShoot: {headShoot}hp</Typography>
            <Typography variant="h6">Body Shoot: {bodyShoot}hp</Typography>
            <Typography variant="h6">Leg Shoot: {legShoot}hp</Typography>
            <br />
            <Typography variant="h6">Fire Rate: {fireRate}</Typography>
            <Typography variant="h6">Magazine Size: {magazineSize}</Typography>
            <Typography variant="h6">Run Speed: {runSpeed}</Typography>
            <br />
            <Typography variant="h6">
              Equip Time (seconds): {equipTime}s
            </Typography>
            <Typography variant="h6">
              Reload Time (seconds): {reloadTime}s
            </Typography>

            <br />
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
