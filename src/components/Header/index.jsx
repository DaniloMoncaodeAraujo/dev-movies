import { Link, useLocation } from 'react-router-dom'
import { clock, filter, lupa, persona, sino, wifi, logoFlix } from '../../assets/zimages'
import { Container, MenuTwo, Menu, Li } from './styles'
import { useState, useEffect } from 'react'
import { format } from 'date-fns';

function Header() {
    const [changeBackground, setChangeBackground] = useState(false)
    const { pathname } = useLocation()
    const [time, setTime] = useState(format(new Date(), 'HH:mm:ss'));

    window.onscroll = () => {
        if (window.pageYOffset > 150) {
            setChangeBackground(true)
        } else { setChangeBackground(false); }
    }

    useEffect(() => {
        const interval = setInterval(() => {
          setTime(format(new Date(), 'HH:mm'));
        }, 1000); 
    
        return () => clearInterval(interval);
    }, []);

    return (
        <Container changeBackground={changeBackground}>
            <Menu>
                <section>
                    <img src={logoFlix} alt="" />
                    <h1>DANFLIX</h1>
                </section>

                <aside>
                    <a href=""> <img src={lupa} /> </a>
                    <a href=""> <img src={filter} /> </a>
                    <a href=""> <img src={persona} /> </a>
                    <a href=""> <img src={clock} /> </a>
                    <a href=""> <img src={sino} /> </a>
                    <a href="" className='link-wifi'> <img src={wifi} /> </a>
                    <h5>{time}</h5>

                </aside>
            </Menu>

            <MenuTwo>
                <Li isActive={pathname === '/'}>
                    <Link to='/'>Home</Link>
                </Li>

                <Li isActive={pathname.includes('filmes')}>
                    <Link to='/filmes'>Filmes</Link>
                </Li>

                <Li isActive={pathname.includes('series')}>
                    <Link to='/series'>Series</Link>
                </Li>

                <Li isActive={pathname.includes('kids')}>
                    <Link to='/kids'>Kids</Link>
                </Li>

                <Li isActive={pathname.includes('anime')}>
                    <Link to='/anime'>Anime</Link>
                </Li>

                <Li isActive={pathname.includes('explorar')}>
                    <Link to='/explorar'>Explorar</Link>
                </Li>

            </MenuTwo>
        </Container>

    )
}

export default Header 