import './Seasons.scss'
import AccordionGroup from "@/components/AccordionGroup"
import seasonItems from "@/components/Seasons/seasonItems"
import Accordion from "@/components/Accordion"
import EpisodeCard from "@/components/EpisodeCard"

const Seasons = () => {
    return (
        <AccordionGroup
            mode="dark"
            isOrderedList={false}
        >
            {seasonItems.map(({ title, subtitle, episodes}, index) => (
                <Accordion
                    className="seasons"
                    title={title}
                    titleLevelClassName='h4'
                    subtitle={subtitle}
                    id={`seasons-${index}`}
                    name="seasons"
                    isOpen={index === 0}
                    key={index}
                    isArrowButton
                >
                    <ul className="seasons__list">
                        {episodes.map((episode, index) => (
                            <li className="seasons__item" key={index}>
                                <EpisodeCard {...episode} />
                            </li>
                        ))}
                    </ul>
                </Accordion>
            ))}
        </AccordionGroup>
    )
}

export default Seasons