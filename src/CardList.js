import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div className="card-div">
            {
                robots.map((person, i) => {
                    return (
                        <Card key={i} name={robots[i].name} email={robots[i].email} />
                    )
                })
            }
        </div>
    )
}

export default CardList;