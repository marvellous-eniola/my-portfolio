import React from "react";
import "../Styles/Experience.css"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { FaSchool } from "react-icons/fa";


export default function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014-2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="verical-timeline-element-title">
            Baptist Secondary School, Oke-Ado, Ibadan.
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Currently"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FaSchool />}
        >
          <h3 className="verical-timeline-element-title">
            Oye-Ekiti University, Ekiti.
          </h3>
          <p>Computer Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014-2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className="verical-timeline-element-title">
            Baptist Secondary School, Oke-Ado, Ibadan.
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014-2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="verical-timeline-element-title">
            Baptist Secondary School, Oke-Ado, Ibadan.
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
