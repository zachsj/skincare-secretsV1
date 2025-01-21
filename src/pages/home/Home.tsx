import './home.css'
import BaseLayout from '../../components/layout/BaseLayout'
import { Helmet } from 'react-helmet';
import { TwitterShareButton } from 'next-share'
import { FacebookIcon, FacebookShareButton, TwitterIcon } from 'react-share'


export const Home = (): JSX.Element => {
  

  const shareUrl = "skincaresecrets.netlify.app"
  const shareUrl2 = "skincare Secrets - skincaresecrets.netlify.app"
  
  
  return (
<>
    <Helmet>
        <title>Skincare for Sensitive Skin | 2025 Best Clinique Skincare Products for Sensitive Skin</title>
        <meta name="description" content="Explore the best sensitive skincare products, for effortless healthy, glowing skin at Skincare Secrets." />
        <meta name="keywords" content="Skincare for Sensitive Skin" />
        <link rel="canonical" href="https://skincaresecrets.netlify.app/" />
    </Helmet>

    <BaseLayout>
    
      <h1 className="h1">Skincare Secrets </h1>

      <p>
      <i><b>Skincare for Sensitive Skin</b></i>
      </p>
     

      <p className="text"> 
      Finding the right skincare for sensitive skin can be a frustrating process with a lot of trial and error, and my aim is to simplify your search by sharing the best products with you that have worked well for me with my own sensitive skin. I’ve been using some of these items for over 25 years, and the first brand I want to highlight is one of my favorites, Clinique. Their products are fragrance-free and allergy tested, making them a gentle, non-irritating option that you can count on for staples in your skincare routine. 
        </p>
        
      <p className="text">
      Get started now by reading my 
      &nbsp;<a className="links" href="https://joyful-cupcake.netlify.app/blog" target="_blank">
      2025’s Best Clinique Skincare for Sensitive Skin
      </a>&nbsp;
      blog, check out my Featured Products below, or explore the resources page for a more in depth look. I look forward to being your trusted source for honest reviews, skincare tips, and exclusive deals.
      </p>
    
    </BaseLayout>

    <br></br>
    <h3>Featured Products: </h3>

    <div>
    <a className="links" href="https://www.ulta.com/p/moisture-surge-broad-spectrum-spf-28-sheer-hydrator-moisturizer-pimprod2038272?sku=2604860" target="_blank">
          <img  src="moisture_surge.jpg" className="pic" alt="Clinique Moisture Surge" />
          </a>
      </div> 
      

    <a className="links" href="https://www.ulta.com/p/moisture-surge-broad-spectrum-spf-28-sheer-hydrator-moisturizer-pimprod2038272?sku=2604860" target="_blank">
    Moisture Surge with SPF
    </a>

<p>
  <a className="links" href="https://www.ulta.com/p/moisture-surge-100h-auto-replenishing-hydrator-gel-moisturizer-with-hyaluronic-acid-pimprod2021615?sku=2576544" target="_blank">
  Moisture Surge without SPF
  </a>
  </p>

<br></br>
<br></br>

<div>
<a className="links" href="https://www.ulta.com/p/dramatically-different-moisturizing-lotion-face-xlsImpprod10791743?sku=2261902" target="_blank">
          <img src="dramatic_diff.jpg" className="pic" alt="Clinique Moisturizer"/>
          </a>
      </div>

<a className="links" href="https://www.ulta.com/p/dramatically-different-moisturizing-lotion-face-xlsImpprod10791743?sku=2261902" target="_blank">
Clinique Dramatically Different
</a>


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
  
<footer className="footerBlog">
  <p>&copy; 2025 Skincare Secrets</p>
  <p><a href="mailto: sjseomarketing@gmail.com" >Email Us</a></p>
  <p><i>I may earn a commission for purchases made through my affiliate links, at no cost to you. I appreciate you supporting my page.</i></p>
</footer>

</>
  )
}
