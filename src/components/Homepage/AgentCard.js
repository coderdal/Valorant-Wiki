import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { blueGrey } from "@mui/material/colors";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Tooltip from "@mui/material/Tooltip";

import styles from "./AgentCard.module.css";

import { Link } from "react-router-dom";

export default function AgentCard({
  displayName,
  fullPortrait,
  role,
  roleDesc,
  roleIco,
}) {
  return (
    <div className={styles.itemAgent}>
      <Card sx={{ maxWidth: 305 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blueGrey[500] }} aria-label="recipe">
              <img src={roleIco} style={{ width: "25px" }} alt="role" />
            </Avatar>
          }
          action={
            <Tooltip title="Show detailed agents">
              <IconButton aria-label="settings">
                <Link to="/agents">
                  <MoreHorizIcon />
                </Link>
              </IconButton>
            </Tooltip>
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
      </Card>
    </div>
  );
}
