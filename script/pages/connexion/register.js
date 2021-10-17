function displayRegister() {

    let user = {
        mail: null,
        password: null,
        pseudo: null
    };
    
    class Register extends React.Component {

        constructor(props) {
            super(props);
        }

        back() {
            displayConnexion();
        }

        changeMail(e) {
            let input = document.querySelector("input[type='text']");
            if(e.target.value){
                if(e.target.value.includes("@")) {
                    user.mail = e.target.value;
                    input.style.borderColor = "#000";
                }else{
                    input.style.borderColor = "red";
                }
            }else{
                input.style.borderColor = "#000";
            }
        }

        changePassword(e) {
            let input = document.querySelector("input[type='password']");
            if(e.target.value){
                if(e.target.value.length > 6) {
                    user.password = e.target.value;
                    input.style.borderColor = "#000";
                }else{
                    input.style.borderColor = "red";
                }
            }else{
                input.style.borderColor = "#000";
            }
        }

        sendId(e) {
            e.preventDefault();
            if(user.mail && user.password){
                displayRegisterPseudo(user);
            }
        }

        render() {
            const divStyle = {
                padding: 16 + "px",
            }

            return <div style={divStyle}>
                <div id="connexionContainer">
                    <img src="assets/icons/arrowBack.svg" alt="" onClick={this.back.bind(this)}/>
                    <span>Register</span>
                    <form onSubmit={this.sendId}>
                        <input type="text" placeholder="Adresse Mail" onChange={this.changeMail}/>
                        <input type="password" placeholder="Mot de Passe" onChange={this.changePassword}/>
                        <button type="submit">NEXT</button>
                    </form>
                </div>
            </div>
        }

    }
        
    ReactDOM.render(
        <Register/>,
        document.querySelector('#render')
    );

}

function displayRegisterPseudo(user) {
    
    class RegisterPseudo extends React.Component {

        back() {
            displayConnexion();
        }

        changePseudo(e) {
            user.pseudo = e.target.value;
        }

        sendAll(e) {
            e.preventDefault();
            if(localStorage["myDatasUsers"]){
                let allUsers = JSON.parse(localStorage["myDatasUsers"]);
                allUsers.push(user);
                localStorage.setItem('myDatasUsers', JSON.stringify(allUsers));
                userActuel = user;
                displayDiscover();
            }else{
                let allUsers = [];
                allUsers.push(user);
                localStorage.setItem('myDatasUsers', JSON.stringify(allUsers));
                userActuel = user;
            }
        }

        render() {
            const divStyle = {
                padding: 16 + "px",
            }

            return <div style={divStyle}>
                <div id="connexionContainer">
                    <img src="assets/icons/arrowBack.svg" alt="" onClick={this.back.bind(this)}/>
                    <span>Register</span>
                    <form onSubmit={this.sendAll}>
                        <input type="text" placeholder="Pseudonyme" onChange={this.changePseudo}/>
                        <button type="submit">NEXT</button>
                    </form>
                    <p>By signing up, you agree to Photo’s <a href="https://en.wikipedia.org/wiki/Terms_of_service" target="_blank">Terms of Service</a> and <a href="https://en.wikipedia.org/wiki/Privacy_policy" target="_blank">Privacy Policy</a>.</p>
                </div>
            </div>
        }
    }

    ReactDOM.render(
        <RegisterPseudo/>,
        document.querySelector('#render')
    );

}