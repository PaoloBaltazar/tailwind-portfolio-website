"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import littleLemon from '../assets/little-lemon.png'
import todolist from '../assets/todo-list.png'
import weatherApp from '../assets/weather-app.png'
import gradePredictorApp from '../assets/thesisProject.png'
import hotelApp from '../assets/bchainProject.png'

export function Projects() {
  return (
    (<div className="max-w-7xl mx-auto px-4 mt-36 relative z-10">
      <section className="text-white content-center"> 
        <div className="justify-items-center mb-8">
          <div>
            <h1 className="font-primaryBold text-3xl lg:text-5xl">Projects</h1>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />
          </div>
          
          
          <h2 className="font-primaryMedium text-lg mt-2 lg:text-xl">
            Check out some of my work right here
          </h2>
          
        </div>

        <div className="grid gap-16 justify-items-center mb-16 md:grid-cols-2 lg:grid-cols-3">
          <PinContainer title="/PaoloBaltazar/Meta-LittleLemon-Booking-Website" href="https://github.com/PaoloBaltazar/Meta-LittleLemon-Booking-Website">
          <div
            className="flex basis-full  flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] h-[18rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Meta - Little Lemon Restaurant
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
              React - HTML - CSS
              </span>
            </div>
            <img className="flex flex-1 w-full object-cover rounded-lg mt-4" src={littleLemon}/>
          </div>
          </PinContainer>

          <PinContainer title="/PaoloBaltazar/thesis-grade-predictor-app" href="https://github.com/PaoloBaltazar/thesis-grade-predictor-app">
            <div
              className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] h-[18rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Grade Predictor App
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Python - HTML - CSS
                </span>
              </div>
              <img className="flex flex-1 w-full object-cover rounded-lg mt-4" src={gradePredictorApp}/>
            </div>
          </PinContainer>

          <PinContainer title="/PaoloBaltazar/BlockChain-Based-Hotel-System" href="https://github.com/PaoloBaltazar/BlockChain-Based-Hotel-System">
            <div
              className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] h-[18rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Hotel Dapp
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Solidity - React - HTML - CSS
                </span>
              </div>
              <img className="flex flex-1 w-full object-cover rounded-lg mt-4" src={hotelApp}/>
            </div>
          </PinContainer>

          <PinContainer title="/PaoloBaltazar/Weather-App" href="https://github.com/PaoloBaltazar/Weather-App">
            <div
              className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] h-[18rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Weather App
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  JavaScript - HTML - CSS
                </span>
              </div>
              <img className="flex flex-1 w-full object-cover rounded-lg mt-4" src={weatherApp}/>
            </div>
          </PinContainer>

          <PinContainer title="/PaoloBaltazar/Todo-List-App" href="https://github.com/PaoloBaltazar/Todo-List-App">
            <div
              className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] h-[18rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Todo-List App
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  JavaScript - HTML - CSS
                </span>
              </div>
              <img className="flex flex-1 w-full object-cover rounded-lg mt-4" src={todolist}/>
            </div>
          </PinContainer>
        </div>

        
      </section>

      
    </div>)

    
  );
}
