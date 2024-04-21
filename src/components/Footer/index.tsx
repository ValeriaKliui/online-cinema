import { FOOTER_LINKS } from '@/constants/paths';
import { Button } from '@/shared/Button';
import { Link } from 'react-router-dom';
import {
    FooterConainer,
    SubInfo,
    LinksContainer,
    FooterLinks,
} from './styled';

export const Footer = () => (
    <>
        <FooterConainer>
            <FooterLinks className="wrapper">
                {FOOTER_LINKS.map(({ title, links }) => (
                    <LinksContainer key={title}>
                        <p>{title}</p>
                        {links.map(({ link, title }) => (
                            <Link to={link} key={title}>{title}</Link>
                        ))}
                    </LinksContainer>
                ))}
                <div>
                    <p>Поддержка</p>
                    <p>Мы всегда готовы вам помочь.
                        Наши операторы онлайн 24/7</p>
                    <Button >Написать в чате</Button>
                </div>
            </FooterLinks>
        </FooterConainer>
        <SubInfo className="wrapper">
            <p>© 2015-2023 Illuminous</p>
            <p>Пользовательские соглашения</p>
        </SubInfo>
    </>
);
