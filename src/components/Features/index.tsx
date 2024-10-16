import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="cmoos" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Meet CMOOS and its Features"
            paragraph="CMOOS (Centralised Management of Operations System) is a web-based platform that allows users to easily manage day-to-day data capturing, reporting and analysis for various operations needs."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
