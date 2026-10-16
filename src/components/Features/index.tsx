import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="fibremate" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="What FibreMate does on your plant floor"
            paragraph="Most mills still track shifts on paper and in spreadsheets. FibreMate puts production and downtime in one place, so you know where the hours went."
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
