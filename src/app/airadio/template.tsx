import { PageTransition } from "../../interfaces/transitions/left-page";

export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}