import { forwardRef } from "react";

const Section = forwardRef(({ children, className }, ref) => {

    return (
        <section className={`${ className } section`} ref={ ref }>
            <div className={`${ className }__inner section__inner`}>{ children }</div>
        </section>
    )

});

export default Section;