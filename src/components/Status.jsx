function Status(props) {
    if (props.correct) {
        
        return (
            <h2 className="bg-gray-900 dark:bg-green-400 mx-6 h-16 w-auto mb-4 rounded-md flex items-center ">
                Correct!
            </h2>   

        );
    }

    return (
        <h2 className={`text-6xl text-red-500 mt-12 font-bold text-center`}>
            Wrong!
        </h2>
    );
    
}

export default Status;
