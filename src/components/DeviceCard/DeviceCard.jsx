import './DeviceCard.scss'
import deviceCard from "@/components/DeviceCard/index";

const DeviceCard = (props) => {
    const {
        title,
        description,
        imgSrc,
    } = props

    return (
        <div className="device-card">
            <header className="device-card__header">
                <div className="device-card__image-wrapper">
                    <img
                        className="device-card__image"
                        src={imgSrc}
                        width={40}
                        height={40}
                        alt=""
                        loading="lazy"
                    />
                </div>
                <h3 className="device-card__title h4">{title}</h3>
            </header>
            <div className="device-card__description">
                <p>{description}</p>
            </div>
        </div>
    )
}

export default DeviceCard