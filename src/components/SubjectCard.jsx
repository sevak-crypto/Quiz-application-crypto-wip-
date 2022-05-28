function SubjectCard(props) {
    return (
        <div
            className="bg-white backdrop-filter backdrop-blur-sm bg-opacity-10 backdrop-brightness-200 shadow-lg dark:shadow-sm skew-y-12 rounded-2xl h-80 w-60 m-5 hover:shadow-2xl dark:hover:shadow-dark"
            onClick={() => props.onClick(props.subject.toLowerCase())}
        >
            <div className="flex justify-center pt-12">
                <img
                    src={props.imgSrc}
                    alt={props.imgAlt}
                    width="180"
                    height="180"
                />
            </div>
            <h2 className="text-gray-900 dark:text-gray-900 font-sans font-bold text-2xl pt-12 pl-12">
                {props.subject}
            </h2>
        </div>
    );
}

export default SubjectCard;
