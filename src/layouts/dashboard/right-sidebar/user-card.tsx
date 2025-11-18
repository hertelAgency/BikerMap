
const UserCard = ({}) => {
    return (
        <div className="mb-4">
            <div
                className={`uppercase text-xs font-bold font-poppins tracking-wider`}>
                User card
            </div>
            <div className="flex flex-row children-x-3">
                {[1, 2, 3, 4, 5, 6, 7].map((card, i) => (
                    <button
                        key={i}
                        className={`btn-transparent h-10 px-1 rounded-full`}>
                        {card}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default UserCard
