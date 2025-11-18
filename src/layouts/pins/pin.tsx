import pin from '../../assets/images/pin.svg';

function Pin({size=30}) {
    return(
        <div>
            <img height={size} width={size} src={pin} />
        </div>
    )
}

export default Pin;