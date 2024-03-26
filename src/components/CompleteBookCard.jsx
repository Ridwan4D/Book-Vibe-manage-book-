const CompleteBookCard = ({data}) => {
    console.log(data);
    return (
        <div>
            <h3 className="text-3xl">{data.bookName}</h3>
        </div>
    );
};

export default CompleteBookCard;