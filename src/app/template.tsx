import { PageTransition } from "../interfaces/transitions/fade";

export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
