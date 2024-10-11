import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle,DarkThemeToggle } from "flowbite-react";
import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

export const Header = () => {
    return ( 
    <Navbar  >
            <NavbarBrand as={Link} href="https://flowbite-react.com">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Book Market</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="#" active>
                Home
                </NavbarLink>
                <NavbarLink as={Link} href="#">
                About
                </NavbarLink>
                <NavbarLink href="#">Services</NavbarLink>
                <NavbarLink href="#">Pricing</NavbarLink>
                <NavbarLink href="#">Contact</NavbarLink>

            </NavbarCollapse>
                <DarkThemeToggle />
    </Navbar>
     );
}
 
export const FooterMain = () => {
    return (
        <Footer className="rounded-none" container>
            <FooterCopyright href="#" by="Flowbite™" year={new Date().getFullYear()} />
            <FooterLinkGroup>
                <FooterLink href="#">About</FooterLink>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Licensing</FooterLink>
                <FooterLink href="#">Contact</FooterLink>
            </FooterLinkGroup>
        </Footer>
    )
}