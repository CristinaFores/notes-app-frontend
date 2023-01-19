import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const MediaCard = (): JSX.Element => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 345,
        width: 200,
        height: 180,

        overflowWrap: "break-word",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Note
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
      </CardContent>
      <CardActions
        sx={{ paddingTop: 0, display: "flex", justifyContent: "center" }}
      >
        <Button size="small">Done</Button>
        <Button size="small">Edit</Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
