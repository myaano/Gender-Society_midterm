"use client";

import Image from "next/image";

//images
import Jacked from "../../public/andrew-JACKED.jpg";
import Femboy from "../../public/femboy-sample-1.jpg";
import Vittar from "../../public/pablo-vittar-sample.jpg";
import Pattinson from "../../public/Robert-Pattinson-by-Peter-Lindbergh_fy1.jpg";
import Takumi from "../../public/takumi-tani-viral-post.jpg";
import Performative_Male from "../../public/PERFORMATIVE-MALE-MATCHA-960x1279.webp";
import Bakla from "../../public/baklang-naglalaptop.jpg";

import Matcha from "../../public/matcha-latte.jpg";
import Atomic from "../../public/atomic-habit.jpg";
import Performative from "../../public/performative-feature-image.webp";

import { useEffect, useRef } from "react";

// lenis
import { ReactLenis } from "lenis/react";
// lenis
// gsap imports
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
// gsap

gsap.registerPlugin(ScrollTrigger, SplitText);

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

  const revealMatchaSection = useRef(null);
  const revealcont = useRef(null);
  const matcha = useRef(null);
  const performative_male = useRef(null);
  const atomic = useRef(null);

  const OrthodoxRef = useRef(null);
  const HeterodoxRef = useRef(null);
  const CacodoxRef = useRef(null);

  const footerCont = useRef(null);
  const BaklaImageRef = useRef(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 768px)",
        isDesktop: "(min-width: 1024px)",
      },
      (context) => {
        const { isMobile, isDesktop } = context.conditions;

        //parallax animations for landing page
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
          timeline.to(box2.current, { y: -75 }, 0);
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

    //reveal container animations

    const revealTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: revealMatchaSection.current,
        start: "top top",
        end: "+=3300",
        scrub: 1,
        pin: true,
      },
    });
    revealTimeline
      .to(matcha.current, {
        clipPath: "polygon(-1% -1%,101% -1%,101% -1%,-1% -1%)",
        duration: 1,
      })
      .to(performative_male.current, {
        clipPath: "polygon(-1% -1%,101% -1%,101% -1%,-1% -1%)",
        duration: 1,
      })
      .to(atomic.current, {
        clipPath: "polygon(-1% -1%,101% -1%,101% -1%,-1% -1%)",
        duration: 1,
      })
      .to({}, { duration: 1 })
      .to(
        revealcont.current,
        {
          clipPath: "polygon(0% 0%, 101% 0%, 101% 0%, 0% 0%)",
          duration: 3,
        },
        "+=1",
      )
      .to({}, { duration: 5 });

    //cont 1 scroll trigger split texts

    const definition_terms = new SplitText(".definition-terms", {
      type: "words",
    });
    const definition_terms2 = definition_terms.words;

    gsap.from(definition_terms2, {
      yPercent: "100",
      opacity: 0,
      ease: "power3.out",
      stagger: 0.05,
      duration: "1",
      scrollTrigger: {
        trigger: ".cont1",
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });

    const Masculine_doxa = new SplitText(".masculine-doxa", { type: "lines" });
    const Masculine_doxa2 = Masculine_doxa.lines;

    gsap.from(Masculine_doxa2, {
      yPercent: "100",
      opacity: 0,
      ease: "power3.out",
      stagger: 0.05,
      duration: "0.5",
      scrollTrigger: {
        trigger: ".cont1",
        start: "top top",
        toggleActions: "play none none reverse",
      },
    });

    const Doing_gender = new SplitText(".doing-gender", { type: "lines" });
    const Doing_gender2 = Doing_gender.lines;
    gsap.from(Doing_gender2, {
      yPercent: "100",
      opacity: 0,
      ease: "power3.out",
      stagger: 0.05,
      duration: "0.5",
      scrollTrigger: {
        trigger: ".cont1",
        start: "top top",
        toggleActions: "play none none reverse",
      },
    });

    const Masculine_habitus = new SplitText(".masculine-habitus", {
      type: "lines",
    });
    const Masculine_habitus2 = Masculine_habitus.lines;
    gsap.from(Masculine_habitus2, {
      yPercent: "100",
      opacity: 0,
      ease: "power3.out",
      stagger: 0.05,
      duration: "0.5",
      scrollTrigger: {
        trigger: ".cont1",
        start: "top top",
        toggleActions: "play none none reverse",
      },
    });

    const containerTimelines = gsap.timeline();
    containerTimelines
      .to(".cont1", {
        scrollTrigger: {
          trigger: ".cont1",
          start: "top top",
          end: "+=150%",
          pin: true,
        },
      })
      .to(".cont2", {
        scrollTrigger: {
          trigger: ".cont2",
          start: "top top",
          end: "+=300%",
          pin: true,
        },
      })
      .to(".cont3", {
        scrollTrigger: {
          trigger: ".cont3",
          start: "top top",
          end: "+=150%",
          pin: true,
        },
      })
      .to(".cont4", {
        scrollTrigger: {
          trigger: ".cont4",
          start: "top top",
          end: "+=150%",
          pin: true,
        },
      })
      .to(".cont5", {
        scrollTrigger: {
          trigger: ".cont5",
          start: "top top",
          end: "+=150%",
          pin: true,
        },
      })
      .to(".cont6", {
        scrollTrigger: {
          trigger: ".cont6",
          start: "top top",
          end: "+=300%",
          pin: true,
        },
      });

    const cont2timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".cont2",
        start: "top top",
        end: "+=300%",
        scrub: true,
      },
    });
    // cont 2's text splits variables
    const perfmas1 = new SplitText(".perfmas1", { type: "words" });
    const Perfmas1 = perfmas1.words;

    const explanation1 = new SplitText(".explanation1", { type: "words" });
    const Explanation1 = explanation1.words;

    const explanation2 = new SplitText(".explanation2", { type: "words" });
    const Explanation2 = explanation2.words;

    gsap.from(Perfmas1, {
      y: "100",
      opacity: 0,
      stagger: 0.06,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".cont1",
        start: "bottom center",
        end: "top bottom",

        scrub: 1,
      },
    });

    cont2timeline
      .from(
        Explanation1,
        {
          opacity: 0,
          y: 15,
          stagger: 0.06,
          duration: 0.5,
          ease: "power2.out",
        },
        "+=5",
      )
      .to(
        Explanation1,
        {
          opacity: 0,
          stagger: 0.06,
          duration: 0.5,
          ease: "power2.out",
        },
        "+=5",
      )
      .from(
        Explanation2,
        {
          opacity: 0,
          y: 15,
          stagger: 0.06,
          duration: 0.5,
          ease: "power2.out",
        },
        "+=5",
      )
      .to(
        Explanation2,
        {
          opacity: 0,
          stagger: 0.06,
          duration: 0.5,
          ease: "power2.out",
        },
        "+=5",
      );

    //cont 3's text split variables and timeline
    const orthodox1 = new SplitText(".orthodox", { type: "words" });
    const Orthodox1 = orthodox1.words;
    const def1 = new SplitText(".def1", { type: "words" });
    const Def1 = def1.words;
    const example1 = new SplitText(".example1", { type: "lines" });
    const Example1 = example1.lines;

    const cont3timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".cont3",
        start: "top top",
        end: "+=50%",
        scrub: true,
      },
    });

    cont3timeline
      .from([...Orthodox1, ...Def1], {
        clipPath: "inset(0 100% 0 0)",
        duration: 1.2,
        ease: "power3.inOut",
      })

      .from(Example1, {
        opacity: 0,
        y: 15,
        stagger: 0.06,
        duration: 0.5,
        ease: "power2.out",
      })

      .to(OrthodoxRef.current, {
        clipPath: "polygon(-1% -1%,101% -1%,101% -1%,-1% -1%)",
        duration: 3,
      });

    // cont 4's text splits and timeline
    const heterodox1 = new SplitText(".heterodox", { type: "words" });
    const Heterodox1 = heterodox1.words;

    const example2 = new SplitText(".example2", { type: "lines" });
    const Example2 = example2.lines;
    const cont4timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".cont4",
        start: "top top",
        end: "+=50%",
        scrub: true,
      },
    });

    cont4timeline
      .from(Heterodox1, {
        clipPath: "inset(0 100% 0 0)",
        duration: 1.2,
        ease: "power3.inOut",
      })
      .from(Example2, {
        opacity: 0,
        y: 15,
        stagger: 0.06,
        duration: 0.5,
        ease: "power2.out",
      })
      .to(HeterodoxRef.current, {
        clipPath: "polygon(-1% -1%,101% -1%,101% -1%,-1% -1%)",
        duration: 3,
      });

    // cont5's textsplit and timeline
    const cacodoxy1 = new SplitText(".cacodox", { type: "words" });
    const Cacodoxy1 = cacodoxy1.words;
    const def3 = new SplitText(".def3", { type: "lines" });
    const Def3 = def3.lines;
    const example3 = new SplitText(".example3", { type: "lines" });
    const Example3 = example3.lines;

    const cont5timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".cont5",
        start: "top top",
        end: "+=50%",
        scrub: true,
      },
    });

    cont5timeline
      .from([...Cacodoxy1, ...Def3], {
        clipPath: "inset(0 100% 0 0)",
        duration: 1.2,
        ease: "power3.inOut",
      })
      .from(Example3, {
        opacity: 0,
        y: 15,
        stagger: 0.06,
        duration: 0.5,
        ease: "power2.out",
      })
      .to(CacodoxRef.current, {
        clipPath: "polygon(-1% -1%,101% -1%,101% -1%,-1% -1%)",
        duration: 3,
      });

    //cont6's textsplit and timeline
    const perfmas2 = new SplitText(".perfmas2", { type: "words" });
    const Perfmas2 = perfmas2.words;
    const explanation3 = new SplitText(".explanation3", { type: "words" });
    const Explanation3 = explanation3.words;
    const explanation4 = new SplitText(".explanation4", { type: "words" });
    const Explanation4 = explanation4.words;

    const cont6timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".cont6",
        start: "top top",
        end: "+=300%",
        scrub: true,
      },
    });

    gsap.from(Perfmas2, {
      y: "100",
      opacity: 0,
      stagger: 0.06,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".cont5",
        start: "bottom center",
        end: "top bottom",

        scrub: 1,
      },
    });

    cont6timeline
      .from(
        Explanation3,
        {
          opacity: 0,
          y: 15,
          stagger: 0.06,
          duration: 0.5,
          ease: "power2.out",
        },
        "+=5",
      )
      .to(
        Explanation3,
        {
          opacity: 0,
          stagger: 0.06,
          duration: 0.5,
          ease: "power2.out",
        },
        "+=5",
      )
      .from(
        Explanation4,
        {
          opacity: 0,
          y: 15,
          stagger: 0.06,
          duration: 0.5,
          ease: "power2.out",
        },
        "+=5",
      )
      .to(
        Explanation4,
        {
          opacity: 0,
          stagger: 0.06,
          duration: 0.5,
          ease: "power2.out",
        },
        "+=5",
      );

    // overall pin, timeline, textsplit
    const par1 = new SplitText(".par1", { type: "lines" });
    const Par1 = par1.lines;
    const par2 = new SplitText(".par2", { type: "lines" });
    const Par2 = par2.lines;

    const overallTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".overallSection",
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: true,
      },
    });
    //make the fontSize snap to 128px/text-9xl in lg using power4.inOut and another fixed text for mobile
    overallTimeline
      .from(".overallText", {
        fontSize: () => (window.innerWidth >= 1024 ? "248px" : "100px"),
        ease: "power4.inOut",
        duration: 1,
      })
      .from(
        ".overallPar",
        {
          flexGrow: 0,
          ease: "power4.inOut",
        },
        "+=0.5",
      )
      .from(
        Par1,
        {
          opacity: 0,
          xPercent: 20,
          stagger: 0.06,
          duration: 0.5,
          ease: "power2.out",
        },
        "<0.3",
      )
      .to(Par1, {
        opacity: 0,
        stagger: 0.06,
        duration: 0.5,
        ease: "power2.out",
      })
      .from(
        Par2,
        {
          opacity: 0,
          xPercent: 20,
          stagger: 0.06,
          duration: 0.5,
          ease: "power2.out",
        },
        "<0.3",
      );

    //footer textsplits and animations

    const baklang1 = new SplitText(".baklang", { type: "words" });
    const Baklang1 = baklang1.words;

    const naglalaptop = new SplitText(".naglalaptop", { type: "words" });
    const Naglalaptop = naglalaptop.words;

    const names = new SplitText(".names", { type: "words" });
    const Names = names.words;

    gsap.from(Baklang1, {
      yPercent: "100",
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".footer",
        start: "top 80%",
        end: "bottom bottom",
        scrub: true,
      },
    });
    gsap.from(Naglalaptop, {
      yPercent: "100",
      duration: 3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".naglalaptop",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });

    gsap.from(Names, {
      yPercent: "100",
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".names",
        start: "top center",
        end: "bottom 30%",
        scrub: true,
      },
    });

    gsap.from(BaklaImageRef.current, {
      yPercent: "100",
      scrollTrigger: {
        trigger: footerCont.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      },
    });
    // use BaklangImageRef = useRef(null); here for parallax
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
        <div className="overflow-clip bg-black">
          <div
            id="horizontal-scroll-container"
            className="relative lg:h-screen flex  "
          >
            <div className="hidden lg:block absolute z-0 top-[40%] bg-white h-5 min-w-[160vw]"></div>
            <section
              ref={container}
              className="lg:absolute z-10 lg:flex w-full will-change-transform"
            >
              <div className="content h-screen  px-5 lg:px-10 flex flex-col  w-screen shrink-0 ">
                <div>
                  <h1 className="font-urbanist text-sm md:text-xl font-light text-white">
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
                          {/* this bastard is an absolute and should be careful putting css above it */}
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
                            sizes="280px"
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
                            sizes="280px"
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
                            sizes="280px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[45%] md:top-[50%] text-white">
                    <div className="flex gap-2 font-cormorant_infant text-3xl lg:text-7xl">
                      <h1>Performative</h1>
                      <h1 className="text-[#df0505]">Masculinity</h1>
                    </div>
                    <h1 className="font-urbanist text-sm lg:text-3xl">
                      How Masculinity and Gender is shaped by Society
                    </h1>
                  </div>
                </div>
                <div className="font-urbanist text-sm lg:text-xl flex justify-end items-end text-white">
                  <h1>BSIT 4-3</h1>
                </div>
              </div>
              <div className="hidden lg:block h-screen lg:shrink-0 lg:w-screen font-cormorant_infant relative px-40 bg-transparent">
                <h1 className="text-5xl lg:absolute lg:top-[30%] text-shadow-white">
                  What is Performative Masculinity?
                </h1>
              </div>
            </section>
          </div>
          <section className="title-wrap flex flex-col lg:flex-row bg-black">
            <div className="title-cont sticky top-0 z-10 flex h-[25svh] w-full items-center justify-center border-b border-white bg-black lg:h-screen lg:w-1/2 lg:self-start lg:border-b-0 lg:border-r">
              <div className="flex flex-col font-cormorant_infant text-3xl text-white lg:text-5xl">
                <h1>What is</h1>
                <h1>Performative Masculinity ?</h1>
              </div>
            </div>

            <div className="flex flex-col min-h-[300vh] w-full justify-center items-center gap-10 lg:gap-30 px-5 pt-10 lg:w-1/2 lg:px-10 lg:pt-40">
              <h1 className="text-sm lg:text-2xl font-urbanist text-white">
                Refers to ways in which masculinity is expressed, enacted, and
                maintained through behaviors that are influenced by societal
                expectations and gender norms. These behaviors may be used to
                conform to social expectations, to gain acceptance or reinfoce a
                particular masculine identity.
              </h1>
              <div className="font-urbanist flex gap-10 flex-col text-white">
                <div className=" flex flex-col text-sm lg:text-2xl gap-10">
                  <p className="w-full">
                    "I prefer not to apply make-up because that will make me
                    look feminine or look gay"
                  </p>
                  <p className="w-full">
                    "You are a male therefore you shouldn't be a nurse"
                  </p>
                </div>
                <p className="text-sm lg:text-2xl">
                  Females that wear male clothing, expressing toughness and
                  boldness to survive an envirionement that is harmful for a
                  normal/traditional feminine characteristics
                </p>
              </div>
            </div>
          </section>
          <section
            ref={revealMatchaSection}
            className="relative min-w-full bg-black"
          >
            <div
              ref={revealcont}
              className="absolute h-screen z-10 [clip-path:polygon(0%_0%,101%_0%,101%_101%,0%_101%)] bg-black flex justify-center items-center inset-x-0 w-full"
            >
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-30">
                <div className="h-30 w-30 lg:h-50 lg:w-50 relative overflow-hidden">
                  {/* this bastard is an absolute and should be careful putting css above it */}
                  <Image
                    src={Matcha}
                    alt="Matcha Latte"
                    fill={true}
                    loading="eager"
                    className="object-cover z-10"
                    sizes="280px"
                  />
                  {/* hide the damn image using clip path and div */}
                  <div
                    ref={matcha}
                    className="matcha absolute z-20 inset-0 bg-black [clip-path:polygon(-1%_-1%,101%_-1%,101%_101%,-1%_101%)]"
                  ></div>
                </div>
                <div className="h-30 w-30 lg:h-50 lg:w-50 relative overflow-hidden">
                  <Image
                    src={Performative}
                    alt="Performative Male"
                    fill={true}
                    loading="eager"
                    className="object-cover z-10"
                    sizes="280px"
                  />
                  {/* hide the damn image using clip path and div */}
                  <div
                    ref={performative_male}
                    className="performative-male absolute z-20 inset-0 bg-black [clip-path:polygon(-1%_-1%,101%_-1%,101%_101%,-1%_101%)]"
                  ></div>
                </div>
                <div className="h-30 w-30 lg:h-50 lg:w-50  relative overflow-hidden">
                  <Image
                    src={Atomic}
                    alt="Atomic-Habits"
                    fill={true}
                    loading="eager"
                    className="object-cover z-10"
                    sizes="280px"
                  />
                  {/* hide the damn image using clip path and div */}
                  <div
                    ref={atomic}
                    className="atomic absolute z-20 inset-0 bg-black [clip-path:polygon(-1%_-1%,101%_-1%,101%_101%,-1%_101%)]"
                  ></div>
                </div>
              </div>
            </div>
            {/* revealed content here */}
            <div className="min-h-[110vh] flex bg-black">
              <div className="my-20 lg:my-30 flex flex-col lg:flex-row flex-1 px-5 lg:px-20 justify-between">
                <div className="font-urbanist w-full lg:w-[50%] flex flex-col gap-5 lg:gap-30 ">
                  <div className="text-3xl lg:text-6xl flex font-cormorant_infant text-white">
                    <h1>Performative</h1>
                    <h1 className="text-[#74A12E]">Male</h1>
                  </div>
                  <p className="text-sm lg:text-xl text-white">
                    Matcha Latte, Tote Bags, Preppy/Baggy Clothing, Self
                    Help/Feminist Books, Labubus are the characteristics of a
                    Performative Male, However Performative Male is under
                    performative femininity. "these are men who visibly
                    accessorize with objects that carry significance for women
                    or men that wants to attract the female gaze" (Taraban)
                  </p>
                </div>
                <div className="h-full w-full lg:w-70 relative flex justify-center items-center mt-10 lg:mt-0">
                  <Image
                    src={Performative_Male}
                    alt="Performative Male"
                    loading="eager"
                    className="object-cover"
                    sizes="280px"
                    fill={true}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="font-urbanist">
            <div className="cont1 h-screen  p-5 lg:p-20">
              <h1 className="text-4xl lg:text-6xl text-white definition-terms overflow-hidden">
                Definition of Terms :
              </h1>
              <div className="flex items-center h-full lg:h-full">
                <div className="grid grid-cols-1 text-white lg:grid-cols-3 w-full h-full lg:h-full px-5 lg:px-20 pt-10 lg:pt-15 gap-4 lg:gap-15">
                  <div className="text-lg lg:text-xl masculine-doxa mt-10 lg:mt-0">
                    <h1 className="font-semibold">Masculine Doxa</h1>
                    <p className="font-light">
                      Socially embedded tradition, opinion, norm of what a man
                      is.
                    </p>
                  </div>
                  <div className="text-lg lg:text-xl doing-gender">
                    <h1 className="font-semibold">Doing Gender</h1>
                    <p className="font-light">
                      A Sociological concept that gender is not a biologically
                      inherent thing, that gender could be performed depending
                      on social context, norm, or expectations.
                    </p>
                  </div>
                  <div className="text-lg lg:text-xl masculine-habitus">
                    <h1 className="font-semibold">Masculine Habitus</h1>
                    <p className="font-light">
                      Set of bodily dispositions, and mental structures
                      (O'Toole) constructed and accomplished in connection
                      within the space that is reserved for men (Bourdeu).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cont2 h-screen  p-5 lg:px-20 lg:py-0 flex flex-col bg-black">
              <div className="flex flex-col flex-1 text-white ">
                <div className="perfmas1 lg:text-6xl text-3xl  pt-10 lg:pt-20 ">
                  <h1>Performative Masculinity</h1>
                  <div className="flex gap-3">
                    <h1>a</h1>
                    <span className="font-cormorant_infant *:underline *:decoration-2 *:underline-offset-3">
                      Gender
                    </span>
                    <h1>Related Issue?</h1>
                  </div>
                </div>
                <div className=" grid grid-cols-1 gap-y-4 text-sm lg:text-3xl flex-1 relative font-light">
                  <div className="absolute inset-0 px-5 pt-10 lg:px-20   flex flex-col explanation1 gap-10">
                    <p>
                      Performative Masculinity is a sociological concept where
                      men/individuals behaves, acts, performs based on societal
                      norms, pressure or expectations.
                    </p>
                    <p>
                      Performative Masculinity is an application of "Doing
                      Gender", Caffrey clarifies that according to Candace West
                      and Don Zimmerman in their article "Doing Gender" that
                      gender is a social construct rather than a biological
                      determined trait, and that individuals perform gender
                      based on societal expectations or cultural norms that
                      often pressure individuals to be restricted of their
                      personal freedom and conform to predefined notions of
                      masculinity or femininity (Caffrey).
                    </p>
                  </div>

                  <div className="absolute inset-0 px-5 pt-10 lg:px-20 gap-10 flex flex-col explanation2 not-only:">
                    <p>
                      Performative Masculinity can be performed by individuals
                      due to social pressure, expectations or norms in shaping,
                      expressing gender.
                    </p>

                    <p>
                      According to Pitt and Fox on their paper "Performative
                      Masculinity: A New Theory on Masculinity", that
                      Masculinity is not a fixed thing, Performative Masculinity
                      allows change in the Masculine Doxa, the Masculine Habitus
                      and allows for change for what is, and what is it to be a
                      man in the post modern world (Pitt, Fox), within the paper
                      they also created three types of masculinity :
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cont3 h-screen flex flex-col lg:flex-row justify-end items-end lg:justify-normal lg:items-stretch px-5 lg:px-0">
              <div className="flex-1 pt-10 lg:px-20 lg:pt-20 text-white">
                <div>
                  <div className="grid grid-cols-1 gap-y-5">
                    <h1 className="orthodox text-3xl lg:text-6xl">
                      Orthodox Masculinity
                    </h1>
                    <p className="def1 text-xl lg:text-2xl font-light lg:font-normal">
                      Traditional man that follows established social/cultural
                      norms of what it is being a man
                    </p>
                  </div>
                </div>
                <div className="example1 flex flex-col px-5 lg:px-20 pt-10 gap-y-10 text-lg lg:text-2xl font-light lg:font-normal">
                  <h1>Example/Chracteristics :</h1>
                  <div>
                    <h1>Emotionally Supressive</h1>
                    <h1>Conservative</h1>
                    <h1>
                      Often portrays strength through actions and physical
                      appearance
                    </h1>
                    <h1>Avoids things associated with femininity</h1>
                  </div>
                </div>
              </div>
              <div className=" w-40 h-25 lg:flex-none lg:w-[25%] flex-1 lg:h-full relative overflow-hidden">
                <Image
                  src={Pattinson}
                  alt="Andrew-Jacked"
                  fill={true}
                  loading="eager"
                  className="object-cover z-10"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div
                  ref={OrthodoxRef}
                  className="bg-black [clip-path:polygon(-1%_-1%,101%_-1%,101%_101%,-1%_101%)] inset-0 absolute z-20"
                ></div>
              </div>
            </div>
            <div className="cont4 h-screen flex flex-col lg:flex-row justify-end items-end lg:justify-normal lg:items-stretch px-5 lg:px-0 text-white">
              <div className="heterodox flex-1 lg:px-20">
                <h1>
                  The person in the image is actually a Dad with 2 kids
                  @tani_takuma on X/Twitter
                </h1>
                <div className="pt-10 lg:pt-20">
                  <div className="grid grid-cols-1 gap-y-5">
                    <h1 className="text-3xl lg:text-6xl">
                      Heterodox Masculinity
                    </h1>
                    <p className="font-light lg:font-normal text-xl lg:text-2xl ">
                      Reworks Traditional Masculinity while Maintaning Masculine
                      Identity
                    </p>
                  </div>
                </div>
                <div className="example2 flex flex-col px-5 lg:px-20 pt-10 gap-y-10 text-lg lg:text-2xl font-light lg:font-normal">
                  <h1>Example/Chracteristics :</h1>
                  <div>
                    <h1>Emotionally Expressive/Open</h1>
                    <h1>Challenges Gender-Norms</h1>
                    <h1>Stay-At-Home Dad</h1>
                    <h1>Egalitarian Man</h1>
                  </div>
                </div>
              </div>
              <div className="w-40 h-25 lg:flex-none lg:w-[25%] flex-1 lg:h-full relative overflow-hidden">
                <Image
                  src={Takumi}
                  alt="Takumi"
                  fill={true}
                  loading="eager"
                  className="object-cover z-10"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div
                  ref={HeterodoxRef}
                  className="bg-black [clip-path:polygon(-1%_-1%,101%_-1%,101%_101%,-1%_101%)] inset-0 absolute z-20"
                ></div>
              </div>
            </div>
            <div className="cont5 h-screen flex flex-col lg:flex-row justify-end items-end lg:justify-normal lg:items-stretch px-5 lg:px-0 text-white">
              <div className="flex-1 pt-10 lg:px-20 lg:pt-20">
                <div>
                  <div className="grid grid-cols-1 gap-y-5">
                    <h1 className="cacodox text-3xl lg:text-6xl">
                      Cacodoxy Masculinity
                    </h1>
                    <p className="def3 text-xl lg:text-2xl font-light lg:font-normal">
                      Challenges Traditional Masculinity,crosses boundaries of
                      traditional Feminine/Masculine behaviours and may attract
                      sanction
                    </p>
                  </div>
                </div>
                <div className="example3 flex flex-col px-5 lg:px-20 pt-10 gap-y-10 text-lg lg:text-2xl font-light lg:font-normal">
                  <h1>Example/Chracteristics :</h1>
                  <div>
                    <h1>
                      Gay Men who are attracted to the same gender and dresses
                      feminine
                    </h1>
                    <h1>Conservative</h1>
                    <h1>Drag Queens</h1>
                    <h1>
                      Abandoning Traditional/Orthodox Masculinity through
                      adopting feminine fashion, identity, and mannerisms
                    </h1>
                  </div>
                </div>
              </div>
              <div className=" w-40 h-25 lg:flex-none lg:w-[25%] flex-1 lg:h-full relative overflow-hidden">
                <Image
                  src={Vittar}
                  alt="Vittar"
                  fill={true}
                  loading="eager"
                  className="object-cover z-10"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div
                  ref={CacodoxRef}
                  className="bg-black [clip-path:polygon(-1%_-1%,101%_-1%,101%_101%,-1%_101%)] inset-0 absolute z-20"
                ></div>
              </div>
            </div>
            <div className="cont6 h-screen bg-black p-5 lg:px-20 lg:py-0 flex flex-col">
              <div className="flex flex-col flex-1 text-white ">
                <div className="perfmas2 lg:text-6xl text-3xl  pt-10 lg:pt-20 ">
                  <h1>Performative Masculinity</h1>
                  <div className="flex gap-3">
                    <h1>a</h1>
                    <span className="font-cormorant_infant *:underline *:decoration-2 *:underline-offset-3">
                      Gender
                    </span>
                    <h1>Related Issue?</h1>
                  </div>
                </div>
                <div className=" grid grid-cols-1 gap-y-4 text-sm lg:text-3xl flex-1 relative font-light ">
                  <div className="absolute inset-0 px-5 pt-10 lg:px-20 flex explanation3">
                    <p>
                      Pitt and Fox also argues that these categories are not a
                      fixed notion, but rather a continuum. Meaning that
                      Men/People may strategically shift between these
                      masculinities depending on social context, norm, or
                      expectations.
                    </p>
                  </div>
                  <div className="absolute inset-0 px-5 pt-10 lg:px-20 flex explanation4">
                    <p>
                      Performative Masculinity can be performed by both sexes.
                      Depending on the context, both men and women have their
                      own share of masculinity and femininity, example provided
                      by (Taraban) in his YouTube video explaining Performative
                      Masculinity that is performed by a woman in an ICE arrest,
                      further clarifying that the said woman is trying to
                      express a message to Federal Agents that they should fear
                      her, but Taraban elucidated that the woman fails to
                      express her message by acting tough because it was a
                      "Performance" implying that women are not eexpected to act
                      boldly, manly, or masculine for the sake of others because
                      its not the expected thing to do (Taraban).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="overallSection h-screen bg-black text-black font-urbanist flex justify-center items-center overflow-hidden">
            <div className="flex-1 flex flex-col h-full max-h-[50vh] lg:flex-row justify-center items-center text-white px-5 lg:px-20">
              <h1 className="overallText font-bold text-5xl lg:text-9xl text-center">
                Overall
              </h1>
              <div className="overallPar flex-1 max-w-[60ch] text-xl font-light grid items-center overflow-hidden pl-5">
                <p className=" par1 col-start-1 row-start-1">
                  Performative Masculinity is a social issue due to the fact
                  that it affects both sexes due to societal norms, expectations
                  and traditions that affects gender. It also emphasizes that
                  masculinity isn't a fixed notion but rather a continuum where
                  individuals can shift between them depending on context.
                </p>
                <p className=" par2 col-start-1 row-start-1">
                  Understanding Performative Masculinity allows us to understand
                  masculinity as a whole, recognizing behaviours, influence,
                  socially established norms, expectations and traditions.
                  Therefore understanding its characteristics as a social
                  construct enacts a deeper understanding of its challenges, or
                  how it is maintained and practiced.
                </p>
              </div>
            </div>
          </section>
          <section className="h-screen flex bg-black py-20">
            <div className="bg-[#F0A500] flex-1 px-5 lg:px-20 py-10 flex flex-col gap-y-5">
              <h1 className="font-cormorant_infant text-4xl lg:text-6xl text-black border-b border-black">
                References
              </h1>
              <div className="font-urbanist flex flex-col gap-y-5 lg:text-xl text-white">
                <p>Bourdieu, Pierre, Masculine Domination, 1998</p>
                <p className="break-all">
                  Taraban, Orion. "Performative masculinity: it's not what you
                  think". YouTube, uploaded by Orion Taraban, 30 Mar. 2026,
                  “https://youtu.be/EBAKVDSpDQ0”
                </p>
                <p className="break-all">
                  Caffrey, Cait. "Doing Gender" Article Sociology, 2019
                  "https://www.ebsco.com/research-starters/sociology/doing-gender/"
                </p>
                <p className="break-all">
                  Susan, Pitt L., Fox, Christopher A. "Performative Masculinity:
                  A New Theory on Masculinity" 2012
                  "https://brill.com/display/book/edcoll/9781848880948/BP000006.xml"
                </p>
                <p className="break-all">
                  O'Toole, Olga. "Habitus, Culture, and Human Sexuality. Notions
                  of Consent in the Sexual Habitus" 2021, Journal
                  “https://ejournals.eu/pliki_artykulu_czasopisma/pelny_tekst/17549334-9695-410b-b93a-00d35925bd46/pobierz”
                </p>
              </div>
            </div>
          </section>
          <section
            ref={footerCont}
            className="footer h-[80vh] lg:h-screen font-urbanist flex-1 relative text-white"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <h1 className="baklang text-6xl lg:text-[200px] font-semibold leading-none [text-box:trim-both_cap_alphabetic] overflow-hidden">
                  BAKLANG
                </h1>
                <div className="names grid grid-cols-2 lg:gap-x-100 border-t border-white mt-40 lg:mt-20 lg:mx-20 overflow-hidden font-light text-sm lg:text-base">
                  <div className="grid grid-cols-2">
                    <h1>Mark Llorca</h1>
                    <h1>John Lloyd Escultura</h1>
                  </div>
                  <div className="grid grid-cols-2">
                    <h1 className="text-end">Raydan Tagub</h1>
                    <h1 className="text-end">Seann Wyett Larga</h1>
                  </div>
                </div>
              </div>

              <h1 className="naglalaptop text-6xl lg:text-[200px] font-semibold leading-none [text-box:trim-both_cap_alphabetic] overflow-hidden">
                NAGLALAPTOP
              </h1>
            </div>
            <div className="absolute inset-x-0 place-items-center flex justify-center bottom-0">
              <div
                ref={BaklaImageRef}
                className="relative w-50 h-90 lg:w-100 lg:h-140"
              >
                <Image
                  src={Bakla}
                  alt="Takumi"
                  fill={true}
                  loading="eager"
                  className="object-cover "
                  sizes="(min-width: 1024px) 50vw, 100vw "
                />
              </div>
            </div>
          </section>
        </div>
      </ReactLenis>
    </>
  );
}
