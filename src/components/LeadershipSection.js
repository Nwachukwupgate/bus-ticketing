import React from 'react';
import LeaderCard from './LeaderCard';

const LeadershipSection = () => {
    return (
      <div className="py-20">
        <div className="px-6 md:px-12">
          <div className="mb-28">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
              Campus Connect
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-8/12">
                We pride ourselves on our cutting-edge technology and a talented team of experts dedicated to transforming bus scheduling and route planning for efficient public transportation.
            </p>
          </div>
  
          <div className="grid gap-24 md:grid-cols-3 md:gap-12">
            {/* Leadership Member 1 */}
            <LeaderCard
              name="Hentoni Doe"
              role="CEO-Founder"
              imageSrc="https://tailus.io/sources/blocks/bio-link/preview/images/woman.jpg"
              facebookLink="#"
              instagramLink="#"
              twitterLink="#"
            />
  
            {/* Leadership Member 2 */}
            <LeaderCard
              name="Olawale Salami"
              role="Chief Technical Officer"
              imageSrc="https://tailus.io/sources/blocks/bio-link/preview/images/man.jpg"
              facebookLink="#"
              instagramLink="#"
              twitterLink="#"
            />
  
            {/* Leadership Member 3 */}
            <LeaderCard
              name="Olawale Salami"
              role="Chief Operations Officer"
              imageSrc="https://tailus.io/sources/blocks/bio-link/preview/images/man.jpg"
              facebookLink="#"
              instagramLink="#"
              twitterLink="#"
            />
          </div>
        </div>
      </div>
    );
};

export default LeadershipSection;
