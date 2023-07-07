import '../CSS/index.css';

const discordStats = {};

fetch(
    [
        'https://discord.com/api/guilds/972931047069200384/widget.json?',
        'https://ptb.discord.com/api/guilds/972931047069200384/widget.json?',
        'https://canary.discord.com/api/guilds/972931047069200384/widget.json?',
    ][
        Math.floor(
            Math.random() *
                [
                    'https://discord.com/api/guilds/972931047069200384/widget.json?',
                    'https://ptb.discord.com/api/guilds/972931047069200384/widget.json?',
                    'https://canary.discord.com/api/guilds/972931047069200384/widget.json?',
                ].length,
        )
    ] + new Date().valueOf(),
)
    .then((res) => res.json())
    .then((data) => {
        if (!data.members.length == 0) {
            discordStats.avatar = data.members[0].avatar_url;
            if (data.members[0].status == 'online') {
                discordStats.color = '#3BA55D';
            } else if (data.members[0].status == 'idle') {
                discordStats.color = '#FAA81A';
            } else if (data.members[0].status == 'dnd') {
                discordStats.color = '#ED4245';
            }
        } else {
            discordStats.avatar = 'https://github.com/French-Cat.png';
        }
    });

const quote = await fetch('https://quotes.French-Cat.repl.co/raw').then((res) =>
    res.text(),
);

function ContactButton(props) {
    return (
        <a class='link' href={props.href} target='_blank' id={props.id}>
            <i class={`i-${props.id}`}>&nbsp;</i>
        </a>
    );
}

export default function () {
    return (
        <div class='content'>
            <a id='profilePicture' href='#popup'>
                <img
                    id='userAvatar'
                    src='assets/loading.svg'
                    alt='Profile Picture'
                    style={`border: 5px solid ${discordStats.color};`}
                />
            </a>
            <div class='overlay' id='popup'>
                <div class='popup'>
                    <div class='popup-photo'>
                        <a
                            href='https://github.com/French-Cat.png'
                            id='avatar'
                            target='_blank'>
                            {' '}
                        </a>
                    </div>
                    <div class='popup-quote'>{quote}</div>
                    <a class='popup-close' href='https://frcat.win/#/'>
                        &times;
                    </a>
                </div>
            </div>
            <div id='text'></div>
            <div id='links'>
                <ContactButton
                    href='https://www.twitch.tv/afrenchcat'
                    id='twitch'
                />
                <ContactButton
                    href='https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw'
                    id='youtube'
                />
                <ContactButton
                    href='https://github.com/French-Cat'
                    id='github'
                />
                <ContactButton
                    href='https://twitter.com/Fr3nch_C4t'
                    id='twitter'
                />
                <ContactButton
                    href='https://discord.gg/AYyTzxwkvB'
                    id='discord'
                />
                <ContactButton
                    href='https://steamcommunity.com/id/frcat'
                    id='steam'
                />
                <ContactButton
                    href='https://www.buymeacoffee.com/afrenchcat'
                    id='coffee'
                />
            </div>
            <div id='hashtag'>#FRCat4Life</div>
            <script src='assets/index.js'></script>
        </div>
    );
}
