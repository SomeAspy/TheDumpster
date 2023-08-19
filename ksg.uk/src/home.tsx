import { JSX } from 'solid-js'
import './home.css';
import Background from './assets/background.mp4'

export default function Home(): JSX.Element{
    return (
        <div>
            <video autoplay={true} muted={true} loop={true}>
                <source src={Background} />
            </video>
            <h1>KSGaming</h1>
        </div>
    )
}