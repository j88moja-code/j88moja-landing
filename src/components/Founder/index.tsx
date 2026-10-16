// To add a photo: save it as /public/images/founder.jpg, import Image from
// "next/image", and replace the initials block with:
// <Image src="/images/founder.jpg" alt="Ntobeko Sithole" fill className="rounded-md object-cover" />

const Founder = () => {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-5/12">
            <div className="relative mx-auto mb-12 aspect-square max-w-[360px] lg:mb-0">
              <div className="flex h-full w-full items-center justify-center rounded-md bg-primary bg-opacity-10 text-7xl font-bold text-primary">
                NS
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-7/12">
            <div className="max-w-[570px]">
              <h2 className="mb-6 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl">
                Built by someone who has run the machines
              </h2>
              <p className="mb-6 text-base !leading-relaxed text-body-color md:text-lg">
                I&apos;m Ntobeko Sithole. I&apos;ve spent 15 years in tissue
                manufacturing, starting as a machine operator and working up
                to shift production lead.
              </p>
              <p className="mb-6 text-base !leading-relaxed text-body-color md:text-lg">
                I&apos;ve seen how much time goes into paper logs and
                end-of-shift reports, and how often downtime minutes go
                missing. FibreMate is built to fix that.
              </p>
              <p className="text-base !leading-relaxed text-body-color md:text-lg">
                National Diploma in Pulp &amp; Paper Technology (DUT), BTech
                Industrial Engineering (UNISA) and software engineering
                training (ALX).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
