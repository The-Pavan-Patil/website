import React, { Component } from 'react'
import Pavan from "../public/Pavan.jpg"

export class About extends Component {
  render() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8" id='About'>
        <div className="max-w-4xl w-full space-y-8 text-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={Pavan.src}
              alt="Pavan"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-purple shadow-lg"
            />
          </div>

          {/* About Me Content */}
          <div className="space-y-6">
            <h1 className="heading">
        About{" "}
        <span className="text-purple">me</span>
      </h1>
            
            <div className="max-w-2xl mx-auto">
             <p className="text-white-200 md:mt-10 my-5 text-center">
          Hi, My self Pavan Patil and I am rececnt graduate from the Pune University and a full stack developer with expertise in modern web technologies. I am passionate about building scalable and efficient software solutions that meet the needs of users.
        </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;