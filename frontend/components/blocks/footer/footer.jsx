import Heading from "components/content/heading/heading";
import Paragraph from "components//content/paragraph/paragraph";
import Link from "next/link";
import Button from "components//content/button/button";

const Footer = () => {

	return (
		<footer className="footer">
			<div className="footer__inner">

				<div className="footer__box box">
					<Heading className="box__heading" level="h2">Kontakt</Heading>
					<div className="box__item item">
						<Paragraph className="item__text">SayYes KLG</Paragraph>
					</div>
					<div className="box__item item">
						<Paragraph className="item__text">Blumenrainstrasse 1, 6032 Emmen</Paragraph>
					</div>
					<div className="box__item item">
						<Link className="item__link" href="mailto:yes@sayyes-bridal.ch">
							<Paragraph className="item__text">yes@sayyes-bridal.ch</Paragraph>
						</Link>	
					</div>
				</div>

				<div className="footer__box box">
					<Heading className="box__heading" level="h2">Termin</Heading>
					<div className="box__button-container">
						<Button className="box__button">Kleid kaufen</Button>
						<Button className="box__button">Kleid verkaufen</Button>
					</div>
				</div>

				<div className="footer__box box">
					<Heading className="box__heading" level="h2">Über Uns</Heading>
					<div className="box__item item">
						<Link className="item__link" href="/imprint">
							<Paragraph className="item__text">Impressum</Paragraph>
						</Link>	
					</div>
					<div className="box__item item">
						<Link className="item__link" href="/data-privacy">
							<Paragraph className="item__text">Datenschutz</Paragraph>
						</Link>	
					</div>
					<div className="box__item item">
						<Link className="item__link" href="/agb">
							<Paragraph className="item__text">AGB</Paragraph>
						</Link>	
					</div>
				</div>

			</div>
		</footer>
	);

	

};

export default Footer;