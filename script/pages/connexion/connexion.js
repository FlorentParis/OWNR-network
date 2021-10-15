class Connexion extends React.Component {

    constructor(props) {
        super(props);
        
        this.name = this.props.data.user;
        this.pp = "assets/" + this.props.data.pp;
        this.id = this.props.data.id;
        this.img = "assets/" + this.props.data.pic[0];
    }

    login() {
        console.log(this);
    }

    register() {
        console.log('test');
    }

    render() {
        const homeStyle = {
            backgroundImage: "url(" + this.img + ")",
            backgroundSize: 'cover',
        };

        return <div style={homeStyle} id="home">
            <div>
                <img src="assets/img/logo.png" alt="" id="logoHome"/>
                <div id="author">
                    <img src={this.pp} alt=""/>
                    <div>
                        <span>
                            {this.name}
                        </span>
                        <span>
                            {this.id}
                        </span>
                    </div>
                </div>
            </div>
            <div id="buttonContainer">
                <button onClick={this.login.bind(this)}>LOG IN</button>
                <button onClick={this.register.bind(this)}>REGISTER</button>
            </div>
        </div>
    }

}

getPosts().then(function(datas) {

    let alea = datas[Math.floor(Math.random() * datas.length)];
    
    ReactDOM.render(
        <Connexion data={alea}/>,
        document.querySelector('#render')
    );

});