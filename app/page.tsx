import Image from "next/image";
import { GitHubIcon, LinkedInIcon } from "@/components/Icons";
import Section from "@/components/Section";
import Nav from "@/components/Nav";
import Paragraph from "@/components/Paragraph";
import NavList from "@/components/NavList";
import NavItem from "@/components/NavItem";
import Logo from "@/components/Logo";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="bg-[#e2e2e2]">
      <Nav>
        <Logo />
        <NavList>
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Projects</NavItem>
          <NavItem>Contact</NavItem>
        </NavList>
      </Nav>
      <Section>
        <div className="flex flex-col w-[700px]">
          <div className="flex w-full gap-6">
            <div className="flex flex-col gap-4">
              <Header level="1">Cientista de Dados 👋</Header>
              <Paragraph>
                Olá, me chamo Danilo Marano. Sou programador apaixonado por
                estatística vivendo em São Paulo, Brasil. 📍
              </Paragraph>
              <div className="flex gap-4">
                <LinkedInIcon />
                <GitHubIcon />
              </div>
            </div>
            <Image
              src="/../public/MinhaFoto.png"
              width={400}
              height={400}
              alt="Foto do Danilo"
            />
          </div>
        </div>
      </Section>
    </main>
  );
}
