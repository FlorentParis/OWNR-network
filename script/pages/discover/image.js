class DisplayImage extends React.Component{

    constructor(props) {
        super(props);

        this.pic;
        this.pp;
        this.user;
        this.id;
    }

    closeImg() {
        let imgContainer = document.querySelector('#imgContainer');
        imgContainer.style.transform = "translateY(100%)";
    }

    openImg() {
        let imgContainer = document.querySelector('#imgContainer');
        imgContainer.style.transform = "translateY(0)";
    }

    creditPic() {
        if(typeof this.props.src != 'object'){
            this.pic = this.props.src;
            this.pp = "assets/img/pp/unknown.jpg";
            this.user = "unknown";
            this.id = "@unknown_unknown";
        }else{
            this.pic = this.props.src.pic;
            this.pp = this.props.src.pp;
            this.user =  this.props.src.user;
            this.id = this.props.src.id;
        }
    }

    render() {

        this.creditPic();
        
        if(document.querySelector('#imgContainer')){
            this.openImg();
        }

        const containerStyle = {
            backgroundImage: "url(" + this.pic + ")",
            transform: "translateY(0)",
        }

        return (
            <div id="imgContainer"  style={containerStyle}>
                <div id="imgInfos">
                    <div>
                        <img src={this.pp} alt="" id="pp"/>
                        <div id="infosContent">
                            <span id="name">{this.user}</span>
                            <span id="id">{this.id}</span>
                        </div>
                    </div>
                    <button id="close" onClick={this.closeImg.bind(this)}>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        )
    }
}