import tvs from "../tvDummy";

function TvItem({ tv }) {
    return (
        <div>
            {tv.name}
        </div>
    )
}
const TV = () => {
    return (
        <div>
            {tvs.results.map(function (tv) {
                return <TvItem tv={tv} />
            })}
        </div>
    )
}

export default TV;