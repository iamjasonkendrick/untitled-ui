import BlogSection from '../components/blog-section'
import Faq from '../components/faq-section'
import Features from '../components/feature-section'
import Footer from '../components/footer'
import HeroSection from '../components/hero-section'
import Navbar from '../components/navbar'
import Trail from '../components/trail-section'

export default function Landing() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <Faq />
      <BlogSection />
      <Trail />
      <Footer />
    </>
  )
}
