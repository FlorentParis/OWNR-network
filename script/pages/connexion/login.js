function displayLogin() {

    let user = {
        mail: null,
        password: null
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
                user.mail = null;
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
                user.password = null;
            }
        }

        sendId(e) {
            e.preventDefault();
            if(user.mail && user.password){
                if(localStorage["myDatasUsers"]){
                    let allUsers = JSON.parse(localStorage["myDatasUsers"]);
                    let indexMailConfirmation;
                    for(let i = 0; i < allUsers.length; i++){
                        if(allUsers[i]['mail'] == user.mail){
                            indexMailConfirmation = i;
                            break;
                        }
                    }
                    if(indexMailConfirmation != null){
                        if(allUsers[indexMailConfirmation]['password'] == user.password){
                            userActuel = allUsers[indexMailConfirmation];
                            displayDiscover();
                        }else{
                            alert('Mot de Passe erroné');
                        }
                    }else{
                        alert('Email erroné');
                    }
                }else{
                    alert("Aucun utilisateur n'est encore enregistré dans la base de données, veuillez vous créer un compte !");
                }
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