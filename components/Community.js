import React from 'react'

const Community = () => {
  return (
    <>
    <div className="b-2-b">
  <div className="big-info">
    <div className="container">
      <div className="big-info__inner">
        <div className="big-info__text-box">
          <div className="heading big-info__heading">
            I am Dogelon. Dogelon Mars. Join me and together we will reach the
            stars.
          </div>
          <div className="links-list big-info__links-list">
            <a
              target="_blank"
              href="https://t.me/dogelonmars"
              className="links-list__link"
            >
              <img
                src="img/list-links/tg.svg"
                alt="img"
                width={40}
                height={40}
                className="links-list__icon"
              />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/dogelonmars"
              className="links-list__link"
            >
              <img
                src="img/list-links/tw.svg"
                alt="img"
                width={40}
                height={40}
                className="links-list__icon"
              />
            </a>
            <a
              target="_blank"
              href="https://coinmarketcap.com/currencies/dogelon/"
              className="links-list__link"
            >
              <img
                src="img/list-links/03.svg"
                alt="img"
                width={40}
                height={40}
                className="links-list__icon"
              />
            </a>
            <a
              target="_blank"
              href="https://www.coingecko.com/en/coins/dogelon-mars"
              className="links-list__link"
            >
              <img
                src="img/list-links/coingecko.png"
                alt="img"
                width={40}
                height={40}
                className="links-list__icon"
              />
            </a>
            <a
              target="_blank"
              href="https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3"
              className="links-list__link"
            >
              <img
                src="img/list-links/uniswap.svg"
                alt="img"
                width={40}
                height={40}
                className="links-list__icon"
              />
            </a>
            <a
              target="_blank"
              href="https://etherscan.io/token/0x761d38e5ddf6ccf6cf7c55759d5210750b5d60f3"
              className="links-list__link"
            >
              <img
                src="img/list-links/traced.svg"
                alt="img"
                width={40}
                height={40}
                className="links-list__icon"
              />
            </a>
          </div>
        </div>
        <img
          src="img/big-info/rocket.png"
          alt="img"
          width={395}
          height={361}
          className="big-info__img"
        />
      </div>
    </div>
  </div>
  <div className="join-the-community" id="com">
    <div className="container">
      <div className="join-the-community__inner grid-12">
        <div className="heading--decorator heading join-the-community__heading">
          Join the Community!
        </div>
        <div className="join-the-community__items grid-12">
          <div className="grid-12 join-the-community__item join-the-community__item--twiter">
            <div className="join-the-community__header">
              <span className="join-the-community__header-name">
                Dogelon Mars
              </span>
              <span className="join-the-community__header-name-socmedia">
                Twitter
              </span>
              <span className="join-the-community__header-cheked">
                <img
                  src="img/checked.png"
                  alt=""
                  className="join-the-community__header-checked-img"
                />
              </span>
            </div>
            <div className="join-the-community__nick-name">@DogelonMars</div>
            <div className="join-the-community__title">
              I am Dogelon. Dogelon Mars. Join me and together we will reach the
              stars...
            </div>
            <div className="join-the-community__follow">
              <span className="follow__amount">650K+</span>
              <span className="follow__followers">followers</span>
              <div className="follow__bttn">
                <a
                  target="_blank"
                  href="https://twitter.com/dogelonmars"
                  className="bttn__follow"
                >
                  Follow
                </a>
              </div>
            </div>
            <div className="join-the-community__socmedia-img-wrap">
              <img
                src="img/tw.png"
                className="join-the-community__socmedia-img join-the-community__socmedia-img--twiter"
                alt=""
              />
            </div>
          </div>
          <div className="grid-12 join-the-community__item join-the-community__item--telegram">
            <div className="join-the-community__header">
              <span className="join-the-community__header-name">
                Dogelon Mars
              </span>
              <span className="join-the-community__header-name-socmedia">
                Telegram
              </span>
              <span className="join-the-community__header-cheked">
                <img
                  src="img/checked.png"
                  alt=""
                  className="join-the-community__header-checked-img"
                />
              </span>
            </div>
            <div className="join-the-community__nick-name">
              https://t.me/DogelonMars
            </div>
            <div className="join-the-community__title">
              I am Dogelon. Dogelon Mars. Join me and together we will reach the
              stars...
            </div>
            <div className="join-the-community__follow">
              <span className="follow__amount">90K+</span>
              <span className="follow__followers">followers</span>
              <div className="follow__bttn">
                <a
                  target="_blank"
                  href="https://t.me/dogelonmars"
                  className="bttn__follow"
                >
                  Follow
                </a>
              </div>
            </div>
            <div className="join-the-community__socmedia-img-wrap">
              <img
                src="img/tg.png"
                className="join-the-community__socmedia-img join-the-community__socmedia-img--telegram"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="get-stiker-pack grid-12">
          <div className="get-stiker-pack__title">
            <span className="heading">Get the Dogelon Mars sticker pack!</span>
            <img
              src="img/small-logo-telegram.svg"
              alt=""
              className="get-stiker-pack__small-icon-tg"
            />
          </div>
          <div className="get-stiker-pack__bttn-wrap">
            <a
              target="_blank"
              href="https://t.me/addstickers/DogelonMarsStickers"
              className="get-stiker-pack__bttn"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Community