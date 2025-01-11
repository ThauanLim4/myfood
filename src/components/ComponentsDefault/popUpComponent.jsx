export const PopUpComponent = ({ PopUpMsg, functionClose=() => {} }) => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-lg">
                <h2 className="text-lg font-bold mb-2">{PopUpMsg}</h2>
            </div>
        </div>
    );
};