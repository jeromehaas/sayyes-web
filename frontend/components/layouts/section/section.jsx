const Section = ({ children, className }) => {

    return (
        <section className={`${ className } section`}>
            <div className={`${ className }__inner section__inner ${ className }__inner--left section__inner--left`}></div>
            <div className={`${ className }__inner section__inner ${ className }__inner--center section__inner--center`}>{ children }</div>
            <div className={`${ className }__inner section__inner ${ className }__inner--right section__inner--right`}></div>
        </section>
    )

};

export default Section;