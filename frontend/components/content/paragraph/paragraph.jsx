const Paragraph = ({ className, children }) => {

    return (
        <p className={`${ className } paragraph`}>{ children }</p>
    );

};

export default Paragraph;