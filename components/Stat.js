import React from 'react'

const Stat = () => {
  return (
    <>
    <div className="statistics" id="token">
  <div className="container">
    <div
      className="coinmarketcap-currency-widget"
      data-currencyid={9436}
      data-base="USD"
      data-secondary=""
      data-ticker="true"
      data-rank="true"
      data-marketcap="true"
      data-volume="true"
      data-statsticker="false"
      data-stats="USD"
    />
    <div className="statistics-inner grid-12">
      <div className="statistics-inner__top-level grid-12">
        <div className="statistics-inner-top-level__logo">
          <img
            src="img/big-logo.png"
            alt=""
            className="statistics-inner-top-level__logo-img"
          />
        </div>
        <div className="statistics-inner-top-level__info">
          <div className="statistics-inner-top-level__coin-name">
            <span className="statistics-inner-top-level__title">
              {" "}
              Dogelon Mars
            </span>
            <div className="statistics-inner-top-level__short-name">ELON</div>
          </div>
          <div className="statistics-inner-top-level__some-info">
            <span className="statistics-inner-top-level__price">
              <span id="price">0.000000</span> $
            </span>
            <span className="statistics-inner-top-level__arrow-to-top">
              <img
                src="img/arrow-to-top.svg"
                alt="icon"
                className="statistics-inner-top-level__arrow-to-top-img"
                id="arrowIconForWidget"
              />
            </span>
            <span className="statistics-inner-top-level__procent" id="percent">
              ---
            </span>
          </div>
        </div>
        <a
          target="_blank"
          href="https://coinmarketcap.com/currencies/dogelon/"
          className="statistics-inner-top-level__power-by"
        >
          Powered by CoinMarketCap
        </a>
      </div>
      <div className="statistics-inner__bottom-level">
        <div className="statistics-inner-bottom-level__item">
          <div className="statistics-inner-bottom-level-item__heading">
            Rank
          </div>
          <div className="statistics-inner-bottom-level-item__number" id="rank">
            ---
          </div>
        </div>
        <div className="statistics-inner-bottom-level__item statistics-inner-bottom-level__item--border">
          <div className="statistics-inner-bottom-level-item__heading">
            Market Cap
          </div>
          <div
            className="statistics-inner-bottom-level-item__number"
            id="marketCap"
          >
            ---
          </div>
        </div>
        <div className="statistics-inner-bottom-level__item">
          <div className="statistics-inner-bottom-level-item__heading">
            Volume
          </div>
          <div
            className="statistics-inner-bottom-level-item__number"
            id="volume"
          >
            ---
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Stat