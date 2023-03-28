const Section = ({ children, className }) => {

    return (
        <section className={`${ className } section`}>
            <div className={`${ className }__inner section__inner`}>{ children }</div>
        </section>
    )

};

export default Section;