import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

function Link({ page, selectedPage, setSelectedPage }: Props) {
  const pageLink = page.toLowerCase().replace(/ /g, "-");
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
