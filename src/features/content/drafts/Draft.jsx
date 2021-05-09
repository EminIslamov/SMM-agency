import React from 'react';
import PropTypes from 'prop-types';
import { useDraftsStyles } from '../../users/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

function Draft({ post }) {
  const classes = useDraftsStyles();

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {'22.01.2021'}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.text}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={post.image !== undefined ? post.image : ''}
              title={post.title}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

Draft.propTypes = {
  post: PropTypes.object,
};

export default Draft;
