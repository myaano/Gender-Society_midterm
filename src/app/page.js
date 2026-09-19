"use client";

import Image from "next/image";

//images
import Jacked from "../../public/andrew-JACKED.jpg";
import Femboy from "../../public/femboy-sample-1.jpg";
import Vittar from "../../public/pablo-vittar-sample.jpg";
import Pattinson from "../../public/Robert-Pattinson-by-Peter-Lindbergh_fy1.jpg";
import Takumi from "../../public/takumi-tani-viral-post.jpg";

import { useEffect, useRef, useState, useLayoutEffect } from "react";

// lenis
import { ReactLenis } from "lenis/react";
// lenis
// gsap imports
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";
// gsap

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const lenisRef = useRef(null);

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(1000, 33);

    return () => gsap.ticker.remove(update);
  }, []);

  const container = useRef(null);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 768px)",
        isDesktop: "(min-width: 767px)",
      },
      (context) => {
        const { isMobile, isDesktop } = context.conditions;

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        if (isMobile) {
          timeline.to(box1.current, { y: -50 }, 0);
          timeline.to(box2.current, { y: -25 }, 0);
          timeline.to(box3.current, { y: -60 }, 0);
          timeline.to(box4.current, { y: -40 }, 0);
        } else {
          timeline.to(box1.current, { x: -50 }, 0);
          timeline.to(box2.current, { x: -25 }, 0);
          timeline.to(box3.current, { x: -70 }, 0);
          timeline.to(box4.current, { x: -10 }, 0);
        }

        if (isDesktop) {
          // dont bloody  run this on mobile
          gsap.to("#horizontal-scroll-container", {
            x: () => -(container.current.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
              trigger: "#horizontal-scroll-container",
              pin: true,
              scrub: 2,
              end: () =>
                `+=${container.current.scrollWidth - window.innerWidth}`,
            },
          });
        }
      },
    );
  }, []);

  //todo mobile screen for landing page

  return (
    <>
      <ReactLenis
        root
        options={{
          autoRaf: false,
          duration: 2,
        }}
        smoothWheel={true}
        ref={lenisRef}
      >
        <div className="overflow-x-hidden bg-black">
          <div
            id="horizontal-scroll-container"
            className="relative h-screen flex  "
          >
            <div className="hidden lg:block absolute z-0 top-[40%] bg-white h-5 min-w-[160vw] "></div>
            <section
              ref={container}
              className="lg:absolute z-10 lg:flex w-full will-change-transform"
            >
              <div className="content h-screen  px-5 lg:px-10 flex flex-col  w-screen shrink-0 ">
                <div>
                  <h1 className="font-urbanist text-lg md:text-xl">
                    Sorsogon State University - Bulan Campus
                  </h1>
                </div>
                <div className="flex flex-1  relative">
                  <div className="w-full h-full md:h-none md:w-none flex flex-col md:flex-row md:flex-1 bg-transparent">
                    <div className="flex flex-1 justify-between md:pr-10">
                      <div className="flex justify-center items-center">
                        <div
                          ref={box1}
                          className="relative h-70 w-40 md:h-100 md:w-70 overflow-hidden "
                        >
                          <Image
                            src={Pattinson}
                            alt="Robert-Pattinson"
                            fill={true}
                            loading="eager"
                            className="object-cover"
                            sizes="280px"
                          />
                        </div>
                      </div>
                      <div className=" flex justify-start items-start">
                        <div
                          ref={box2}
                          className=" h-60 w-40 md:h-70 md:w-60 relative"
                        >
                          <Image
                            src={Jacked}
                            alt="Andrew-Jacked"
                            fill={true}
                            loading="eager"
                            className="object-cover"
                            sizes="240px"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 justify-between md:pl-10">
                      <div className="flex justify-end items-end pb-10 md:pb-20">
                        <div
                          ref={box3}
                          className=" h-60 w-40 md:h-70 md:w-50 relative"
                        >
                          <Image
                            src={Femboy}
                            alt="Femboy"
                            fill={true}
                            loading="eager"
                            className="object-cover"
                            sizes="200px"
                          />
                        </div>
                      </div>
                      <div className="0 flex justify-start items-start pt-20">
                        <div
                          ref={box4}
                          className="h-80 w-40 md:h-90 md:w-50 relative"
                        >
                          <Image
                            src={Vittar}
                            alt="Pablo-Vittar"
                            fill={true}
                            loading="eager"
                            className="object-cover"
                            sizes="200px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[45%] md:top-[50%]">
                    <div className="flex gap-2 font-cormorant_infant text-3xl lg:text-7xl">
                      <h1>Performative</h1>
                      <h1 className="text-[#df0505]">Masculinity</h1>
                    </div>
                    <h1 className="font-urbanist text-lg lg:text-3xl">
                      How Masculinity and Gender is shaped by Society
                    </h1>
                  </div>
                </div>
                <div className="font-urbanist text-xl flex justify-end items-end">
                  <h1>BSIT 4-3</h1>
                </div>
              </div>
              <div className="content h-screen lg:shrink-0 lg:w-screen font-cormorant_infant relative px-40 bg-transparent">
                <h1 className="text-5xl absolute top-[30%] bg-amber-700">
                  What is Performative Masculinity?
                </h1>
              </div>
            </section>
          </div>
          <section className="h-screen">wdwdw</section>
        </div>
      </ReactLenis>
    </>
  );
}
