

function Login(){
    return(
        <div className="login">
            <div className="login__playerContainer">
                <div>
                    <div className="login__playerCard">
                        <img src="/user.svg" alt="" />
                        <p>player 1</p>
                    </div>
                    <div className="login__playerCard">
                        <img src="/user.svg" alt="" />
                        <p>player 2</p>
                    </div>
                    <div className="login__playerCard">
                        <img src="/user.svg" alt="" />
                        <p>player 3</p>
                    </div>
                    <div className="login__playerCard">
                        <img src="/user.svg" alt="" />
                        <p>player 4</p>
                    </div>
                </div>
            </div>
            <div>
                <h1>table size setup</h1>
            </div>

        </div>
    );
}


export { Login };