export const ButtonLinks = ({ text }: ButtonLinks) => {
    return (
        <>
            <button className='w-36 bg-red-400 py-2 px-4'>{text}</button>
        </>
    );
};
export const ButtonActions = ({ action, text }: ButtonActions) => {
    return (
        <>
            <button
                onClick={action}
                className='w-36 py-2 px-4 rounded-xl m-4 border-blue-400 border-2 hover:border-blue-700 bg-slate-200'>
                {text}
            </button>
        </>
    );
};
