import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import img from '../images/film-poster-placeholder.png'
import { Link } from "react-router";


export default function CreditCard({credit}){
  return (
    <Card>
      <CardHeader
      title={
        <Typography variant="h5">
          <Link to={`/movie/${credit.id}`}>
            {credit.title}
          </Link>
        </Typography>
      }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          credit.poster_path
            ? `https://image.tmdb.org/t/p/w500${credit.poster_path}`
            : img
        }
      />
      <CardContent>
        <Typography>
          
        </Typography>
        <Typography>
          {`As ${credit.character}`}
        </Typography>
      </CardContent>
    </Card>
  );
}