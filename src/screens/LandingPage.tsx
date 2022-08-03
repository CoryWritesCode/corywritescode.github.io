import React from 'react'
import './styles/LandingPage.css'

export function LandingPage() {
    return (
      <>
        <img
          className="Portfolio-Headshot"
          alt="cory cunningham headshot"
          src="https://media-exp1.licdn.com/dms/image/C5603AQGarOmv8Kv-ig/profile-displayphoto-shrink_800_800/0/1657659739851?e=1665014400&v=beta&t=l7r7YFkZS4QhDA1yrvdnESnq3F7wHihTxdZYK8PMqoY"
        />
        <div className="Personal-Details">
          <h1>Hello!</h1>
          <h3>My name is Cory Cunningham.</h3>
          <p>
            I am a husband to the most beautiful woman ever with whom I parent
            three amazing children.
          </p>
          <p>
            I am a software developer with years of experience mainly focused on
            mobile development through React Native.
          </p>
        </div>
      </>
    );
}