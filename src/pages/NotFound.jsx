import { GoBack } from "../helpers"

const NotFound = () => {
    return (
        <div className="h-fullVh flex justify-center align-center">
            <div className="not_found text-center">
                <h1>404</h1>
                <p className="mb-2">PAGE NOT FOUND</p>
                <button type="button" className="btn-primary btn-outline" onClick={GoBack}>GO BACK</button>
            </div>

        </div>
    )
}

export default NotFound
