import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { grey } from "@mui/material/colors";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import styles from "./MapCard.module.css";

import { Link } from "react-router-dom";

export default function MapCard({ name, smallImage, image }) {
  return (
    <div className={styles.MapItem}>
      <Card sx={{ maxWidth: 512 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: grey[100] }} aria-label="recipe">
              <img
                src={
                  smallImage
                    ? smallImage
                    : "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-4.png"
                }
                style={{ width: "35px" }}
                alt={name}
              />
            </Avatar>
          }
          action={
            <Tooltip title="Show detailed maps">
              <IconButton aria-label="settings">
                <Link to="/maps">
                  <MoreHorizIcon />
                </Link>
              </IconButton>
            </Tooltip>
          }
          title={<Typography variant="h6">{name}</Typography>}
        />
        <div className={styles.displayImg}>
          <CardMedia
            component="img"
            height="350"
            image={image}
            alt="Agent img"
          />
        </div>
        <br />
      </Card>
    </div>
  );
}
