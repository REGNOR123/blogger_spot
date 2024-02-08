
import Grid from '@mui/material/Grid';
import { featuredPosts, mainFeaturedPost } from '../../BackendStaticData';
import { FeatureCard } from '../../Component/Post/FeatureCard';
import { WelcomeCard } from '../../Component/Post/WelcomeCard';


export const Home=()=>{
    return(
        <>
         <Grid container spacing={2} marginTop={10}>
        <Grid item xs={12}>
          <WelcomeCard post={mainFeaturedPost} />
        </Grid>
        {featuredPosts.map((post) => (
              <FeatureCard key={post.title} post={post} />
            ))}
      </Grid>
        </>
    )


}