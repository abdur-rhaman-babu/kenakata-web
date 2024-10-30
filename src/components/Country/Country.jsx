import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
const Country = ({ country }) => {
  // console.log(country);
  const { name, flags, capital, cca3} = country;
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={flags?.png}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name.common}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {capital}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Link to={`/country/${cca3}`}><Button size="small">Learn More</Button></Link>
        </CardActions>
      </Card>
    </div>
  );
};

Country.propTypes = {
  country: PropTypes.object.isRequired,
};

export default Country;
