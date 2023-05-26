import { PageTransition } from "../interfaces/transitions/right-page.tsx";

export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
