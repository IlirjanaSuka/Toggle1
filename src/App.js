import React, { useState } from 'react';
import './index.css'; 

function AnswerItem({ answer, explanation }) {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExplanation = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className="answer-wrapper">
      <div onClick={toggleExplanation} className="dropdown-header">
        <p className="answer">{answer}</p>
        <span className={`toggle-icon ${isExpanded ? 'up' : 'down'}`}>{isExpanded ? '↑' : '↓'}</span>
      </div>
      {isExpanded && <p className="explanation">{explanation}</p>}
    </div>
  );
}

function FAQItem({ question, answers, photo, title, content }) {
  const [isExpanded, setExpanded] = useState(false);

  const toggleAnswers = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={`faq-item ${isExpanded ? 'expanded' : ''}`}>
      <div className="question-wrapper" onClick={toggleAnswers}>
        <div className="dropdown-header">
          <div className="question-header">
            {photo && <img src={"https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"} alt="Question" className="question-photo" />}
            <div className="question-details">
              <h3 className="question-title">{title}</h3>
              <p className="question-content">{content}</p>
            </div>
          </div>
          <span className={`toggle-icon ${isExpanded ? 'up' : 'down'}`}>{isExpanded ? '↑' : '↓'}</span>
        </div>
      </div>
      {isExpanded && (
        <div className="answers-wrapper">
          {answers.map((item, index) => (
            <AnswerItem key={index} answer={item.answer} explanation={item.explanation} />
          ))}
        </div>
      )}
    </div>
  );
}

function FAQList() {
  const faqItems = [
    {
      title: 'About Us',
      content: '4 articles in this topic.',
      photo: 'url_to_your_photo', 
      answers: [
        { answer: 'Scalability', explanation: 'Our product is designed to scale seamlessly, meeting the needs of small startups to large enterprises.' },
        { answer: 'Security Features', explanation: 'We prioritize data security with robust encryption and authentication mechanisms.' },
        { answer: 'User-Friendly Interface', explanation: 'Enjoy an intuitive and user-friendly interface, ensuring a positive user experience.' },
        { answer: '24/7 Support', explanation: 'Our dedicated support team is available 24/7 to assist you with any issues or questions.' },
      ],
    },
    
  ];

  return (
    <div>
      <div className="faq-items-wrapper">
        {faqItems.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            title={item.title}
            content={item.content}
            photo={item.photo}
            answers={item.answers}
          />
        ))}
      </div>
    </div>
  );
}

export default FAQList;
