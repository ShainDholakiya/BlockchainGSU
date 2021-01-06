import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/layout.css"
import { Row, Col, Container } from "react-bootstrap"

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const date = new Date().getMonth()

let test = "<script type='text/javascript'>\
$('#calendar').fullCalendar({\
  header: {\
    left: 'prev,next today',\
    center: 'addEventButton',\
    right: 'month,agendaWeek,agendaDay,listWeek'\
  },\
  defaultDate: '2018-11-16',\
  navLinks: true,\
  editable: true,\
  eventLimit: true,\
  events: [{\
      title: 'Simple static event',\
      start: '2018-11-16',\
      description: 'Super cool event'\
    },\
\
  ],\
  customButtons: {\
    addEventButton: {\
      text: 'Add new event',\
      click: function () {\
        var dateStr = prompt('Enter date in YYYY-MM-DD format');\
        var date = moment(dateStr);\
\
        if (date.isValid()) {\
          $('#calendar').fullCalendar('renderEvent', {\
            title: 'Dynamic event',\
            start: date,\
            allDay: true\
          });\
        } else {\
          alert('Invalid Date');\
        }\
\
      }\
    }\
  },\
  dayClick: function (date, jsEvent, view) {\
    var date = moment(date);\
\
    if (date.isValid()) {\
      $('#calendar').fullCalendar('renderEvent', {\
        title: 'Dynamic event from date click',\
        start: date,\
        allDay: true\
      });\
    } else {\
      alert('Invalid');\
    }\
  },\
});\
\
</script><div id='calendar'></div>"

const EventsPage = () => (
  <Layout>
    <SEO title="Calendar" />
    <div className="Hero Hero-Resources">
      <Row>
        <Col sm={{ span: 8 }} md={{ span: 7 }} lg={{ span: 6 }}>
          <div className="Calendar">
            <h1>
              <u>{monthNames[date]}</u>
            </h1>
          </div>
        </Col>
      </Row>
      <Col
        xs={{ span: 10, offset: 1 }}
        sm={{ span: 10, offset: 1 }}
        md={{ span: 10, offset: 1 }}
        lg={{ span: 10, offset: 1 }}
      >
        <Row className="calendar-content">
          <Col xs={12} sm={8} md={8} lg={6}>
            <div>
              <h2>Crypto 101 Workshop</h2>
              {/* <p>Pull up for some vibes and good food.</p> */}
              <a target="_blank" href="https://www.eventbrite.com/e/crypto-101-workshop-tickets-127490171535?aff=GeneralOnly">
                Register Here
              </a>
            </div>
          </Col>
          <Col
            xs={{ span: 12, offset: 0 }}
            sm={{ span: 2, offset: 1 }}
            md={{ span: 2, offset: 1 }}
            lg={{ span: 2, offset: 2 }}
          >
            <div className="calendar-meeting-day">
              <h2>Mon</h2>
              <h2>9</h2>
            </div>
          </Col>
        </Row>
        <Row className="calendar-content">
          <Col xs={12} sm={8} md={8} lg={6}>
            <div>
              <h2>Blocklete Design Spring @ 5PM EST</h2>
              {/* <p>Pull up for some vibes and good food.</p> */}
              <a target="_blank" href="https://zoom.us/j/99179642549?pwd=a2dIZElzQ0QvUC9rR2IwTXhiV3czQT09">
                Join Here
              </a>
            </div>
          </Col>
          <Col
            xs={{ span: 12, offset: 0 }}
            sm={{ span: 2, offset: 1 }}
            md={{ span: 2, offset: 1 }}
            lg={{ span: 2, offset: 2 }}
          >
            <div className="calendar-meeting-day">
              <h2>Mon</h2>
              <h2>16</h2>
            </div>
          </Col>
        </Row>

        <Row className="calendar-content">
          <Col xs={12} sm={8} md={8} lg={6}>
            <div>
              <h2>(Crypto of the Month) BAT</h2>
              {/* <p>Pull up for some vibes and good food.</p> */}
              <a target="_blank" href="https://basicattentiontoken.org/">
                Learn More
              </a>
            </div>
          </Col>
          <Col
            xs={{ span: 12, offset: 0 }}
            sm={{ span: 2, offset: 1 }}
            md={{ span: 2, offset: 1 }}
            lg={{ span: 2, offset: 2 }}
          >
            <div className="calendar-meeting-day">
              <h2>Wed</h2>
              <h2>18</h2>
            </div>
          </Col>
        </Row>

        <Row className="calendar-content">
          <Col xs={12} sm={8} md={8} lg={6}>
            <div>
              <h2>Among Us Game Night @ 7PM EST</h2>
              {/* <p>Pull up for some vibes and good food.</p> */}
              <a target="_blank" href="https://www.eventbrite.com/e/among-us-game-night-w-bgsu-tickets-129233535985?aff=GeneralOnly">
                Register Here
              </a>
            </div>
          </Col>
          <Col
            xs={{ span: 12, offset: 0 }}
            sm={{ span: 2, offset: 1 }}
            md={{ span: 2, offset: 1 }}
            lg={{ span: 2, offset: 2 }}
          >
            <div className="calendar-meeting-day">
              <h2>Mon</h2>
              <h2>23</h2>
            </div>
          </Col>
        </Row>

        <Row className="calendar-content">
          <Col xs={12} sm={8} md={8} lg={6}>
            <div>
              {/* <h2>Blockchain Use-Case Series</h2>
              <a target="_blank" href="">
                Meeting Invitation
              </a> */}
            </div>
          </Col>
          <Col
            xs={{ span: 12, offset: 0 }}
            sm={{ span: 2, offset: 1 }}
            md={{ span: 2, offset: 1 }}
            lg={{ span: 2, offset: 2 }}
          >
            {/* <div className="calendar-meeting-day">
              <h2>Mon</h2>
              <h2>26</h2>
            </div> */}
          </Col>
        </Row>
        
      </Col>
    </div>

    <div
            dangerouslySetInnerHTML={{ __html: test }}
          />
  </Layout>
)

export default EventsPage
