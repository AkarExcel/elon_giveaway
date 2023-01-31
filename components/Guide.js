import React from 'react'

const Guide = () => {
  return (
    <>
    <div className="guide" id="start">
  <div className="container">
    <div className="guide__inner grid-12">
      <div className="heading heading--decorator guide__heading">
        Quick Start Guide
      </div>
      <div className="guide__items grid-12">
        <div className="guide__item guide__item--one">
          <div className="guide-item__number">01</div>
          <div className="guide-item__img-wrap">
            <img
              src="img/guide1.png"
              alt=""
              className="guide-item__img guide-item__img--one"
            />
          </div>
          <div className="guide-item__heading">Create MetaMask wallet</div>
          <div className="guide-item__text">
            Create a MetaMask Wallet using either a desktop computer or an
            iOS/Android mobile device. That will allow you to buy, sell, send,
            and receive ELON
          </div>
        </div>
        <div className="guide__item guide__item--two">
          <div className="guide-item__number">02</div>
          <div className="guide-item__img-wrap">
            <img
              src="img/guide2.png"
              alt=""
              className="guide-item__img guide-item__img--two"
            />
          </div>
          <div className="guide-item__heading">Send ETH to your wallet</div>
          <div className="guide-item__text">
            You can buy Ethereum (ETH) directly on MetaMask or transfer it to
            your MetaMask Wallet from exchanges like Coinbase, Binance, etc.
          </div>
        </div>
        <div className="guide__item guide__item--three">
          <div className="guide-item__number">03</div>
          <div className="guide-item__img-wrap">
            <img
              src="img/guide3.png"
              alt=""
              className="guide-item__img guide-item__img--three"
            />
          </div>
          <div className="guide-item__heading">Connect your wallet</div>
          <div className="guide-item__text">
            Access your wallet by clicking ‘Connect to a wallet’ and selecting
            MetaMask.
          </div>
        </div>
        <div className="guide__item guide__item--four">
          <div className="guide-item__number">04</div>
          <div className="guide-item__img-wrap">
            <img
              src="img/guide4.png"
              alt=""
              className="guide-item__img guide-item__img--four"
            />
          </div>
          <div className="guide-item__heading">Swap ETH for ELON</div>
          <div className="guide-item__text">
            You can start swapping as soon as you have ETH available! Press
            ‘Select a token’ and enter the token address or search for it on the
            tokens list.
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Guide