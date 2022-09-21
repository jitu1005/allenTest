import React from "react";






export default function AboutUs() {

  return (
    <div>
        <div className = "banner">
            <img src = "./about.jpg" alt ="Into" className="img-fluid" />

           
            
        </div>
        <div className="container my-3"></div>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="container">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                Introduction
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body">
                <strong>Welcome to ALLEN Digital!</strong>
                <br />
                ALLEN Career Institute, colloquially known as ALLEN, is the most
                experienced player in the field of coaching in India today.
                Keeping up with evolving times, we are stepping into a new era
                with our e-learning platform ALLEN Digital Having already
                established ourselves as the top choice for offline coaching in
                the country, Allen will now replicate the popular offline
                coaching programmes, online. Over the last 3 decades, ALLEN has
                been dedicated to nation-building and preparing global citizens.
                ALLEN has gone on to become the top choice and the most loved
                brand for students and parents alike. ALLEN has emerged as the
                preferred destination for preparing for prestigious entrance
                examinations, including JEE (Advanced), JEE (Main), NEET (UG),
                and has been consistently producing top rankers in these exams,
                year on year. We can confidently say that ALLEN Digital is the
                career-building pillar of India for the youth of tomorrow. ALLEN
                Digital, built upon the foundation of a rich academic legacy,
                has embarked on the endeavour to enable each & every learner to
                have access to the best academics through the digital medium. In
                the wake of the changing scenarios and continuously evolving
                learning trends, students will definitely find ALLEN Digital as
                not just their best guide, but also a highly-dependable
                companion.
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                An Enduring Legacy
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body">
                <strong>
                  “Allen has the leadership in classroom programmes.
                </strong>{" "}
                <br /> We have an academic legacy of three decades and a
                leadership position in the offline coaching centres. We are
                hoping to replicate it in online coaching as well,” says Mr.
                Anand Maheshwari, MD, Allen Digital. The foundation of ALLEN
                Career Institute, popularly known as ALLEN, was laid in the year
                1988. ALLEN had humble beginnings, starting with a coaching
                centre with less than 10 students and subsequently saw
                tremendous growth as years passed. Today, ALLEN is a nationally
                renowned name among students aspiring for success in the JEE
                (Main), JEE (Advanced), NEET (UG), NTSE, KVPY and the Olympiads.
                During these three decades, our students have their left mark on
                competitive and talent exams. The proven legacy behind ALLEN’s
                system and the success of its students, year-on-year, has given
                it an edge. Today, ALLEN has one of the best in class teachers
                who keenly look forward to mentoring and inspiring students to
                achieve greater goals.
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Core Values
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div className="accordion-body">
                <strong>संस्कार से सफलता तक</strong> <br />
                ALLEN is the emblem of a united family. Our respect towards the
                Indian values is reflected in the collective efforts we make to
                ensure the students' success. Our teachers are personally
                committed to the students' success and inculcate the right
                cultural and moral values. श्रेष्ठ शिक्षक, सर्वोत्तम परिणाम Our
                pool of talented faculty is the real catalyst behind a student's
                growth and success. They are the backbone of our product
                development system as they prepare tailor-made courses that
                ultimately map out the road to success for our learners. The
                highly experienced, qualified, and dedicated assemblages of
                teachers are the custodians of the highly successful teaching
                methodology, and they are our greatest resource. शिष्य प्रधानता
                At ALLEN, students are our highest priority. We are committed to
                their academic pursuits and their mental well-being, personal
                and cultural growth.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
