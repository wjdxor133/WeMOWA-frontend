import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "./UniqueMain.scss";

class UniqueMain extends Component {
  state = {};

  render() {
    return (
      <div className="UniqueMain">
        <Header />
        <Nav />
        <div className="unHero">
          <video
            autoPlay
            loop
            muted
            src="https://player.vimeo.com/external/374678558.hd.mp4?s=05a79d933175820bb407e32beafb744785363798&amp;profile_id=175"
            type="video/mp4"
            className="unHeroVideo"
          ></video>
        </div>
        <div className="unWrapper">
          <div className="unPitch">
            <div className="pitchHeader unUpper">RIMOWA UNIQUE</div>
            <div className="pitchBody">
              This is your chance to put your own spin on your suitcase. Use the
              RIMOWA UNIQUE customisation service and configurator to choose
              from a range of colourful accents and accessories to distinguish
              your RIMOWA Classic case on the go.
            </div>
          </div>
          <div className="unInspo">
            <div className="unToggle flexJustifyCenter">
              <div className="unInspiration unUpper ">Inspirations</div>
              <div className="unInspiration">|</div>
              <div className="unMydesign unUpper ">My Designs</div>
            </div>
          </div>
          <div className="unHow">
            <div className="howHeader">How It Works</div>
            <div className="unHow1 flexCenter">
              <div className="unImgWrapper">
                <div className="unImg1"></div>
              </div>
              <div className="unDes">
                <div className="unDesHeader">Start with the Classic Cabin</div>
                <div className="unHowBody">
                  Choose a RIMOWA Classic Cabin to custom build your suitcase.
                </div>
              </div>
            </div>
            <div className="unHow2 flexCenter">
              <div className="unDes">
                <div className="unDesHeader">
                  Create a look that is uniquely yours
                </div>
                <div className="unHowBody">
                  Customise your travels by adding pops of colour to your RIMOWA
                  Classic's wheels and handles.
                </div>
              </div>
              <div className="unImgWrapper">
                <div className="unImg2"></div>
              </div>
            </div>
            <div className="unHow3 flexCenter">
              <div className="unImgWrapper">
                <div className="unImg3"></div>
              </div>

              <div className="unDes">
                <div className="unDesHeader">
                  Add a personal finishing touch
                </div>
                <div className="unHowBody">
                  Initial your leather luggage tag to ensure your RIMOWA always
                  stays by your side.
                </div>
              </div>
            </div>
            <div className="unHowBtn">
              <div>Get Started</div>
            </div>
          </div>
          <div className="unSticker">
            <div className="unSubheader unUpper">Sticker Collection</div>
            <div className="unTitle">Trace your jorney with stickers</div>
            <div className="unLink unUpper">Discover</div>
            <div className="unStickerImg">
              <img
                src="https://www.rimowa.com/on/demandware.static/-/Library-Sites-RimowaSharedLibrary/default/dwf5fd0190/images/mozaic_horizontal/Stickers.png"
                alt=""
              />
            </div>
          </div>
          <div className="unAccessories flex">
            <div className="left">
              <div className="unSubheader unUpper">Accessories</div>
              <div className="unTitle">Personalise your tag</div>
              <div className="unLink unUpper">Discover</div>
              <div className="unTag"></div>
            </div>
            <div className="right">
              <div className="unAccHeader">
                <div className="unSubheader unUpper">Accessories</div>
                <div className="unTitle">Choose a wheel colour</div>
                <div className="unLink unUpper">Discover</div>
              </div>
              <div className="unWheel"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default UniqueMain;
