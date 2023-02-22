import React from 'react';
import Layout from '../components/Layout';
import SimpleHero from '../components/SimpleHero';
import Banner from '../components/Banner';
import { Link } from 'gatsby';
import About from '../components/About';
import Tips from '../components/Tips';

const Home = () => {
  return (
    <Layout>
      <SimpleHero>
        <Banner title="Africa Matembe" info="Come and Explore Hampi, the city of ruins, which is a UNESCO World Heritage Site.">
          <Link to="/places" className="btn-white">
            Explore places
          </Link>
        </Banner>
      </SimpleHero>
      <About/>
      <Tips/>
    </Layout>
  )
}

export default Home