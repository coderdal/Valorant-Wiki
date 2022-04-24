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
import { grey } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import styles from "./Maps.module.css";

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

export default function MapCard({
  name,
  smallImage,
  mediumImage,
  bigImage,
  regions,
  coordinates,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let regs = [];

  if (regions) {
    regions.forEach((reg) => {
      regs = [...regs, `${reg.regionName} (${reg.superRegionName}), `];
    });
  }

  return (
    <div className={styles.itemMap}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: grey[100] }} aria-label="recipe">
              <img src={smallImage} style={{ width: "35px" }} alt={name} />
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
          <CardMedia component="img" height="350" image={bigImage} alt={name} />
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
            <img
              src={mediumImage}
              style={{ width: "100%", borderRadius: "2px" }}
              alt={name}
            />

            <br />
            <br />
            <br />

            <Typography variant="h5">{name}</Typography>

            <hr />
            <br />

            <Typography variant="h6">Coordinates:</Typography>
            <Typography variant="subtitle1">{coordinates}</Typography>
            <br />
            <Typography variant="h6">Regions:</Typography>
            <br />
            <Typography variant="subtitle2">
              {regs.map((item) => item)}
            </Typography>

            <br />
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
