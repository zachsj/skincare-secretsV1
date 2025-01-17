// App level imports
import BaseLayout from '../../components/layout/BaseLayout'
import { Helmet } from 'react-helmet';

export const ContactUs = (): JSX.Element => {
  return (
    <>
    <Helmet>
        <title>Contact Us - My Website</title>
        <meta name="description" content="This is a page about contacting us" />
      </Helmet>
    <BaseLayout>
      <h3>Contact Us</h3>
      Contact us using your telepathic abilities 🤣.
    </BaseLayout>
    </>
  )
}
