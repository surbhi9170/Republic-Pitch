import React, { useState } from 'react';
import './updates.css';


const Updates = () => {
  const [updates, setUpdates] = useState([
    {
      date: 'Feb 27, 2024',
      description: 'Successfully raised $1,235,000 🍾'
    },
    {
      date: 'Feb 7, 2024',
      description: '$362,666 locked. $362,666 of raised funds were locked in a rolling close. Peak Ski Company can now start using a percentage of these funds to grow its business while continuing to accept new investments in the campaign. Learn more'
    },
    {
        date: 'Feb 5, 2024',
        description: "Republic's Community Capital Feature: Peak Skis Transforming Skis for Everyone. Peak Skis co-founders Andy With and Bode Miller sit down with Republic's Community Capital host, Antonio Namwong, to talk about the future of skiing and how Peak Skis is revolutionizing the skiing."
      },
      {
        date: 'Jan 18, 2024',
        description: "Bloomberg Businessweek: Peak's High-Performance Skis. Peak Ski Company Co-Founders Andy Wirth and Olympic Gold Medalist Bode Miller join Carol Massar and Tim Stenovec on Bloomberg Businessweek and break down Peak Ski Company's ski making business."
      },
      {
        date: 'Jan 16, 2024',
        description: "Bode Miller & Andy Wirth Live on Bloomberg Today. Tune into Bloomberg Businessweek today (January 16, 2024) at 3:30pm MST / 5:30pm EST to listen to Peak co-founders Bode Miller and Andy Wirth talk about overall business, economics, expansion."
      },
      {
        date: 'Dec 19, 2023',
        description: "Wall Street Journal's Article on the Come Back of Skinny Skis Highlights Peak 78 by Bode. The WSJ article was published in the December 16-17 print edition as well as online here: https://www.wsj.com/tech/personal-tech/skinny-skis-guide-b78fd7a3The online reach of WSJ is 28M."
      },
      {
        date: 'Dec 18, 2023',
        description: '$442,317 locked. $442,317 of raised funds were locked in a rolling close. Peak Ski Company can now start using a percentage of these funds to grow its business while continuing to accept new investments in the campaign. Learn more' // Assuming this update doesn't have likes/comments
      },
      {
        date: 'Dec 6, 2023',
        description: "Peak Skis Featured on the Homepage of Men's Journal. Men's Journal has just declared the Peak 98 by Bode as the Best Skis for Powder and Speed and the Peak 104 by Dav the Best Sidecountry Explorer.",
      },
      {
        date: 'Nov 17, 2023',
        description: 'Launched 🚀' // Assuming this update doesn't have likes/comments
      }
    // Add more updates as needed
  ]);
  
  return (
    <div className="container">
      <h1 className="heading">Update Journey</h1>
      <div className="updates">
        {updates.map((update, index) => (
          <div className="update-card" key={index}>
            <div className="update-date">{update.date}</div>
            <div className="update-description">{update.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Updates;