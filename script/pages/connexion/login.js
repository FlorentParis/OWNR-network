function displayLogin() {
    
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
                    <span>Login</span>
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