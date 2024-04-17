const Statistic = ({
    correctWords,
    wrongWords,
    accurancy,
    wpm,
    record,
    setRecord,
}) => {
    record < wpm && setRecord(wpm);
    return (
        <div className="absolute top-0 -translate-x-[110%] border-2 border-gray-300 rounded-xl overflow-hidden">
            <div className="bg-violet-600 text-center py-3">
                <h2 className="text-white text-[40px] font-bold">{wpm} WPM</h2>
                <p className="text-white text-[16px]">(words per minute)</p>
            </div>
            <ul className="min-w-[300px]">
                <li className="text-black text-[20px] flex justify-between items-center py-1 bg-gray-100 px-3 ">
                    Accuracy <span className="font-bold">{accurancy}%</span>
                </li>
                <li className="text-black text-[20px] flex justify-between items-center py-1  px-3 ">
                    Correct words{' '}
                    <span className="text-green-600">{correctWords}</span>
                </li>
                <li className="text-black text-[20px] flex justify-between items-center py-1 bg-gray-100 px-3 ">
                    Wrong words{' '}
                    <span className="text-red-600">{wrongWords}</span>
                </li>
            </ul>
            <h3 className="text-black text-[24px] font-medium text-center mt-3">
                Your last record
            </h3>
            <h4 className="text-black text-[28px] font-bold text-center mb-3">
                {record} WPM
            </h4>
        </div>
    );
};

export default Statistic;
