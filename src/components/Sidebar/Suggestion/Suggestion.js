import React from 'react';
import User from "../User/User";
import {Button, SuggestionTitle, UserContainer, WordContainer} from "../../../styles/Styles";

function Suggestion() {
    return (
        <div>
        <UserContainer>
            <WordContainer>
                <SuggestionTitle>Suggestions For You</SuggestionTitle>
            </WordContainer>
            <Button black>See All</Button>
        </UserContainer>
            <User following="true" src="https://imgur.com/5xBC9OQ.jpeg" name="Mando" username="mando"
            text="Followed by asokha + 5 more"/>
        </div>
    );

}

export default Suggestion;