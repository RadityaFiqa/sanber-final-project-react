import React from "react";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function StickyFooter() {
  const history = useHistory();

  const {
    title,
    company_logo,
    description,
    company,
    location,
    url,
  } = history.location.state.data;
  return (
    <div style={{ marginTop: 20, margin: 20 }}>
      <Typography
        variant="h4"
        component="h4"
        style={{ textAlign: "center" }}
        gutterBottom
      >
        {title}
      </Typography>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <img
          alt={company}
          src={company_logo}
          width={200}
          height={100}
          style={{ margin: 20 }}
        />

        <Typography variant="h5" style={{ marginTop: 50 }}>
          {`${company} - ${location}`}
        </Typography>
      </div>

      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        style={{ marginBottom: 50 }}
      >
        {description.replace(/<[^>]+>/g, "")}
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="default"
          size="large"
          style={{ alignItems: "center" }}
          href={url}
          target="_blank"
        >
          Apply Job
        </Button>
      </div>
    </div>
  );
}
