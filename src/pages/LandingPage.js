import React from "react";
import { Section, Header, Footer, Carousel } from "../components";
import { AppOne, AppThree, AppTwo, AppFour, Play, Apple } from "../assets";
import styled from "styled-components";

const sectionOneBackground =
  "linear-gradient(180deg, #999EFF 0%, rgba(153, 158, 255, 0) 44.27%, rgba(166, 242, 219, 0.94) 92.19%)";
const ContentDiv = styled.div`
  @media screen and (min-width: 768px) {
    width: 40rem;
  }
`;

const AppLink = styled.div`
  display: inline-flex;
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 10px;
`;

const ImageContainer = styled.div`
  object-fit: contain;
  height: 25%;
`;

const ReceiveMoneyDiv = styled.div`
  @media screen and (min-width: 768px) {
    width: 30rem;
  }
`;
function LandingPage(props) {
  return (
    <div>
      <Section bg={sectionOneBackground}>
        <Header />

        {/* Payments on the Go section */}
        <div className="md:ml-16 md:mr-32 flex flex-wrap flex-col-reverse  items-center md:flex-row md:justify-between">
          <div className="flex flex-col flex-wrap justify-center mx-5 md:mx-0">
            <h1 className="text-2xl font-semibold ">Payments on the Go</h1>
            <ContentDiv className="text-lg mt-4">
              <p>
                YankeePay is a social payments app that allows you pay for goods
                and services with your favourite cryptocurrency.
              </p>
              <p className="my-4">
                You'll also be able to send and receive money globally and save
                your money in cryptocurrency.
              </p>
            </ContentDiv>
          </div>
          <ImageContainer className="mb-4">
            <img className="h-96" src={AppOne} alt="app" />
          </ImageContainer>
          {/* <div className="flex justify-center md:block"></div> */}
        </div>

        {/* Payments Section */}
        <div className="md:ml-16 mt-28  flex flex-wrap  items-center md:flex-row md:justify-between">
          <ImageContainer className="mb-4">
            <img className="h-96" src={AppTwo} alt="app" />
          </ImageContainer>

          <div className="flex flex-col justify-center mx-5  md:mx-0">
            <h1 className="text-2xl font-semibold ">Payments</h1>
            <ContentDiv className="text-lg mt-4">
              <p>Pay for stuff on the go with Bitcoin.</p>
            </ContentDiv>
          </div>
        </div>

        {/* Receive Funds Section */}
        <div className="md:ml-16 md:mr-32 mt-32 flex flex-wrap flex-col-reverse  items-center md:flex-row md:justify-between">
          <div className="flex flex-col    justify-center mx-5 md:mx-0">
            <h1 className="text-2xl font-semibold ">Receive Funds</h1>
            <ReceiveMoneyDiv className="text-lg mt-4">
              <p>
                Receive money from anyone anywhere in the world and send money
                too.
              </p>

              <p className="my-2 font-semibold"> Coming Soon...</p>
            </ReceiveMoneyDiv>
          </div>
          <ImageContainer className="mb-4">
            <img className="h-96" src={AppThree} alt="app" />
          </ImageContainer>
        </div>

        {/* Save Section */}
        <div className="md:ml-16 md:mr-32 mt-32 flex flex-wrap flex-col items-center md:flex-row md:justify-between">
          <ImageContainer className="mb-4">
            <img src={AppFour} alt="app" className="h-96" />
          </ImageContainer>

          <div className="flex flex-col mx-5 md:mx-0">
            <h1 className="text-2xl font-semibold ">Save</h1>
            <ContentDiv className="text-lg">
              <p className="mt-3">
                Save your funds in a stable cryptocurrency like USDT to protect
                your money from devaluation and earn exciting interest too.
              </p>

              <p className="my-4 font-semibold"> Coming Soon...</p>
              <div className="flex justify-center md:justify-start flex-wrap space-y-3 md:space-y-0 md:space-x-3">
                <AppLink className="space-x-3 cursor-pointer">
                  <img src={Play} className="h-10 mt-1" alt="Google Play" />
                  <p className="w-32 font-medium text-base">
                    Download on Google Play
                  </p>
                </AppLink>
                <AppLink className="space-x-3 cursor-pointer">
                  <img src={Apple} className="h-10 mt-1 " alt="Google Play" />

                  <p className="w-32 font-medium text-base">
                    Download on Apple Store
                  </p>
                </AppLink>
              </div>
            </ContentDiv>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}

export default LandingPage;
