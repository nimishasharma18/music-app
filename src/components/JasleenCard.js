import React ,{useState}from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { gsap } from "gsap";
//Component
import animateCardContent  from "./animation";
//Styles
import '../styles.css';

const JasleenCard = ({ data: { headline, paragraph, tableContents } }) => {
  const cardRef = React.useRef(null);
  const timeLineRef = React.useRef(null);
  const [showYouTubeLink, setShowYouTubeLink] = useState(false);

  React.useLayoutEffect(() => {
    const gsapSelector = gsap.utils.selector(cardRef);
    const animatedElements = {
      whiteCircleImage: gsapSelector(".white-circle-image")[0],
      textBlockHeadline: gsapSelector(".text-block__headline")[0],
      textBlockParagraph: gsapSelector(".text-block__paragraph")[0],
      tableBlockRows: gsapSelector(".table-block__row"),
    };
    console.log("animatedElements", animatedElements.textBlockHeadline);
    const cardAnimation = animateCardContent(timeLineRef, animatedElements);
    cardAnimation.play();
    return () => {
      cardAnimation.kill();
    };
  }, []);

  const toggleYouTubeLink = () => {
    setShowYouTubeLink(!showYouTubeLink);
  };


  return (
    <Container
      ref={cardRef}
      id="card-table"
      fluid
      className="character-card p-4 rounded shadow"
      onClick={toggleYouTubeLink}
    >
      <Row>
        <TextBlock headline={headline} paragraph={paragraph} />
        <TableBlock tableContents={tableContents} />
      </Row>
<div className="white-circle-image">
<img src="https://resize.indiatvnews.com/en/resize/newbucket/730_-/2020/06/jasleen-1592874287.jpg"  height= {255} width={255}style={{borderRadius: "50%"}}/>
</div>
{showYouTubeLink && (
        <div>
          <a href="https://www.youtube.com/watch?v=V7LwfY5U5WI&ab_channel=SonyMusicIndia" target="_blank" rel="noopener noreferrer">
            Watch on Youtube
          </a>
        </div>
      )}
    </Container>
  );
};
export default JasleenCard;

const TextBlock = ({ headline, paragraph }) => {
  return (
    <Col sm={6} className="text-block">
      <h2 className="text-block__headline">
        {headline}
      </h2>
      <p className="text-block__paragraph">
        {paragraph}
      </p>
    </Col>
  );
};

const TableBlock = ({ tableContents }) => {
  return (
    <Col sm={6} className="table-block">
      <ul className="list-unstyled">
        {tableContents.map((rowData, index) => (
          <TableRow key={index} {...rowData} />
        ))}
      </ul>
    </Col>
  );
};

const TableRow = ({ ammount, unit, name,songName , trending}) => {
  return (
    <li className="table-block__row">
      <div className="table-block__row__line bg-black mb-2"></div>
      <p className="table-block__row__ammount">Trending song: {songName}</p>
      <p className="table-block__row__name font-weight-bold">Most Played: {trending}</p>
    </li>
  );
};

