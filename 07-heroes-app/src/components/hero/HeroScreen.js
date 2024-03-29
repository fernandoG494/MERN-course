import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroesByID } from "../../selectors/getHeroesById";

export const HeroScreen = () => {
    const { heroId } = useParams();
    const navigate = useNavigate();
    const hero = getHeroesByID(heroId);
    
    if(!hero){
        return <Navigate to='/' />
    }
    
    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;
    
    const imgPath = `/assets/${id}.jpg`;
    
    const handleReturn = () => {
        navigate(-1);
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={ imgPath }
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />
            </div>

            <div className="col-8">
                <h3>{ hero.superhero }</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <b>Alter ego: </b> { alter_ego }
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b> { publisher }
                    </li>
                    <li className="list-group-item">
                        <b>First appearance: </b> { first_appearance }
                    </li>
                </ul>

                <h5 className="mt-4">Characters</h5>
                <p>{ characters }</p>

                <button
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Return
                </button>
            </div>
        </div>
    )
}
