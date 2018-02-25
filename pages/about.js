import React from 'react';
import Layout from '../components/Layout';
import { H1, H6, P } from 'style';
import styled from 'styled-components';
import RowWrapper from '../components/RowWrapper';
import TwoColumnImageRow from '../components/TwoColumnImageRow';

export default class About extends React.Component {
  render() {
    return (
      <Layout title="Unsize | About">
        <RowWrapper>
          <TwoColumnImageRow
            imgUrl="/static/images/about.png"
            layout="imgLeft"
            title="About Unsize"
            height="500px"
            tabletHeight="700px"
            subtitle={`
                Unsize sprouted from the idea that everyone has the right to
                find a fit that makes them feel good!`}
            body={`
                Throughout the years, the ready to wear clothing industry has
                asked us to “fit in, to stand out” in order to love ourselves,
                but it has never consistently guaranteed that clothes will fit
                the way they were meant to. In an age where we can customize
                almost anything, conviently finding your size when shopping
                online has yet to become accessible to the average consumer, and
                it is not for lack of demand.

                In a market space of 30 million bodies to clothe and a 2 billion
                dollar market opportunity size, unsize uses the intersection of
                technology and design to provide immediate services to find
                customers clothes that fit and feel good.`}
          />
        </RowWrapper>
      </Layout>
    );
  }
}
