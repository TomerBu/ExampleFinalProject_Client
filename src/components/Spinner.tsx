import { MutatingDots } from 'react-loader-spinner'

function Spinner() {
    return (
        <p >
            <MutatingDots
                visible={true}
                height="100"
                width="100"
                color="#000"
                secondaryColor="#000"
                radius="12.5"
                ariaLabel="mutating-dots-loading"
                wrapperClass="justify-center" />
        </p>

    )
}

export default Spinner