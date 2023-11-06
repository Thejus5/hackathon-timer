import { LinkBox, LinkWrapper } from "./actionLinks.style";

function ActionLinks() {
  return (
    <LinkWrapper>
      <LinkBox>
        <p className="label">Rules</p>
        <div className="hoverBoxLayout">
          <p className="subLabel">See all rules</p>
        </div>
      </LinkBox>
      <LinkBox>
        <p className="label">Leaderboard</p>
        <div className="hoverBoxLayout">
          <p className="subLabel">List of the best!</p>
        </div>
      </LinkBox>
      <LinkBox>
        <p className="label">Register</p>
        <div className="hoverBoxLayout">
          <p className="subLabel">Save your spot</p>
        </div>
      </LinkBox>
    </LinkWrapper>
  );
}

export default ActionLinks;
