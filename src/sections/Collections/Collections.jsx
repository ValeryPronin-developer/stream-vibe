import './Collections.scss'
import Tabs from "@/components/Tabs"
import collectionsGroups from "./CollectionsGroups"
import getIdFromTitle from "@/utils/getIdFromTitle"
import Section from "@/layouts/Section"
import SliderNavigation from "@/components/Slider/components/SliderNavigation"
import Slider from "@/components/Slider"
import CategoryCard from "@/components/CategoryCard"
import MovieCard from "@/components/MovieCard"

const Collections = () => {
    return (
        <Tabs
            className="collections container"
            title="collections"
            isEnableOnlyOnMobile
            items={collectionsGroups.map((collectionGroups) => ({
                isActive: collectionGroups.isActive,
                title: collectionGroups.title,
                children: (
                    <div className="collections__group">
                        <p className="collections__title hidden-mobile">
                            {collectionGroups.title}
                        </p>
                        {collectionGroups.items.map((collectionItem, index) => {
                            const {
                                title,
                                categoryItems,
                                movieItems,
                                sliderParams,
                            } = collectionItem

                            const titleFormatted = `${getIdFromTitle(collectionGroups.title)}-${getIdFromTitle(title)}`
                            const titleId = `${titleFormatted}-title`
                            const sliderNavigationId = `${titleFormatted}-slider-navigation`

                            return (
                                <Section
                                    className="collections__section"
                                    title={title}
                                    titleId={titleId}
                                    actions={(
                                        <SliderNavigation
                                            id={sliderNavigationId}
                                            mode="tile"
                                        />
                                    )}
                                    isActionsHiddenOnMobile
                                    key={index}
                                >
                                    <Slider
                                        sliderParams={sliderParams}
                                        navigationTargetElementId={sliderNavigationId}
                                        isBeyondTheViewportOnMobileS
                                    >
                                        {categoryItems?.map((categoryItem, index) => (
                                            <CategoryCard {...categoryItem} key={index} />
                                        )) ?? movieItems?.map((movieItem, index) => (
                                            <MovieCard {...movieItem} key={index} />
                                        ))}
                                    </Slider>
                                </Section>
                            )
                        })}
                    </div>
                )
            }))}
        />
    )
}

export default Collections