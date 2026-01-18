import DownloadAppSection from "@/components/Home/appDownload";
import Banner from "@/components/Home/banner";
import BlogsSection from "@/components/Home/Blogs";
import FaqSection from "@/components/Home/FAQ";
import NewsletterSection from "@/components/Home/Newsletter";
import ReviewsSection from "@/components/Home/Review";
import ServicesSection from "@/components/Home/Service";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <ServicesSection></ServicesSection>
      <BlogsSection></BlogsSection>
      <ReviewsSection></ReviewsSection>
      <DownloadAppSection></DownloadAppSection>
      <FaqSection></FaqSection>
      <NewsletterSection></NewsletterSection>
    </div>
  );
}
