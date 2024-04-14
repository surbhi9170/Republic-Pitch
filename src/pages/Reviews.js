import React from 'react';
import './reviews.css';

const Reviews = () => {
    const reviews = [
        {
          name: 'Richard Paulus',
          role: 'INVESTOR',
          invested: '4 months ago',
          comment:
            "It is one of the few times that I have had to invest in something on the ground floor. Your product is a viable option and I believe will take off well. I am older now and can afford to take these chances and possibly increase my investment later.",
          amount: '$250',
          profilePic: 'path/to/profile-pic.jpg',
        },
        {
          name: 'Megan Weinshank',
          role: 'ACTIVE INVESTOR',
          invested: 'about 2 months ago',
          comment:
            "I invested because of the innovative, high-quality equipment and skilled management team in the ski and racing industry. Their competence brings assurance in their capacity to effectively maneuver through the market and further evolve product innovation. Beyond the brand, the Miller family holds a strong, loyal following thanks to their active community involvement, which resonates positively with investors like me. Their efforts to raise awareness for important issues foster connection and trust with customers, enhancing the brand's reputation and creating a lasting impact beyond products alone.",
          amount: '$2,500',
          profilePic: 'path/to/profile-pic.jpg',
        },
        {
          name: 'Charles Hirbour',
          role: 'ACTIVE INVESTOR',
          invested: 'about 2 months ago',
          comment:
            "A child self taught Skier from Connecticut then in 1968 moved to a So.Calif. Skiing was always a passion. Joined Local Cal Ski Team at Mt High north of Mt Baldy. Bode was an icon whom I admired during his break in years on the US ski team. I wanted to attend Stratton Mtn Vermont ski school but didn’t happen. At age 65 , I still hit the runs local and my son lives in a Jackson Hole. So evolutionary technology being my focus , this caught my passion and attention. Kudos Bode and team PEAK. This will be my 39th Republic Investment, although minor still awesome to know your on their team now",
          amount: '$350',
          profilePic: 'path/to/profile-pic.jpg',
        },
        // Add more reviews here
      ];
      

  return (
    <div className="reviews-container">
      <h1 className="reviews-heading">Hear from Investors</h1>
      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <img src={review.profilePic} alt="Profile" className="profile-pic" />
            <div className="review-info">
              <div className="review-header">
                <span className="review-author">{review.name}</span>
                <span className="review-role">{review.role}</span>
                <span className="review-invested">{review.invested}</span>
              </div>
              <div className="review-comment">{review.comment}</div>
              <div className="review-amount">Investment: {review.amount}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
