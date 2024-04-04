import React from 'react';
import avatarList from "../../constants/constants";

class AvatarList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAvatarsVisible: false,
        };
    }

    handleShowAvatars = () => {
        this.setState({ isAvatarsVisible: !this.state.isAvatarsVisible });
    };

    render() {
        const { isAvatarsVisible } = this.state;
        return (
            <div>
                <button onClick={this.handleShowAvatars}>Click!!!</button>
                {isAvatarsVisible ? (
                    <div>
                        {avatarList.map((avatar) => (
                            <div key={avatar.userName}>
                                <div>{avatar.userName}</div>
                                <img src={avatar.imageSrc} alt="avatar"/>
                            </div>
                        ))}
                    </div>
                ) : <div>Here should be list of avatars</div>}
            </div>
        );
    }
}

export default AvatarList;
