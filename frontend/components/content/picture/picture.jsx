import Image from "next/image";

const Picture = ({ className, src, figure }) => {

    return (
        <div className={`${ className } picture`} data-figure-form={ figure.form } data-figure-position={ figure.position } data-figure-background-color={ figure.backgroundColor } data-figure-border-color={ figure.borderColor } data-figure-ordinate={ figure.ordinate }>
            <Image  className="picture__source source" src={ src } width={ 800 } height={ 1200 } quality={ 100 } />
            <div className="picture__figure figure"></div>
        </div>
    );

};

export default Picture;