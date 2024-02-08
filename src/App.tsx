
import './App.css';
import Grid from '@mui/material/Grid';
import { MainFeaturedPost } from './Component/Home/MainPost/MainFeaturedPost';
import FeaturedPost from './Component/Home/FeaturePost/FeaturedPost';
import Footer from './Dashboard/Footer/Footer';
import { Header } from './Dashboard/Header/Header';
import { Routers } from './Routers';

function App() {
  return (
    <div className="App">
      <Routers/>
      {/* <Grid container spacing={2} marginTop={10}>
        <Grid item xs={12}>
          <MainFeaturedPost post={mainFeaturedPost} />
        </Grid>
        {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
      </Grid> */}
      <Footer />
    </div>
  );
}

const mainFeaturedPost = {
  title: 'one stop solution for content visitors ',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
};

const featuredPosts = [
  {
    title: 'Food',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    title: 'Technology',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    title: 'Travel',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    title: 'Sports',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    title: 'Life Science',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',

  },
  {
    title: 'Life Style',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    title: 'Social',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',

  },
  {
    title: 'Environment',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    title: 'Political',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',

  },
  {
    title: 'Energy Changes',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    title: 'Medical',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    title: 'Engineering',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
];


export default App;
