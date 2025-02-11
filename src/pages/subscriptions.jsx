import Plans from "@/sections/Plans"
import PlansComparison from "@/components/PlansComparison"

export const metadata = {
    title: 'Subscriptions'
}

export default () => {
    return (
        <>
            <Plans />
            <PlansComparison />
        </>
    )
}
