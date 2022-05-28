import SubjectCard from "../components/SubjectCard";
import Header from "../components/Header";

import engIcon from "../../english__2_-removebg-preview.png";
import mathIcon from "../../Crypto__4_-removebg-preview.png";
import sciIcon from "../../science-removebg-preview.png";
import cryptoIcon from "../../Crypto__3_-removebg-preview.png";

function Home(props) {
    const onClick = props.onClick;
    return (
        <div>
            <Header>Choose a category to start!</Header>
            <div className="flex  justify-center mt-16">
                <SubjectCard
                    imgSrc={engIcon}
                    imgAlt="An illustration of a globe"
                    subject="English"
                    onClick={onClick}
                />
                <SubjectCard
                    imgSrc={mathIcon}
                    imgAlt="An illustration of a shield"
                    subject="Maths"
                    onClick={onClick}
                />
                <SubjectCard
                    imgSrc={sciIcon}
                    imgAlt="An illustration of a beaker"
                    subject="Science"
                    onClick={onClick}
                />
                <SubjectCard
                    imgSrc={cryptoIcon}
                    imgAlt="An illustration of a meteor"
                    subject="Crypto"
                    onClick={onClick}
                />
            </div>
        </div>
    );
}


export default Home;
