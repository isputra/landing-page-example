import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

function Link({ page, selectedPage, setSelectedPage }: Props) {
  const pageLink = page.toLowerCase().replace(/ /g, "-") as SelectedPage;
  return (
    <AnchorLink
      className={`${selectedPage == pageLink ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
      href={`#${pageLink}`}
      onClick={() => setSelectedPage(pageLink)}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;
