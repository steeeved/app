"use client";

import lockImage from "@/assets/images/lock.png";
import lockMobile from "@/assets/images/lock_mobile.png";
import Image from "next/image";

export function ProofOfReserveLanding() {
  const logos = [
    {
      id: "tesla",
      src: "/svg-assets/tesla.svg",
      alt: "Tesla",
      width: 145.275,
      height: 18.943,
    },
    {
      id: "meta",
      src: "/svg-assets/meta.svg",
      alt: "Meta",
      width: 117,
      height: 25,
    },
    {
      id: "coinbase",
      src: "/svg-assets/coinbase.svg",
      alt: "Coinbase",
      width: 142.048,
      height: 26.006,
    },
    {
      id: "amazon",
      src: "/svg-assets/amazon.svg",
      alt: "Amazon",
      width: 100,
      height: 34,
    },
    {
      id: "circle",
      src: "/svg-assets/circle.svg",
      alt: "Circle",
      width: 118.534,
      height: 30.654,
    },
    {
      id: "microsoft",
      src: "/svg-assets/microsoft.svg",
      alt: "Microsoft",
      width: 125.62,
      height: 26.586,
    },
  ];

  return (
    <section className="w-full h-fit sm:py-6 lg:py-6 relative">
      {/* Section content */}
      <div className="w-full px-6! pt-10 md:px-8 lg:px-0 p-12">
        {/* Header */}
        <div className="flex flex-col justify-center align-center mb-8 sm:mb-12 lg:mb-16 text-center">
          <h2 className="max-w-82.5] w-full sm:max-w-full section-heading">
            <span className="">Proof</span> of Reserve
          </h2>
          <p className="max-w-79 w-full mx-auto sm:max-w-full text-spout-text-description text-center font-['DM_Sans'] text-[16px] not-italic font-normal leading-[24px] tracking-[0.064px]">
            Every token is fully backed 1:1 by investment-grade bond ETFs, held
            by qualified U.S. custodians <br /> for maximum security.
          </p>
        </div>

        <div className="relative h-px w-full sm:max-w-[1178px] sm:mx-auto bg-transparent sm:border-t-2 border-gray-100">
          <div className="sm:hidden absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[2px] bg-gray-100" />
        </div>

        {/* Vault Image with Company Logos */}
        <div className="flex justify-center items-center sm:mb-8 sm:mb-12 lg:mb-0 sm:max-w-294.5 mx-auto">
          <div
            className="w-full max-w-[calc(100vw-48px)] sm:max-w-[1183.345px] md:h-[333px] flex flex-col-reverse md:flex-row items-center mx-[2px]"
            style={{
              background: `
      radial-gradient(100% 100% at left 60%, rgba(61, 199, 132, 0.38), transparent 70%),
      radial-gradient(150% 160% at right 80%, rgba(88, 162, 255, 0.38), transparent 60%)
    `,
            }}
          >
            {/* Lock image */}
            <div className="">
              <Image
                src={lockImage}
                alt="Proof of Reserve Lock"
                className="object-contain hidden sm:block"
              />
              <Image
                src={lockMobile}
                alt="Proof of Reserve Lock"
                className="object-contain sm:hidden block max-w-75.75"
              />
            </div>

            {/* Company logos grid */}
            <div className="pt-6 pb-4 md:pt-[38px] md:pb-[35px] grid grid-cols-2 gap-y-4 gap-x-4 md:gap-y-[41px] md:gap-x-[108px] px-6 md:px-0 md:inline-grid md:grid-rows-[repeat(3,fit-content(100%))] md:grid-cols-[repeat(2,fit-content(100%))]">
              {logos.map((logo) => (
                <div
                  className="relative overflow-hidden rounded-[4px] flex justify-center items-center bg-white h-12 md:h-[59.819px] w-full md:w-[208.511px] border-[2.5px] border-blue-100"
                  key={logo.id}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    className="object-contain scale-75 md:scale-100"
                    {...(logo.width && {
                      width: logo.width,
                      height: logo.height,
                    })}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative h-15 sm:h-25 w-full sm:max-w-[1178px] sm:mx-auto bg-transparent sm:border-t-2 sm:border-b-2 border-gray-100">
          <div className="sm:hidden absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[2px] bg-gray-100" />
          <div className="sm:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[2px] bg-gray-100" />
        </div>

        {/* Statistics Section */}

        <div className="rounded-none max-w-295 mx-auto">
          <div className="flex flex-col items-center sm:flex-row justify-between sm:gap-4 pr-[8px]">
            {/* Assets On-Chain */}
            <div className="flex-1 flex justify-between h-39 max-w-[calc(100vw-44px)] w-full sm:max-w-full">
              <div className="flex flex-col items-start gap-[24px]  w-[360px] h-[156px] pt-[24px] pl-[32.91px]">
                <Image
                  src="/svg-assets/frame-3.svg"
                  alt="Bank"
                  width={36}
                  height={39}
                  className="w-[35.843px] h-[38.893px]"
                />

                <div>
                  <div className="text-black font-dm-sans text-[20px] font-semibold leading-normal">
                    $200k
                  </div>
                  <div className="text-spout-text-label font-dm-sans text-[16px] font-medium leading-normal">
                    Assets On-Chain
                  </div>
                </div>
              </div>
              <div className="bg-linear-gradient-1 w-[21.985px] h-[156px] z-10"></div>
            </div>
            <div className="relative h-px w-full sm:hidden block z-100">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[2px] bg-gray-100" />
            </div>

            {/* Investments Tokenized */}

            <div className="flex-1 flex justify-between max-w-[calc(100vw-44px)] w-full sm:max-w-full">
              <div className="flex flex-col items-start gap-[24px] w-[360px] h-[156px] pt-[24px] pl-[25.91px]">
                <Image
                  src="/svg-assets/frame-1.svg"
                  alt="Category"
                  width={36}
                  height={39}
                  className="w-[35.843px] h-[38.893px]"
                />

                <div>
                  <div className="text-black font-dm-sans text-[20px] font-semibold leading-normal">
                    1,124
                  </div>
                  <div className="text-spout-text-label font-dm-sans text-[16px] font-medium leading-normal">
                    Investments Tokenized
                  </div>
                </div>
              </div>
              <div className="bg-linear-gradient-2 w-[21.985px] h-[156px]"></div>
            </div>
            <div className="relative h-px w-full sm:hidden block z-100">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[2px] bg-gray-100" />
            </div>

            {/* Proof-of-Reserve Verified */}

            <div className="flex-1 flex justify-between max-w-[calc(100vw-44px)] w-full sm:max-w-full">
              <div className="flex flex-col items-start gap-[24px] w-[360px] h-[156px] pt-[24px] pl-[25.91px]">
                <Image
                  src="/svg-assets/frame-2.svg"
                  alt="Shield"
                  width={36}
                  height={39}
                  className="w-[35.843px] h-[38.893px]"
                />

                <div>
                  <div className="text-black font-dm-sans text-[20px] font-semibold leading-normal">
                    100%
                  </div>
                  <div className="text-spout-text-label font-dm-sans text-[16px] font-medium leading-normal">
                    Proof-of-Reserve Verified
                  </div>
                </div>
              </div>
              <div className="bg-linear-gradient-3 w-[21.985px] h-[156px]"></div>
            </div>
          </div>
        </div>
        <div className="relative h-15 sm:h-25 w-full sm:max-w-[1178px] sm:mx-auto bg-transparent sm:border-t-2 sm:border-b-2 border-gray-100">
          <div className="sm:hidden absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[2px] bg-gray-100" />
          <div className="sm:hidden absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[2px] bg-gray-100" />
        </div>
      </div>
    </section>
  );
}
