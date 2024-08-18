import './footer.component.css';

export default function Footer(props) {
    return (
        <>
            <footer class='source'>
                {'This website is '}
                <a
                    href={`https://github.com/SomeAspy/porkord.org/blob/main/src/routes/${props.github}`}>
                    open source
                </a>
            </footer>
            <footer class='copyright'>
                <p>&copy; Aiden 2022-2023</p>
            </footer>
        </>
    );
}
