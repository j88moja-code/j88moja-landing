const FreeLogSheet = () => {
  return (
    <section id="free-log-sheet" className="py-16 md:py-20">
      <div className="container">
        <div className="mx-auto flex max-w-[900px] flex-col items-start gap-6 rounded-md border border-body-color/[.15] p-8 dark:border-white/[.15] md:flex-row md:items-center md:justify-between md:p-10">
          <div className="max-w-[560px]">
            <h2 className="mb-3 text-2xl font-bold text-black dark:text-white">
              Free shift downtime log sheet
            </h2>
            <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
              A printable A4 sheet for logging every stop with its time,
              duration, reason code and action taken. Use it on its own, or
              as a first step before going digital.
            </p>
          </div>
          <a
            href="/downloads/tissuemate-shift-downtime-log.pdf"
            download
            className="shrink-0 rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:hover:bg-white/5"
          >
            Download the PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default FreeLogSheet;
