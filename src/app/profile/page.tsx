import CTNViewProfile from "@/containers/profile/CTNViewProfile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meu perfil - DalyGames",
  description: "Perfil Sujeito Programador",
};

export default function PProfile() {
  return <CTNViewProfile />;
}
