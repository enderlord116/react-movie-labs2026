import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import img from '../images/film-poster-placeholder.png'
import { Link } from "react-router";


export default function ActorCard({actor}){
  return (
  <Card>
    <CardHeader
    title={
      <Typography variant="h5">
        <Link to={`/`}>
          {actor.name}
        </Link>
      </Typography>
    }
    subheader={
      <Typography variant="subtitle1">
        {actor.character}
      </Typography>
    }
    />
    <CardMedia
      sx={{ height: 300 }}
      image={
        actor.profile_path
          ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
          : img
      }
    />
  </Card>
  );
}