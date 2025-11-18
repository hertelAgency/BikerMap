import biker from '../../assets/images/biker.svg';

function Biker({size=30}) {
    return(
        <div>
            <img height={size} width={size} src={biker} />
        </div>
    )
}

export default Biker;