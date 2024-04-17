import { homepageApi } from "@/apis";
import Custom500 from "./500";
import Custom404 from "./404";
import Meta from "@/components/DefaultLayout/Meta";
import DefaultLayout from "@/components/DefaultLayout";
import Image from "next/image";
import slide1 from "@/public/assets/images/slide1.jpg";
import ServicesCard from "@/components/homePage/servicesCard";
import MoreInformation from "@/components/homePage/moreInfos";
import PricesCards from "@/components/homePage/pricesCards";
import ConsultForm from "@/components/homePage/consultForm";
import News from "@/components/homePage/news";
import Communication from "@/components/homePage/communication";

export default function Home({ apiData }) {
  console.log(apiData);
  if (+apiData?.error?.statusCode > 499) {
    return <Custom500 />;
  }

  if (+apiData?.error?.statusCode > 399 && +apiData?.error?.statusCode < 500) {
    return <Custom404 />;
  }

  return (
    <DefaultLayout meta={<Meta seoData={apiData?.data?.data?.seo} />}>
      <Image src={slide1} alt="slide1" height={1200} />
      <ServicesCard />
      <MoreInformation />
      <PricesCards />
      <ConsultForm />
      <News />
      <Communication />
    </DefaultLayout>
  );
}

export const getServerSideProps = async ({ res }) => {
  let apiData = {};
  try {
    const result = await homepageApi.getHomePageData();
    apiData = result;
  } catch (e) {
    apiData.error = JSON.parse(e?.message);
  }
  if (!apiData?.data) {
    res.statusCode = 500; // Set the status code to 500 for an error response
  }
  return {
    props: {
      apiData,
    },
  };
};
