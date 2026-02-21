import React from "react";

import { companies, workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full" id="experience" >
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full max-w-4xl mx-auto mt-12 grid lg:grid-cols-1 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think or may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:hidden lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-white-100 mt-3 font-semibold text-justify whitespace-pre-line">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
      <div className="w-full flex justify-center max-lg:mt-10 mt-10">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex shrink-0 justify-center">
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className={`md:w-24 w-20 rounded-full ${company.id === 3 ? "bg-grey" : "bg-white"}`}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
