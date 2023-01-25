import Meta from "./Meta";
import { TemplateFooter } from "./TemplateFooter";

type Props = {
  excludeOgImage?: boolean;
  children: React.ReactNode;
};

const Layout = ({ excludeOgImage, children }: Props) => {
  return (
    <>
      <Meta excludeOgImage={excludeOgImage} />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <TemplateFooter />
    </>
  );
};

export default Layout;
