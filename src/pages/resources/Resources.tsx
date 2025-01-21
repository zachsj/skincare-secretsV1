// App level imports
import './resources.css'
import { BaseLayout } from '../../components'
import { Helmet } from 'react-helmet';
import { TwitterShareButton } from 'next-share'
import { FacebookIcon, FacebookShareButton, TwitterIcon } from 'react-share'

export const Resources = (): JSX.Element => {

  const shareUrl = "skincaresecrets.netlify.app"
  const shareUrl2 = "skincare Secrets - skincaresecrets.netlify.app"

  return (
    <>
    <Helmet>
        <title>Trusted Resources for Sensitive Skincare | Expert Recommendations</title>
        <meta name="description" content="Access trusted resources and expert recommendations for sensitive skincare. Discover valuable tips, guides, and links to help you achieve healthy, glowing skin." />
        <meta name="keywords" content="Trusted Resources for Sensitive Skincare, Sensitive Skincare Tips, Expert Skincare Recommendations" />
        <link rel="canonical" href="https://skincaresecrets.netlify.app/resources" />
    </Helmet>

    <BaseLayout>
      <h3>Resources</h3>

      <br></br>
      <ul style={{ listStyleType: "disc" }} className="textResources"> 
    <li > 
      7 Derm-Approved Tips to Make Life With Sensitive Skin a Little Bit Easier
      <p>
     <a className="linksResources" href="https://www.self.com/story/sensitive-skin-care-tips" target="_blank">
     https://www.self.com/story/sensitive-skin-care-tips
     </a>
     </p>


    </li>
    <br></br>
    <li>
    Clinique partners with Icahn School of Medicine at Mount Sinai to establish the Mount Sinai-Clinique Healthy Skin Dermatology Center
     <p>
     <a className="linksResources" href="https://www.eurekalert.org/news-releases/1033012" target="_blank">
     https://www.eurekalert.org/news-releases/1033012
     </a>
     </p>
    </li>
    <br></br>
    <li>
    Seven Dermatologists' Skin Care Tips That Can Relieve Symptoms of Atopic Dermatitis: A Guide for Patients
     <p>
     <a className="linksResources" href="https://www.medpagetoday.com/reading-room/aad/atopic-dermatitis/110562" target="_blank">
     https://www.medpagetoday.com/reading-room/aad/atopic-dermatitis/110562
     </a>
      </p>
    </li>
    <br></br>
     <li>
     The Best Skincare Routine for Dry Skin, According to Dermatologists
      <p>
     <a className="linksResources" href="https://www.health.com/skincare-for-dry-skin-8399885" target="_blank">
     https://www.health.com/skincare-for-dry-skin-8399885
     </a>
      </p>
    </li>
    <br></br>
    <li>
    Dermatologist-recommended skin care routines and tips for different skin types
      <p>
     <a className="linksResources" href="https://www.medicalnewstoday.com/articles/dermatologist-recommended-skin-care#summary" target="_blank">
     https://www.medicalnewstoday.com/articles/dermatologist-recommended-skin-care#summary
     </a>
      </p>
    </li>
  </ul>

      </BaseLayout> 

  <br></br>
  <br></br>

  <div style ={{marginLeft: "30px", textAlign:"left", marginTop: "50px"}}>
  <h4>Share this:</h4>
  <div style={{display: "flex", justifyContent: "left", gap:"10px"}}>
    <FacebookShareButton url={shareUrl}>
      <FacebookIcon size={40} round/>
    </FacebookShareButton>
    <TwitterShareButton url={shareUrl2}>
      <TwitterIcon size={40} round />
    </TwitterShareButton>
    </div>
  </div>

<footer className="footerResources">
<p>&copy; 2025 Skincare Secrets</p>
<p><a href="mailto: sjseomarketing@gmail.com" >Email Us</a></p>
<p  ><i>I may earn a commission for purchases made through my affiliate links, at no cost to you. I appreciate you supporting my page.</i></p>
</footer>      

    </>
  )
}
