import { LinkBox, LinkWrapper } from "./actionLinks.style"

function ActionLinks(){
    return(
        <LinkWrapper>
            <LinkBox>
                <p className="label">Rules</p>
                <p className="subLabel">See all rules</p>
            </LinkBox>
            <LinkBox>
                <p className="label">Leaderboard</p>
                <p className="subLabel">List of the best!</p>
            </LinkBox>
            <LinkBox>
                <p className="label">Register</p>
                <p className="subLabel">Save your spot</p>
            </LinkBox>
        </LinkWrapper>
    )
}

export default ActionLinks